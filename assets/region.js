function getIPAddress() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api64.ipify.org?format=json");

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
    const apiUrl = `https://ipapi.co/${ipAddress}/json/`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl);
    xhr.setRequestHeader('Content-Type','application/json');

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        const location = {
          country: response.country_name,
          region: response.region,
          city: response.city
        };
        resolve(location);
      } else {
        reject(new Error("Failed to get location"));
      }
    };

    xhr.onerror = function() {
      reject(new Error("Failed to get location"));
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
    if (location.country == "China") {
	        window.location.replace("https://luoyunofficial.github.io/solar/not-support");
	    } else {
		    //其它的都使用英文
    }
  })
  .catch(error => {
    alert(error);
  });
