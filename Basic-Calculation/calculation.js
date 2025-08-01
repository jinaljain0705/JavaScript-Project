let X = 50, Y = 10;

console.log("==== Basic Calculation ====");

console.log(`Value of X: ${X}`);
console.log(`Value of Y: ${Y}`);

console.log("-----------------------------");

console.log(`1. Addition        (X + Y) : ${X} + ${Y} = ${X + Y}`);
console.log(`2. Subtraction     (X - Y) : ${X} - ${Y} = ${X - Y}`);
console.log(`3. Multiplication  (X * Y) : ${X} * ${Y} = ${X * Y}`);
console.log(`4. Division        (X / Y) : ${Y !== 0 ? `${X} / ${Y} = ${X / Y}` : "Cannot divide by zero"}`);
console.log(`5. Modulus         (X % Y) : ${Y !== 0 ? `${X} % ${Y} = ${X % Y}` : "Cannot divide by zero"}`);
