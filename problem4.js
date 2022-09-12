// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let x = 1;
count = 0;
sum = 0;
while (x<=100) {
  if (x%2==0) {
    sum = sum + x;
    count = count +1;
  } 
  x++;
} 
console.log (sum/count);