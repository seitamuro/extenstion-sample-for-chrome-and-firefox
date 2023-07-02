console.log(`'Allo 'Allo! Content script`)

setInterval(() => {
  let elements = document.querySelectorAll('.comment')
  console.log(`elements: ${JSON.stringify(elements)}`)
  if (elements.length !== 0) {
    let cnt = 0;
    elements.forEach(element => {
      if (element.querySelectorAll('.shareview-button').length === 0) {
        element.style.backgroundColor = `rgb(255, ${100 * cnt}, 0)`
        let newButton = document.createElement('button');
        newButton.textContent = 'Click me';
        newButton.classList.add("shareview-button")
        element.appendChild(newButton);
        cnt += 1;
      }
    });
  }
}, 1000);