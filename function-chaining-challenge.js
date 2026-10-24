console.log("- - - - - - -")
console.log("- - - - - - - \nPART #1")


function addItemPrice(total)
{
    total += 25
    console.log(`this is total after aIP: ${total}`)
    return total
}

function applyDiscount(total)
{
    total *= 0.9
    console.log(`this is total after aD: ${total}`)

    return total
}

function addTax(total)
{
    total *= 1.07
    console.log(`this is total after aT: ${total}`)

    return total
}

function addShipping(total)
{
    total += 5;
    console.log(`this is total after aS: ${total}`)

    return total;
    // return total + 5
}

function formatTotal(total)
{
    console.log(`this is total after fT: ${total}`)
    return `$${total}`
}

console.log("- - - - - - -")
console.log("- - - - - - - \nPART #2")


let total = 100;

console.log(`Cart Initial Total ${total}`)

total = addItemPrice(total)
console.log(`this is current total after aIP: ${total}`)
total = applyDiscount(total)
console.log(`this is current total after aD: ${total}`)
total = addTax(total)
console.log(`this is current total after aT: ${total}`)
total = addShipping(total)
console.log(`this is current total after aS: ${total}`)
total = formatTotal(total)
console.log(`this is current total after fT: ${total}`)

console.log(total)


console.log("- - - - - - -")
console.log("- - - - - - - \nPART #3")


let total2 = 100;

// const finalPrice = formatTotal(
// addItemPrice(total2),
// applyDiscount(total2),
// addTax(total2),
// addShipping(total2),
// );

const finalPrice = formatTotal(addShipping(addTax(applyDiscount(addItemPrice(total2)))))

console.log(finalPrice)


console.log("- - - - - - -")
console.log("- - - - - - - \nPART #4")


function processTotal(total, callback)
{
    return callback(total)
}

const result = processTotal(100, addItemPrice(100));
console.log(result);