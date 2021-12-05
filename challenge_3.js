/* 
 Challenge Url: https://adventjs.dev/challenges/03 
 
 */

const goodFit = 'bici coche (balón) bici coche peluche';
const badFit = 'peluche (bici [coche) bici coche balón';
console.log(isValid(badFit));

export default function isValid(letter) {
  let arr = letter.split('');
  let openParentesis = [];
  let closedParentesis = [];
  let openFlag = false;
  let valid = true;
  arr.forEach((x) => {
    if ((x === '{' || x === '[') && openFlag) {
      valid = false;
    }
    if (x === '(') {
      openParentesis.push(x);
      openFlag = true;
    }
    if (x === ')' && openFlag) {
      closedParentesis.push(x);
      openFlag = false;
    }
  });

  return valid && openParentesis.length === closedParentesis.length;
}
