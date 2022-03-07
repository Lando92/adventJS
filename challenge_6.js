/* 
 Challenge Url: https://adventjs.dev/challenges/07
 */

export default function contains(store, product) {
    let temp = [];
    visitDescendants(store, (x) => {
        temp.push(x);
    });
    return temp.includes(product);
}

function visitDescendants(obj, callback) {
    for (const [key, value] of Object.entries(obj)) {
        if (value && typeof value === 'object') {
            // Recurse
            visitDescendants(value, callback);
        } else {
            callback(value);
        }
    }
}