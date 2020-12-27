let myString: string;
let myNumber: number;
let myBoolean: boolean;
let myVariable: any;


let stringArray: string[]; // let stringArray: Array<string>;
let numberArray: number[];  // let numberArray: Array<number>;
let booleanArray: boolean[];  // let booleanArray: Array<boolean>;
let stringNumberTuple: [string, number];

// let myVoid: void = null;
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

myString = "Hello From TypeScript";
myNumber = 1;
myBoolean = false;
myVariable = 123 + "test";
stringArray = ["Hello", "World"];
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
booleanArray = [true, false];
stringNumberTuple = ["hey",100];


console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myVariable);
console.log(stringArray);
console.log(numberArray);
console.log(booleanArray);
console.log(stringNumberTuple);
console.log(myVoid);
console.log(myNull);
console.log(myUndefined);
