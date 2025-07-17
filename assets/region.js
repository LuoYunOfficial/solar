function getIPAddress() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.ipify.cn?format=json");

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        const ipAddress = response.ip;
        resolve(ipAddress);
      } else {
        reject(new Error("Failed to get IP address"));
      }
    };

    xhr.onerror = function() {
      reject(new Error("Failed to get IP address"));
    };

    xhr.send();
  });
}

  function getLocation(ipAddress) {
  return new Promise((resolve, reject) => {
    const apiUrl = `https://ip9.com.cn/get?ip=58.30.2.5`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl);

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        const location = {
	  data: response.data,
          country_code: response.data.country_code,
          prov: response.data.prov,
          country: response.data.country
        };
        resolve(location);
      } else {
        reject(new Error("Failed to get location: 1"));
      }
    };

    xhr.onerror = function() {
      reject(new Error("Failed to get location: 2"));
    };

    xhr.send();
  });
}

// 使用示例
getIPAddress()
  .then(ipAddress => {
    return getLocation(ipAddress);
  })
  .then(location => {
    if (location.data.country_code == "cn") {
	        window.location.replace("https://luoyunofficial.github.io/solar/not-support");
	    } else {
		    //其它的都使用英文
    }
  })
  .catch(error => {
    alert(error);
  });

