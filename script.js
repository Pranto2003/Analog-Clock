setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  hrotation = 30 * h + m / 2;
  mrotation = 6 * m;
  srotation = 6 * s;

  document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
  document.getElementById(
    "minitue"
  ).style.transform = `rotate(${mrotation}deg)`;
  document.getElementById("second").style.transform = `rotate(${srotation}deg)`;
}, 1000);
