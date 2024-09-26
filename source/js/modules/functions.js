

//$Функция webp (START)
//функция для проверки поддерживает ли браузер формат webp
export function isWebp() {

  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    // Путь к пустому изображению WebP в кодировке base64
  }

  testWebP(function (support) {
    let className = support === true ? 'webp' : "no-webp";
    document.documentElement.classList.add(className);
  });
}
//$Функция webp (END)




