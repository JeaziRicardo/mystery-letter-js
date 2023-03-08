const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const cartaContador = document.querySelector('#carta-contador');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

function randomClass(array) {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

function createMisteryLetter() {
  const text = input.value;
  const array = text.split(' ');
  cartaContador.innerHTML = array.length;
  paragraph.innerHTML = '';
  if (!text.replace(/\s/g, '').length) { // https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces - A função usa uma expressão regular para verificar se a string tem apenas espaços vazios.
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      const span = document.createElement('span');
      span.innerHTML = array[index];
      paragraph.appendChild(span);
      span.classList.add(randomClass(size), randomClass(style));
      span.classList.add(randomClass(skew), randomClass(rotate));
    }
  }
}
button.addEventListener('click', createMisteryLetter);

function randomNewClass(event) {
  const spans = event.target;
  spans.className = '';
  spans.classList.add(randomClass(size), randomClass(style));
  spans.classList.add(randomClass(skew), randomClass(rotate));
}
paragraph.addEventListener('click', randomNewClass);
