let userId = undefined;

userId = String(userId);
// console.log(typeof userId);
// console.log(userId);

// "undefined" => Number(variable) => Nan
// "undefined" => String(variable) => undefined

let gameCounter = 100;

// console.log(gameCounter);

console.table([gameCounter++, ++gameCounter, ++gameCounter, ++gameCounter]); // increment/ decrement
