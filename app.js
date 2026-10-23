// ? Synchronous Sequence

console.log("First function")
console.log("Second function")
console.log("Third function")

// ? Asynchronous Sequence
console.log("First Async")

let value = "Initial Value"

setTimeout(() => {
	// callback fx to fire
	console.log("Second Async")
	value = "Updated Value"
	// wait parameter in ms (1000ms = 1s)
}, 2000);

// still initial value as updated value occurs two seconds later
console.log(value)

console.log("Third async")

/* 
	? Asynchronous Programming
	* a way for us to continue running our application without waiting
	* synchronous code runs in order, top to bottom, left to right
	* asynchronous code waits until its execution succeeded
	
	? Waiting means we have to define a state
	* waiting
	* fulfilled
	* rejected (failed)
	
	? States mean we have to have a way to solve for state
	* Promises
	* async/await
	* fetch (for API's)
*/

function getUser() {
	setTimeout(() => {
		return [{ name: "Paul", email: "paul@codecademy.com", password: "dbLocal"}]
	}, 1);
}

let user = getUser()

console.log(`The result of user is: ${JSON.stringify(user)}`)

/* 
? Promise
* allows us to handle the following states:
* pending (nothing happened yet)
* fulfilled (success)
* rejected (error)
*/

let promise = new Promise((resolve, reject) => {
	setTimeout(() => {	
		resolve([{ name: "Paul", email: "paul@codecademy.com", password: "dbLocal"}])
	}, 1000);
})

function getUserUsingPromise(state) {
	return new Promise((resolve, reject) => {
		if (state) {
			setTimeout(() => {	
				resolve([{ name: "Paul", email: "paul@codecademy.com", password: "dbLocal"}])
			}, 2000);
		} else {
			reject({ status: 500, message: "Failed"})
		}
	})
}

/* 
	? Promise Resolvers
	* a method which can be used on a Promise
	* it extracts the data once a Promise has settled from its pending state
	* .then() handles success and catches resolve
	* .catch() handles failures and catches rejects gracefully
	* .finally() to run after .then's and .catch's
	* all take a callback function where param holds resolve/reject argument
*/

// let promiseResult = getUserUsingPromise(true)
// console.log(promiseResult)

let userEmail = null

getUserUsingPromise(true)
	.then((usr) => {
		console.log(usr)
		userEmail = usr[0].email
		return usr
	})
	.then((u) => console.log(u))
	.then((u) => { console.log(`${userEmail} logged in`)})
	.catch((err) => { console.log(err)})
	.then(() => { console.log("Code that runs within async but after promise")})
	.finally(() => console.log("Code that runs within async but regardless of fulfillment or rejection"))

console.log("Code that runs after async code")

/* 
	? Async Await
	* async - type of function allowing you to return a promise
	* await
		* available only inside async functions
		* resolves a promise
		* replaces .then()
*/

function normalFunction() {
	return "value"
}

async function asyncFunction() {
	return "value"
}

console.log(normalFunction(), asyncFunction())

async function start() {
	try {
		// ? takes success
		let result = await getUserUsingPromise(true)
		console.log(result)
		
		// ? we can force going into a catch
		if (true) {
			// throw is like a return but for errors
			throw new Error("Our custom error")
		}

	} catch(err) {
		// ? handles errors
		
		// ? Swallowing - when you catch errors but don't do anything with errors
		console.log(err)
	}
}

start()