export function SetCoockie(name, value, options = {}) {
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    
    let updateCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    Object.entries(options).forEach(key => {
        updateCookie += "; " + encodeURIComponent(key);
    });

    document.cookie = updateCookie;
}

export function GetCookie(key) {
    const getCookie = document.cookie.split("; ")
    .find((_name) => _name.startsWith(key))?.split("=");
    return getCookie[1];
}

export function RemoveCoockie(key) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";  
}

export function UpdateCookie(cookieName) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === cookieName) {
        this.myCookieValue = value;
        break;
      }
    }
  }