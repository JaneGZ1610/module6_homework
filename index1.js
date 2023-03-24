let list = [3, 5, 0, 4, 69, 0, 56, null, undefined, 33, 0.9];
function getListsOddAndEventNums(list) {
let zeroS = 0;
let numberS = 0;
let evenS = 0;
let oddS = 0;
for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number" || !isNaN(list[i])) {
        numberS += 1;
        if (list[i] === 0) {
            zeroS += 1;
        } else if (list[i] % 2 === 0) {
            evenS += 1;
        } else {
            oddS += 1;
        }
    }
}
console.log(`В нашем массиве: ${numberS} цифр, ${zeroS} нулей, ${evenS} четных, ${oddS} нечетных.`);
}
getListsOddAndEventNums(list)