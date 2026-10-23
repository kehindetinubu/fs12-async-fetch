
# JavaScript Challenge: The Checkout Pipeline

## Objective

Build a checkout system using multiple functions. Each function will perform one task, and its returned value will be passed into the next function.

You'll practice:
- Creating and calling functions
- Using `return` statements
- Passing values between functions
- Nesting function calls
- Using callback functions

## Part 1 — Create Five Functions

Your checkout system starts with a cart total of $100.

Create the following functions:

1. `addItemPrice(total)` — Adds $25 to the total.
2. `applyDiscount(total)` — Applies a 10% discount.
3. `addTax(total)` — Adds 7% sales tax.
4. `addShipping(total)` — Adds $5 for shipping.
5. `formatTotal(total)` — Returns the total as a string formatted like `"$100.00"`.

### Rules
- Each function must accept a parameter.
- Each function must return a value.
- Do not use `console.log()` inside your functions.
- Do not use global variables to store calculations.

## Part 2 — Connect Your Functions

Start with the following code:

```js
let total = 100;

// Call each function in order.
// Store the returned value back into total.

console.log(total);
```

Your goal is to call all five functions in the correct order.

**Expected output:**
```text
"$125.38"
```

## Part 3 — Nest Your Functions

Now accomplish the same result without using intermediate variables.

Use all five functions inside one expression.

```js
const finalPrice = formatTotal(
    // Your code here
);

console.log(finalPrice);
```

**Expected output:**
```text
"$125.38"
```

### Questions
1. Which function executes first?
2. Which function executes last?
3. What happens if one function doesn't return anything?
4. Why does the order of the functions matter?

## Part 4 — Callback Functions

Create a function called `processTotal`.

It must:
- Accept two parameters: `total` and `callback`.
- Execute the callback, passing `total` as its argument.
- Return the result of the callback.

```js
function processTotal(total, callback) {
    // Your code here
}
```

Your function should support:

```js
const result = processTotal(100, addItemPrice);

console.log(result); // 125
```

### Challenge

Using `processTotal`, perform all five checkout operations in order.

Each operation must receive the returned value of the previous operation.

**Restriction:** You must use `processTotal` to execute each operation rather than calling the individual checkout functions directly.

## Part 5 — Spicy Mode: Build a Pipeline

Create a function called `runPipeline`.

It must accept:
1. A starting value.
2. An array of callback functions.

Your function should:
- Loop through the array of functions.
- Execute each function using the current value.
- Update the current value using the function's return.
- Return the final result after all functions execute.

Your code should support:

```js
const finalPrice = runPipeline(100, [
    addItemPrice,
    applyDiscount,
    addTax,
    addShipping,
    formatTotal
]);

console.log(finalPrice); // "$125.38"
```

### Rules
- Use a loop.
- Do not hardcode function names inside `runPipeline`.
- Do not use `reduce()`.
- Your pipeline should work with any array of functions that accept and return compatible values.

## Bonus Questions

1. What is the difference between `return` and `console.log()`?
2. What is the difference between passing `addTax` and `addTax()` as an argument?
3. What happens when a function returns `undefined`?
4. Can you change the order of functions in your pipeline?
5. Can you reuse `runPipeline` for something completely unrelated to checkout calculations?
