var arrLang = {
  "en": {
    "HOME": "Home",
    "SHORTS": "Shorts",
    "TREND": "Trending",
    "GAME_CENTER": "Game Center",
    "ABOUT_US": "About Us",
    "CONTACT_US": "Contact Us",
  },
  "zh_CN": {
    "HOME": "首页",
    "SHORTS": "短视频",
    "TREND": "时下流行",
    "GAME_CENTER": "游戏中心",
    "ABOUT_US": "关于我们",
    "CONTACT_US": "联系我们",
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
