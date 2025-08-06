let langJson;

fetch('https://luoyunofficial.github.io/solar/assets/lang.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`加载失败: ${response.status}`);
    }
    return response.json();
  })
  .then(json => {
    langJson = json;
    console.log('JSON加载成功:', langJson);
  })
  .catch(error => console.error('发生错误:', error));

var arrLang = langJson;

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
