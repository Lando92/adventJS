/* 
 Challenge Url: https://adventjs.dev/challenges/06
 */

export default function sumPairs(numbers, result) {
    let res = [];
    numbers.reduce((acum, curr, index) => {
        for (var i = index; i <= numbers.length; i++) {
            if (numbers[i + 1] + curr === result) {
                res.push(curr, numbers[i + 1]);
            }
        }
        return res;
    }, []);
    return res.length ? res.splice(0, 2) : null;
}