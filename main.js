// DOM Elements
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Target Date: April 18th 2026
const targetDate = new Date('2026-04-18T00:00:00').getTime();

// Countdown Logic
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    // Event started
    daysEl.innerText = '00';
    hoursEl.innerText = '00';
    minutesEl.innerText = '00';
    secondsEl.innerText = '00';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerText = days < 10 ? `0${days}` : days;
  hoursEl.innerText = hours < 10 ? `0${hours}` : hours;
  minutesEl.innerText = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.innerText = seconds < 10 ? `0${seconds}` : seconds;
}

// Tab Switching Logic
function switchTab(e) {
  const target = e.target.dataset.target;

  // Update active tab button
  tabs.forEach(tab => tab.classList.remove('active'));
  e.target.classList.add('active');

  // Update active content
  tabContents.forEach(content => {
    content.classList.remove('active');
    if (content.id === target) {
      content.classList.add('active');
    }
  });
}

// Event Listeners
tabs.forEach(tab => tab.addEventListener('click', switchTab));

// Initialize
setInterval(updateCountdown, 1000);
updateCountdown();
