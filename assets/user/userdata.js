// User Data Management System
class UserDataManager {
    constructor() {
        this.storageKey = 'solar_users';
        this.currentUserKey = 'solar_current_user';
        this.nextIdKey = 'solar_next_user_id';
        this.initializeStorage();
    }

    // Initialize storage if not exists
    initializeStorage() {
        if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify({}));
        }
        if (!localStorage.getItem(this.nextIdKey)) {
            localStorage.setItem(this.nextIdKey, '1');
        }
    }

    // Get next available user ID
    getNextUserId() {
        const nextId = parseInt(localStorage.getItem(this.nextIdKey));
        localStorage.setItem(this.nextIdKey, (nextId + 1).toString());
        return nextId;
    }

    // Create user data structure
    createUserData(userData) {
        const userId = this.getNextUserId();
        const user = {
            id: userId,
            username: userData.username,
            email: userData.email || null,
            phone: userData.phone || null,
            gender: userData.gender || null,
            avatar: userData.avatar || 'https://luoyunofficial.github.io/solar/assets/user/user_default_photo.png',
            bio: userData.bio || null,
            password: this.hashPassword(userData.password),
            verificationStatus: 0, // 0: unverified, 1: personal, 2: enterprise, 3: special
            verificationText: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        // Save to localStorage (simulating file storage)
        const users = this.getAllUsers();
        users[userId] = user;
        localStorage.setItem(this.storageKey, JSON.stringify(users));

        return user;
    }

    // Simple password hashing (for demo purposes)
    hashPassword(password) {
        // In real application, use proper hashing like bcrypt
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash).toString(16);
    }

    // Verify password
    verifyPassword(password, hashedPassword) {
        return this.hashPassword(password) === hashedPassword;
    }

    // Get all users
    getAllUsers() {
        return JSON.parse(localStorage.getItem(this.storageKey)) || {};
    }

    // Get user by ID
    getUserById(userId) {
        const users = this.getAllUsers();
        return users[userId] || null;
    }

    // Get user by username
    getUserByUsername(username) {
        const users = this.getAllUsers();
        return Object.values(users).find(user => user.username === username) || null;
    }

    // Get user by email
    getUserByEmail(email) {
        const users = this.getAllUsers();
        return Object.values(users).find(user => user.email === email) || null;
    }

    // Update user data
    updateUser(userId, updateData) {
        const users = this.getAllUsers();
        if (users[userId]) {
            users[userId] = {
                ...users[userId],
                ...updateData,
                updatedAt: new Date().toISOString()
            };
            localStorage.setItem(this.storageKey, JSON.stringify(users));
            return users[userId];
        }
        return null;
    }

    // Login user
    login(username, password) {
        const user = this.getUserByUsername(username);
        if (user && this.verifyPassword(password, user.password)) {
            localStorage.setItem(this.currentUserKey, user.id.toString());
            return user;
        }
        return null;
    }

    // Logout user
    logout() {
        localStorage.removeItem(this.currentUserKey);
    }

    // Get current logged in user
    getCurrentUser() {
        const userId = localStorage.getItem(this.currentUserKey);
        if (userId) {
            return this.getUserById(parseInt(userId));
        }
        return null;
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }

    // Validate registration data
    validateRegistration(userData) {
        const errors = [];

        if (!userData.username || userData.username.length < 3) {
            errors.push('Username must be at least 3 characters long');
        }

        if (this.getUserByUsername(userData.username)) {
            errors.push('Username already exists');
        }

        if (!userData.password || userData.password.length < 6) {
            errors.push('Password must be at least 6 characters long');
        }

        if (!userData.email && !userData.phone) {
            errors.push('Either email or phone number is required');
        }

        if (userData.email && this.getUserByEmail(userData.email)) {
            errors.push('Email already exists');
        }

        return errors;
    }

    // Get verification status text
    getVerificationStatusText(status) {
        const statusTexts = {
            0: '',
            1: 'Verified Individual',
            2: 'Verified Enterprise',
            3: 'Special Verification'
        };
        return statusTexts[status] || '';
    }
}

// Create global instance
window.userDataManager = new UserDataManager();

