function updateTime() {
  const now = new Date();
  // Amsterdam timezone
  const options = { timeZone: "Europe/Amsterdam", hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const amsterdamTime = new Intl.DateTimeFormat("en-GB", options).format(now);

  document.getElementById("time").textContent = amsterdamTime;
}

setInterval(updateTime, 1000);
updateTime();
