document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('#start');
  startButton.addEventListener('click', () => {
    // should open up the template and close this welcomes to lifes easier section
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get references to elements
  const startButton = document.getElementById('start');
  const parentDiv = document.getElementById('parentDiv');
  const getContextTemplate = document.getElementById('getContext');

  startButton.addEventListener('click', function () {
    const clonedTemplate = document.importNode(getContextTemplate.content, true);

    const selectElement = clonedTemplate.querySelector('select');

    const optionElements = selectElement.querySelectorAll('option');
    optionElements.forEach((option, index) => {
      if (index === 0) {
        option.textContent = 'Education';
      } else if (index === 1) {
        option.textContent = 'Personal life';
      } else if (index === 2) {
        option.textContent = 'Business';
      } else if (index === 3) {
        option.textContent = 'Research/Science';
      }
    });

    parentDiv.remove();

    document.body.appendChild(clonedTemplate);
  });
});
