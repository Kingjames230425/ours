const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function typeInto(element, words, speed) {
  element.textContent = '';
  element.classList.add('typing-cursor');
  for (const character of words) {
    element.textContent += character;
    await delay(speed);
  }
  element.classList.remove('typing-cursor');
}

async function playOpening() {
  const intro = document.querySelector('.hero-intro');
  const title = document.querySelector('#type-title');
  const copy = document.querySelector('#type-copy');
  const button = document.querySelector('.hero-button');
  document.body.classList.add('typing-ready');
  intro.classList.add('show');
  await delay(450);
  title.classList.add('show');
  await typeInto(title, 'To My Phool', 78);
  await delay(580);
  copy.classList.add('show');
  await typeInto(copy, 'If I could go back and relive one moment...', 30);
  await delay(720);
  copy.classList.add('typing-cursor');
  copy.append(document.createElement('br'));
  for (const character of 'I’d still press “Send”...') {
    copy.append(character);
    await delay(42);
  }
  copy.classList.remove('typing-cursor');
  await delay(360);
  button.classList.add('show');
}

playOpening();

const lastThing = document.querySelector('#last-thing');
const finalSurprise = document.querySelector('#final-surprise');
const closeSurprise = document.querySelector('#close-surprise');
lastThing.addEventListener('click', async () => {
  finalSurprise.classList.add('show');
  finalSurprise.setAttribute('aria-hidden', 'false');
  await delay(2200);
  finalSurprise.classList.add('show-second');
});
closeSurprise.addEventListener('click', () => {
  finalSurprise.classList.remove('show', 'show-second');
  finalSurprise.setAttribute('aria-hidden', 'true');
});
