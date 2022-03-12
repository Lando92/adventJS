/* 
 Challenge Url: https://adventjs.dev/challenges/09
 */

export default function groupBy(collection, it) {
    const object = {};
    const getKey = it instanceof Function ? it : item => item[it];
    collection.forEach(item => {
        const key = getKey(item);
        object[key] = [...(object[key] || []), item];
    });
    return object;
}