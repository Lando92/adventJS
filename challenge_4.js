/* 
 Challenge Url: https://adventjs.dev/challenges/04 
 */

export default function createXmasTree(height) {
  let matrix = [];
  for (var i = 0; i < height + 2; i++) {
    if (i <= height - 1) {
      matrix[i] = paintRow(i, height) + '\n';
    } else {
      matrix[i] = paintTrunk(0, height) + '\n';
    }
  }
  return matrix.join('').slice(0, -1);
}

function paintRow(i, h) {
  var row = '';
  var stars = '*'.repeat(2 * i + 1);
  var spaces = '_'.repeat(h - (i + 1));
  row = spaces + stars + spaces;
  //console.log(row);
  return row;
}
function paintTrunk(i, h) {
  var trunk = '';
  var hashTag = '#';
  var spaces = '_'.repeat(h - (i + 1));
  trunk = spaces + hashTag + spaces;
  //console.log(spaces + hashTag + spaces);
  return trunk;
}
console.log(createXmasTree(2));
