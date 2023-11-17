const inputElement = document.querySelector('.js-input-box');
const Reg = /[\W_]/g;
const paragraph = document.querySelector('.js-para');
const checkButton = document.querySelector('.js-button');

function palidrome() {
  const str = inputElement.value;
  const smallStr = str.toLowerCase().replace(Reg, '');
  const reversed = smallStr.split('').reverse().join('');

  if(reversed === smallStr) {
    paragraph.innerHTML = `${true}, It is a palidrome.`;
  }else {
    paragraph.innerHTML = `${false}, It is not Palidrome.`;
  }

  inputElement.value = '';
}

checkButton.addEventListener('click', palidrome);