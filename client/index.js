document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('#start');
  startButton.addEventListener('click', () => {
    prompt('hello');
  });
});
