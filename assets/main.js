let script = document.createElement('script');
script.src = "https://luoyunofficial.github.io/solar/assets/index.js"; // 没有这个脚本
document.body.append(script);

script.onerror = function() {
  
	    // 获取父元素
var parent = document.getElementById("root-container");

// 创建新元素
var newElement = document.createElement("t2");
newElement.innerHTML = "It's not your fault, but our problem.";
var newElementTwo = document.createElement("p");
newElementTwo.innerHTML = "An error occurred when loading configurations, please try again later.";

// 插入新元素
parent.appendChild(newElement);
parent.appendChild(newElementTwo);
};
