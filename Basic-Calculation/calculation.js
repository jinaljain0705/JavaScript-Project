let A = 50, B = 10;

console.log("==== Arithmetic Calculator ====");

console.log(`Value of X: ${x}`);
console.log(`Value of Y: ${y}`);

console.log("-----------------------------");

console.log(`1. Addition        (X + Y) : ${x} + ${y} = ${x + y}`);
console.log(`2. Subtraction     (X - Y) : ${x} - ${y} = ${x - y}`);
console.log(`3. Multiplication  (X * Y) : ${x} * ${y} = ${x * y}`);
console.log(`4. Division        (X / Y) : ${y !== 0 ? `${x} / ${y} = ${x / y}` : "Cannot divide by zero"}`);
console.log(`5. Modulus         (X % Y) : ${y !== 0 ? `${x} % ${y} = ${x % y}` : "Cannot divide by zero"}`);

console.log("-----------------------------");
