const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');

function creatMisteryLetter() {
  let text = input.value;
  let array = text.split(' ');
  paragraph.innerHTML = '';
  for (let index = 0; index < array.length; index += 1) {
    const span = document.createElement('span');
    span.innerHTML = array[index];
    paragraph.appendChild(span);
  }
}
button.addEventListener('click', creatMisteryLetter);
