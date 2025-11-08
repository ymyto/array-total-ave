const array = [2, 3, 4, 5, 6, 7, 8];
let total = 0;
let ave = 0;

for (let i = 0; i < array.length; i++) {
    total = total + array[i];
}
ave = total / array.length;

console.log("合計: " + total + "\n平均: " + ave);