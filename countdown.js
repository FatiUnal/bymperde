const countdownTime = {
  days: 7,
  hours: 5,
  minutes: 15,
};

// Hedef tarih ve saat hesaplanıyor
const now = new Date();
const targetDate = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + countdownTime.days,
  now.getHours() + countdownTime.hours,
  now.getMinutes() + countdownTime.minutes
);

// Geri sayım fonksiyonu
function updateCountdown() {
  const now = new Date();
  const remainingTime = targetDate - now;

  if (remainingTime > 0) {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("gun").innerHTML = days;
    document.getElementById("saat").innerHTML = hours;
    document.getElementById("dakika").innerHTML = minutes;
    document.getElementById("saniye").innerHTML = seconds;
  } else {
    document.getElementById("countdown").innerHTML = "Süre doldu!";
    clearInterval(interval);
  }
}

// Her saniyede geri sayım güncelleniyor
const interval = setInterval(updateCountdown, 1000);

// İlk çalıştırma
updateCountdown();
