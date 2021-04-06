let arr = [2,3,4]

let sum = arr.reduce((total, num) => {return total += num}, 0)
let sum2 = 0
for (let num of arr) {
    sum2 += num
}
// sum
sum2