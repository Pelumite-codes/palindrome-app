const inputElement = document.querySelector('.js-input-box');
const Reg = /[\W_]/g;
const paragraph = document.querySelector('.js-para');
const checkButton = document.querySelector('.js-button');

function palindrome() {
  const str = inputElement.value;
  const smallStr = str.toLowerCase().replace(Reg, '');
  const reversed = smallStr.split('').reverse().join('');

  if(reversed === smallStr) {
    paragraph.innerHTML = `${true}, It is a palindrome.`;
  }else {
    paragraph.innerHTML = `${false}, It is not a Palindrome.`;
  }

  inputElement.value = '';
}

checkButton.addEventListener('click', palindrome);