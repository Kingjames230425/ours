const flower = document.querySelector('#flower');
const secret = document.querySelector('#secret');
const closeSecret = document.querySelector('#close-secret');
let flowerTaps = 0;
let resetTimer;

flower.addEventListener('click', () => {
  flowerTaps += 1;
  flower.animate([{ transform: 'scale(1) rotate(0)' }, { transform: 'scale(1.32) rotate(22deg)' }, { transform: 'scale(1) rotate(0)' }], { duration: 300 });
  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => { flowerTaps = 0; }, 1800);
  if (flowerTaps === 5) {
    secret.classList.add('show');
    flowerTaps = 0;
  }
});

closeSecret.addEventListener('click', () => secret.classList.remove('show'));
secret.addEventListener('click', (event) => { if (event.target === secret) secret.classList.remove('show'); });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.13 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('.song').forEach((song) => {
  song.addEventListener('click', () => {
    document.querySelectorAll('.song').forEach((item) => item.classList.remove('active'));
    song.classList.add('active');
  });
});
