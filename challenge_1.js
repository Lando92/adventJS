/* 
 Challenge Url: https://adventjs.dev/challenges/01 
 
 */

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
];

export default function contarOvejas(ovejas) {
  return ovejas.filter(
    (x) =>
      x.color === 'rojo' &&
      x.name.toLowerCase().indexOf('n') !== -1 &&
      x.name.toLowerCase().indexOf('a') !== -1
  );
}

console.log(contarOvejas(ovejas));