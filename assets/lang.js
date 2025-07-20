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
    "CURRENT_LANGUAGE": "语言：简体中文",
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
