setInterval(showTime, 1000);
function showTime() {
  // getDay Informations
  let time = new Date();
  let getHour = time.getHours();
  let getMinute = time.getMinutes();
  let getSecond = time.getSeconds();
  let getDay = time.getDay();

  // checkTime
  getMinute = checkTime(getMinute);
  getSecond = checkTime(getSecond);
  getDay = stringDay(getDay);

  let currentTime = getHour + ":" + getMinute + ":" + getSecond + " " + getDay;
  document.getElementById("myClock").innerHTML = currentTime;
}

function checkTime(e) {
  if (e < 10) {
    e = "0" + e;
  }
  return e;
}
function stringDay(e) {
  if (e == 1) {
    e = "Pazartesi";
  }
  if (e == 2) {
    e = "Salı";
  }
  if (e == 3) {
    e = "Çarşamba";
  }
  if (e == 4) {
    e = "Perşembe";
  }
  if (e == 5) {
    e = "Cuma";
  }
  if (e == 6) {
    e = "Cumartesi";
  }
  if (e == 0) {
    e = "Pazar";
  }
  return e;
}
showTime();

function nameInput() {
  var name = prompt(
    "Hoşgeldiniz lütfen isminizi girer misiniz? Teşekkürler :)"
  );
  document.getElementById("myName").innerHTML = name;
}
nameInput();
