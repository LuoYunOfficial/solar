document.addEventListener('DOMContentLoaded', function() {
  // Translations
  const translations = {
    en: {
      underConstruction: 'Under Construction',
      weAreBuilding: 'We are building something amazing!',
      thankYou: 'Thank you for your patience.'
    },
    'zh-CN': {
      underConstruction: '建设中',
      weAreBuilding: '我们正在建设一个很棒的东西！',
      thankYou: '感谢您的耐心等待。'
    },
    'zh-TW': {
      underConstruction: '建設中',
      weAreBuilding: '我們正在建設一個很棒的東西！',
      thankYou: '感謝您的耐心等待。'
    },
    ja: {
      underConstruction: '工事中',
      weAreBuilding: '素晴らしいものを建設中です！',
      thankYou: 'しばらくお待ちください。'
    },
    ko: {
      underConstruction: '공사중',
      weAreBuilding: '멋진 것을 짓고 있습니다!',
      thankYou: '기다려 주셔서 감사합니다.'
    },
    fr: {
      underConstruction: 'En construction',
      weAreBuilding: 'Nous construisons quelque chose d\'incroyable !',
      thankYou: 'Merci de votre patience.'
    },
    de: {
      underConstruction: 'Im Bau',
      weAreBuilding: 'Wir bauen etwas Erstaunliches!',
      thankYou: 'Vielen Dank für Ihre Geduld.'
    },
    id: {
      underConstruction: 'Dalam Pembangunan',
      weAreBuilding: 'Kami sedang membangun sesuatu yang menakjubkan!',
      thankYou: 'Terima kasih atas kesabaran Anda.'
    }
  };

  // Elements
  const titleElement = document.getElementById('title');
  const messageElement = document.getElementById('message');
  const thanksElement = document.getElementById('thanks');
  const languageButtons = document.querySelectorAll('.language-switcher button');

  // Set initial language based on browser language
  let currentLang = 'en';
  const userLang = navigator.language || navigator.userLanguage;
  
  if (userLang.startsWith('zh-CN')) {
    currentLang = 'zh-CN';
  } else if (userLang.startsWith('zh-TW')) {
    currentLang = 'zh-TW';
  } else if (userLang.startsWith('ja')) {
    currentLang = 'ja';
  } else if (userLang.startsWith('ko')) {
    currentLang = 'ko';
  } else if (userLang.startsWith('fr')) {
    currentLang = 'fr';
  } else if (userLang.startsWith('de')) {
    currentLang = 'de';
  } else if (userLang.startsWith('id')) {
    currentLang = 'id';
  }

  // Function to update language
  function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update text content
    titleElement.textContent = translations[lang].underConstruction;
    messageElement.textContent = translations[lang].weAreBuilding;
    thanksElement.textContent = translations[lang].thankYou;
    
    // Update active button
    languageButtons.forEach(button => {
      if (button.getAttribute('data-lang') === lang) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  // Add click event listeners to language buttons
  languageButtons.forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      updateLanguage(lang);
    });
  });

  // Initialize with the detected language
  updateLanguage(currentLang);
});

