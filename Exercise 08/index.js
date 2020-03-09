function even() {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
even();
function showUser() {
  Married = true;
  console.log("Name: Jose Alejandro Ulloa");
  console.log("Age: 38");
  console.log("Phone Number: +1587-966-4681");
  console.log("Address: 2120 Southland Dr. SW");
  console.log("Postal Code: T2V 4W3");
  console.log("Married:", Married);
}

function calculateFibonacci() {
  maxCalculations = Number(prompt("Enter the Max value of calculations"));
  const fibonacciSequence = [0, 1]; //length 2
  if (maxCalculations == 0) {
    return fibonacciSequence;
  }
  for (let i = 0; i < maxCalculations; i++) {
    let lastIndex = fibonacciSequence.length - 1; //1
    let secondLastIndex = fibonacciSequence.length - 2; //0
    let lastValue = fibonacciSequence[lastIndex];
    let secondLastValue = fibonacciSequence[secondLastIndex];
    let result = lastValue + secondLastValue;
    fibonacciSequence.push(result);
  }
  alert(fibonacciSequence);
}
calculateFibonacci();
showUser();
