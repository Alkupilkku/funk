function sumAll(arr){
  let n =arr[0]
   let m =arr[1]
let smallest = n < m ? n : m
let biggest = Math.max(n, m)
let sum = 0;
 while(smallest <= biggest){
  sum += smallest 
  smallest++
 }
 return sum
}
console.log(sumAll([5, 10])) 
//You should have a function named sumAll that accepts an array of two numbers.
//sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them. The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
