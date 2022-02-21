const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');

function creatMisteryLetter() {
  const text = input.value;
  const array = text.split(' ');
  paragraph.innerHTML = '';
  if (!text.replace(/\s/g, '').length) { //https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces - A função usa uma espressão regular para verificar se a string tem apenas espaços vazios.
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      const span = document.createElement('span');
      span.innerHTML = array[index];
      paragraph.appendChild(span);
    }
  }
}
button.addEventListener('click', creatMisteryLetter);
