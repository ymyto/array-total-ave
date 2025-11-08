const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = array.reduce((sum, num) => sum + num, 0);
let ave = total / array.length;

console.log(`合計: ${total}\n平均: ${ave}`);