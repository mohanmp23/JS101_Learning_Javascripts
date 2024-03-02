//Problem 1: Find the average of elements present at odd index of the following array.
//let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let sum = arr.filter((ele,i)=>i%2==1);
let len=sum.length;
 let sum2=sum.reduce((acc, current) => acc + current, 0);
console.log(sum2/len);