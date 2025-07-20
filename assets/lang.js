var arrLang = {
  "en": {
    "HOME": "Home",
    "SHORTS": "Shorts",
    "TREND": "Trending",
    "GAME_CENTER": "Game Center",
    "LOGIN": "Login",
    "REGISTER": "Register",
    "ABOUT_US": "About Us",
    "ABOUT_SOLAR": "About Solar",
    "JOIN_US": "Join Us",
    "PRIVACY_POLICY": "Privacy Policy",
    "TERMS_OF_SERVICE": "Terms of Service",
    "CHILD_PROTECTION_POLICY": "Child Protection Policy",
    "COMMUNITY_GUIDELINE": "Community Guidelines",
    "HELP_CENTER": "Help Center",
    "REPORT_INFRINGEMENT": "Report Infringement",
    "USER_FEEDBACK": "User Feedback",
    "COPYRIGHT_PROTECTION_CENTER": "Copyright Protection Center",
    "CONTACT_US": "Contact Us",
    "MORE": "More",
    "SOLAR_OPEN_PLATFORM": "Solar Open Platform",
    "CREATOR_CENTER": "Creator Center",
    "CHILD_PROTECTION_PLATFORM": "Child Protection Platform",
    "DOWNLOAD_APP": "Download Apps",
    "CURRENT_LANGUAGE": "Language：English (US)",
  },
  "zh": {
    "HOME": "首页",
    "SHORTS": "短视频",
    "TREND": "时下流行",
    "GAME_CENTER": "游戏中心",
    "LOGIN": "登录",
    "REGISTER": "注册",
    "ABOUT_US": "关于我们",
    "ABOUT_SOLAR": "关于Solar",
    "JOIN_US": "加入我们",
    "PRIVACY_POLICY": "隐私政策",
    "TERMS_OF_SERVICE": "用户服务协议",
    "CHILD_PROTECTION_POLICY": "未成年人保护政策",
    "COMMUNITY_GUIDELINE": "社区公约",
    "HELP_CENTER": "帮助中心",
    "REPORT_INFRINGEMENT": "侵权报告",
    "USER_FEEDBACK": "用户反馈",
    "COPYRIGHT_PROTECTION_CENTER": "版权保护中心",
    "CONTACT_US": "联系我们",
    "MORE": "更多",
    "SOLAR_OPEN_PLATFORM": "Solar开放平台",
    "CREATOR_CENTER": "创作者中心",
    "CHILD_PROTECTION_PLATFORM": "未成年人保护平台",
    "DOWNLOAD_APP": "下载App",
    "CURRENT_LANGUAGE": "Language：简体中文",
  },
  "zh_tw": {
    "HOME": "首頁",
    "SHORTS": "短影片",
    "TREND": "時下流行",
    "GAME_CENTER": "遊戲中心",
    "LOGIN": "登入",
    "REGISTER": "註冊",
    "ABOUT_US": "關於我們",
    "ABOUT_SOLAR": "關於Solar",
    "JOIN_US": "加入我們",
    "PRIVACY_POLICY": "隱私政策",
    "TERMS_OF_SERVICE": "用戶服務協議",
    "CHILD_PROTECTION_POLICY": "未成年人保護政策",
    "COMMUNITY_GUIDELINE": "社群公約",
    "HELP_CENTER": "幫助中心",
    "REPORT_INFRINGEMENT": "侵權報告",
    "USER_FEEDBACK": "用戶回饋",
    "COPYRIGHT_PROTECTION_CENTER": "版權保護中心",
    "CONTACT_US": "聯絡我們",
    "MORE": "更多",
    "SOLAR_OPEN_PLATFORM": "Solar開放平台",
    "CREATOR_CENTER": "創作者中心",
    "CHILD_PROTECTION_PLATFORM": "未成年人保護平台",
    "DOWNLOAD_APP": "下載App",
    "CURRENT_LANGUAGE": "Language：繁體中文"
  }
  "ja": {
    "HOME": "ホーム",
    "SHORTS": "ショート動画",
    "TREND": "トレンド",
    "GAME_CENTER": "ゲームセンター",
    "LOGIN": "ログイン",
    "REGISTER": "新規登録",
    "ABOUT_US": "私たちについて",
    "ABOUT_SOLAR": "Solarについて",
    "JOIN_US": "参加する",
    "PRIVACY_POLICY": "プライバシーポリシー",
    "TERMS_OF_SERVICE": "利用規約",
    "CHILD_PROTECTION_POLICY": "未成年者保護方針",
    "COMMUNITY_GUIDELINE": "コミュニティガイドライン",
    "HELP_CENTER": "ヘルプセンター",
    "REPORT_INFRINGEMENT": "権利侵害の報告",
    "USER_FEEDBACK": "ユーザーフィードバック",
    "COPYRIGHT_PROTECTION_CENTER": "著作権保護センター",
    "CONTACT_US": "お問い合わせ",
    "MORE": "もっと見る",
    "SOLAR_OPEN_PLATFORM": "Solarオープンプラットフォーム",
    "CREATOR_CENTER": "クリエイターセンター",
    "CHILD_PROTECTION_PLATFORM": "未成年者保護プラットフォーム",
    "DOWNLOAD_APP": "アプリをダウンロード",
    "CURRENT_LANGUAGE": "Language：日本語"
  },
  "ko": {
    "HOME": "홈",
    "SHORTS": "숏폼",
    "TREND": "인기",
    "GAME_CENTER": "게임 센터",
    "LOGIN": "로그인",
    "REGISTER": "회원가입",
    "ABOUT_US": "회사 소개",
    "ABOUT_SOLAR": "Solar 소개",
    "JOIN_US": "함께하기",
    "PRIVACY_POLICY": "개인정보 처리방침",
    "TERMS_OF_SERVICE": "이용약관",
    "CHILD_PROTECTION_POLICY": "청소년 보호 정책",
    "COMMUNITY_GUIDELINE": "커뮤니티 가이드라인",
    "HELP_CENTER": "고객센터",
    "REPORT_INFRINGEMENT": "권리 침해 신고",
    "USER_FEEDBACK": "사용자 의견",
    "COPYRIGHT_PROTECTION_CENTER": "저작권 보호 센터",
    "CONTACT_US": "문의하기",
    "MORE": "더보기",
    "SOLAR_OPEN_PLATFORM": "Solar 오픈 플랫폼",
    "CREATOR_CENTER": "크리에이터 센터",
    "CHILD_PROTECTION_PLATFORM": "청소년 보호 플랫폼",
    "DOWNLOAD_APP": "앱 다운로드",
    "CURRENT_LANGUAGE": "Language: 한국어"
  }
};

// The default language is English
var lang = "en";
// Check for localStorage support
if('localStorage' in window){
   var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
   if (!Object.keys(arrLang).includes(lang)) lang = 'en';
}

$(document).ready(function() {
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected language
$(".translate").click(function() {
  var lang = $(this).attr("id");

  // update localStorage key
  if('localStorage' in window){
    localStorage.setItem('lang', lang);
    console.log( localStorage.getItem('lang') );
  }

  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});
