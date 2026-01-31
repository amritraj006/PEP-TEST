const arr = [2,3,4,6,7,8];
const modifiedArray = arr.map((num) => {
    return num % 2 === 0 ? num * num : num;
})

console.log(modifiedArray);