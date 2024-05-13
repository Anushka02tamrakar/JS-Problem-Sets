/*
const a [1,2,3, [4, [5,6]], 7,8]
function flattenArray(a) { }
const result flattenArray(a);
console.log(result); //
[1,2,3,4,5,6,7,8]
*/

const a = [1, 2, 3, {  }, [4, [5, 6]], 7, 8]

function flattenArray(arr) {
    const flattenedArr = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            flattenedArr.push(...flattenArray(element))    // Recursively flatten nested arrays

        } else if (typeof element === 'object' && element != null) {
            Object.values(element).forEach(value => {
                flattenedArr.push(value)
            });

        }
        else {
            flattenedArr.push(element);

        }

    });
    return flattenedArr;

}

console.log(flattenArray(a))