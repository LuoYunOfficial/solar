import os
import json
import hashlib
from datetime import datetime
from flask import Blueprint, request, jsonify
from flask_cors import cross_origin

userdata_bp = Blueprint('userdata', __name__)

# Base directory for user data files
USERDATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), 'userdata')
NEXT_ID_FILE = os.path.join(USERDATA_DIR, 'next_id.txt')

def ensure_userdata_dir():
    """Ensure userdata directory exists"""
    if not os.path.exists(USERDATA_DIR):
        os.makedirs(USERDATA_DIR)

def get_next_user_id():
    """Get next available user ID"""
    ensure_userdata_dir()
    
    if not os.path.exists(NEXT_ID_FILE):
        with open(NEXT_ID_FILE, 'w') as f:
            f.write('1')
        return 1
    
    with open(NEXT_ID_FILE, 'r') as f:
        next_id = int(f.read().strip())
    
    with open(NEXT_ID_FILE, 'w') as f:
        f.write(str(next_id + 1))
    
    return next_id

def hash_password(password):
    """Simple password hashing (for demo purposes)"""
    return hashlib.md5(password.encode()).hexdigest()

def save_user_data(user_id, user_data):
    """Save user data to JSON file"""
    ensure_userdata_dir()
    file_path = os.path.join(USERDATA_DIR, f'{user_id}.json')
    with open(file_path, 'w') as f:
        json.dump(user_data, f, indent=2)

def load_user_data(user_id):
    """Load user data from JSON file"""
    file_path = os.path.join(USERDATA_DIR, f'{user_id}.json')
    if not os.path.exists(file_path):
        return None
    
    with open(file_path, 'r') as f:
        return json.load(f)

def get_all_users():
    """Get all users by scanning userdata directory"""
    ensure_userdata_dir()
    users = {}
    
    for filename in os.listdir(USERDATA_DIR):
        if filename.endswith('.json') and filename != 'next_id.txt':
            try:
                user_id = int(filename.replace('.json', ''))
                user_data = load_user_data(user_id)
                if user_data:
                    users[user_id] = user_data
            except ValueError:
                continue
    
    return users

def find_user_by_username(username):
    """Find user by username"""
    users = get_all_users()
    for user_data in users.values():
        if user_data.get('username') == username:
            return user_data
    return None

def find_user_by_email(email):
    """Find user by email"""
    users = get_all_users()
    for user_data in users.values():
        if user_data.get('email') == email:
            return user_data
    return None

@userdata_bp.route('/register', methods=['POST'])
@cross_origin()
def register():
    """Register a new user"""
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data.get('username') or len(data['username']) < 3:
            return jsonify({'error': 'Username must be at least 3 characters long'}), 400
        
        if not data.get('password') or len(data['password']) < 6:
            return jsonify({'error': 'Password must be at least 6 characters long'}), 400
        
        if not data.get('email') and not data.get('phone'):
            return jsonify({'error': 'Either email or phone number is required'}), 400
        
        # Check if username already exists
        if find_user_by_username(data['username']):
            return jsonify({'error': 'Username already exists'}), 400
        
        # Check if email already exists
        if data.get('email') and find_user_by_email(data['email']):
            return jsonify({'error': 'Email already exists'}), 400
        
        # Create new user
        user_id = get_next_user_id()
        user_data = {
            'id': user_id,
            'username': data['username'],
            'email': data.get('email'),
            'phone': data.get('phone'),
            'gender': data.get('gender'),
            'avatar': data.get('avatar', 'assets/images/user_default_photo.png'),
            'bio': data.get('bio'),
            'password': hash_password(data['password']),
            'verificationStatus': 0,
            'verificationText': None,
            'createdAt': datetime.now().isoformat(),
            'updatedAt': datetime.now().isoformat()
        }
        
        save_user_data(user_id, user_data)
        
        # Return user data without password
        response_data = user_data.copy()
        del response_data['password']
        
        return jsonify(response_data), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@userdata_bp.route('/login', methods=['POST'])
@cross_origin()
def login():
    """Login user"""
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        
        if not username or not password:
            return jsonify({'error': 'Username and password are required'}), 400
        
        user = find_user_by_username(username)
        if not user or user['password'] != hash_password(password):
            return jsonify({'error': 'Invalid username or password'}), 401
        
        # Return user data without password
        response_data = user.copy()
        del response_data['password']
        
        return jsonify(response_data), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@userdata_bp.route('/user/<int:user_id>', methods=['GET'])
@cross_origin()
def get_user(user_id):
    """Get user by ID"""
    try:
        user_data = load_user_data(user_id)
        if not user_data:
            return jsonify({'error': 'User not found'}), 404
        
        # Return user data without password
        response_data = user_data.copy()
        del response_data['password']
        
        return jsonify(response_data), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@userdata_bp.route('/user/<int:user_id>', methods=['PUT'])
@cross_origin()
def update_user(user_id):
    """Update user data"""
    try:
        user_data = load_user_data(user_id)
        if not user_data:
            return jsonify({'error': 'User not found'}), 404
        
        update_data = request.get_json()
        
        # Validate username if being updated
        if 'username' in update_data:
            if len(update_data['username']) < 3:
                return jsonify({'error': 'Username must be at least 3 characters long'}), 400
            
            existing_user = find_user_by_username(update_data['username'])
            if existing_user and existing_user['id'] != user_id:
                return jsonify({'error': 'Username already exists'}), 400
        
        # Validate email if being updated
        if 'email' in update_data and update_data['email']:
            existing_user = find_user_by_email(update_data['email'])
            if existing_user and existing_user['id'] != user_id:
                return jsonify({'error': 'Email already exists'}), 400
        
        # Update user data
        for key, value in update_data.items():
            if key != 'id' and key != 'password' and key != 'createdAt':
                user_data[key] = value
        
        user_data['updatedAt'] = datetime.now().isoformat()
        
        save_user_data(user_id, user_data)
        
        # Return updated user data without password
        response_data = user_data.copy()
        del response_data['password']
        
        return jsonify(response_data), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@userdata_bp.route('/users', methods=['GET'])
@cross_origin()
def get_all_users_api():
    """Get all users (without passwords)"""
    try:
        users = get_all_users()
        
        # Remove passwords from all users
        safe_users = {}
        for user_id, user_data in users.items():
            safe_data = user_data.copy()
            if 'password' in safe_data:
                del safe_data['password']
            safe_users[user_id] = safe_data
        
        return jsonify(safe_users), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

