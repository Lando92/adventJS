const goodFit = 'bici coche (balón) bici coche peluche';
const badFit = 'peluche (bici [coche) bici coche balón';
console.log(isValid(badFit));

export default function listGifts(letter) {
  return letter
    .split(' ')
    .filter((x) => x.length && !x.startsWith('_'))
    .reduce((acum, curr) => {
      if (acum.hasOwnProperty(curr)) {
        acum[curr] = acum[curr] + 1;
      } else {
        acum[curr] = 1;
      }
      return acum;
    }, {});
}
