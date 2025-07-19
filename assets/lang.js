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
    "COMMUNITY_GUIDELINE": "Community Guidelines",
    "HELP_CENTER": "Help Center",
    "CONTACT_US": "Contact Us",
    "MORE": "More",
    "CREATOR_CENTER": "Creator Center",
    "DOWNLOAD_APP": "Download Apps",
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
    "COMMUNITY_GUIDELINE": "社区公约",
    "HELP_CENTER": "帮助中心",
    "CONTACT_US": "联系我们",
    "MORE": "更多",
    "CREATOR_CENTER": "创作者中心",
    "DOWNLOAD_APP": "下载App",
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
