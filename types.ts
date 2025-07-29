// any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...
// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
// Casting is when we use the "as" keyword to say property or variable is of the casted type.
// A tuple is a typed array with a pre-defined length and types for each index.


// Explicit typing in TypeScript
let firstName: string = "Simon";

// Implicit typing in TypeScript
let userName = "Osmon";

// Unable to infer
const json = JSON.parse("27");

// Special types
let v: any = "Some value here";
let u: unknown = "Some value here";
// let x: never
let y2: undefined = undefined;
let z: null = null;

//Arrays
const names: string[] = [];
names.push("Eskei");

// Avoid array being changed
const names2: readonly string[] = ["Eskei", "Simon"];

// Array type Inference
const names3 = ["Eskei", "Simon"];
const numbers = [1, 2, 3];
numbers.push(4);
let head: number = numbers[0];

// Tuple
let myTuple: [number, boolean, string];

// Initialize the tuple in the exact order as the declaration
// If you add another element, its type won't be checked.
myTuple = [5, false, 'coding is my life'];
myTuple.push("Something new here");

// Readonly tuple
const myReadonlyTuple: readonly [
    number, boolean, string
] = [
    5, false, 'coding is my life'
];

// Named tuples: Named tuples provide more context for what your index values represent.
const graph: [x: number, y: number] = [55.2, 41.3];
// Destructuring Tuples

const graph2: [number, number] = [55.2, 41.3];
const [x, y] = graph2;

// Objects
const car: { 
    type: string, model: string, year: number
 } = {
    type: "Lamborghini Urus",
    model: "Urus",
    year: 2026
 }

 const bike = { type: "Kawasaki Ninja H2" };
 bike.type = "Suzuki Hayabusa";

 // Object with optional properties
 const developer: {
    nationality: string, age?: number, primaryLanguage: string
 } = {
    nationality: "kenyan",
    primaryLanguage: "typescript"
 }

 // Index signatures: for objects with dynamic keys
 const nameAgeMap: { [index: string]: number } = {};
 nameAgeMap.Simon = 27;
 // nameAgeMap.Eskei = 'Thirty'; = error

 // Enums -> special 'classes' that represent a group of constants (strings or numbers)
 // Numeric enums are default
 enum CardinalDirections {
      North = 1,
      East,
      South,
      West
 }

 let currentDirection = CardinalDirections.North;
 // currentDirection logs 0
 console.log(CardinalDirections.West)

  enum StatusCodes {
   NotFound = 404,
   Success = 200,
   Accepted = 202,
   BadRequest = 400,
 }
 console.log(StatusCodes.NotFound); // logs 404
 console.log(StatusCodes.Success); // logs 200


console.log("His name is " + firstName );
console.log("His username is " + userName);
console.log(myTuple);
console.log(car.type);
console.log(bike.type);
console.log(names[0])
console.log(numbers)
console.log(typeof json); // This will log "number" since JSON.parse returns a number for the string "27"

// String enums
enum WordCardinalDirection {
   North = "North",
   East = "East",
   South = "South",
   West = "West"
};
// logs "North"
console.log(WordCardinalDirection.North);

// Type Aliases and Interfaces
// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

// type aliases: allow defining types with a custom name
type CarYear = number;
type carType = string; 
type CarModel = string;
type Car = {
   year: CarYear;
   type: carType;
   model: CarModel;
}

const carYear: CarYear = 2026;
const carType: carType = "Lamborghini Urus";
const carModel: CarModel = "Urus";
const car2: Car = {
   year: carYear,
   type: carType,
   model: carModel
}

// Interfaces: similar to type aliases, but only apply to object types
interface Rectangle {
   height: number;
   width: number;
};

const rectangle: Rectangle = {
   height: 20,
   width: 10
};
const rectangelArea = rectangle.height * rectangle.width;
console.log("Rectangle area is: " + rectangelArea);

// EXTENDING INTERFACES: Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
// Interfaces can extend each other's definition
interface ColoredRectangle extends Rectangle {
   color: string;
}

const coloredRectangle: ColoredRectangle = {
   height: 25,
   width: 15,
   color: "Purple"
};

// Union Types: used when a value can be more than one type (string or number)
// Union | (OR)
// You need to know your type when using union types, as TypeScript will not know which type to use.

function printStatusCode(code: string | number) {
   console.log(`My status code is ${code}`);
}
printStatusCode(200);
printStatusCode("200");

// FUNCTIONS
// Return types
// If no parameter type is defined, TypeScript will default to using any
function getTime(): number {
   return new Date().getTime();
}
console.log(getTime());

// Void Return Type (the functions don't return anything)
function printHello(): void {
   console.log("Hello, World!");
}
printHello();

// Parameters
function multiply(a: number, b: number ) {
   return a * b;
}
console.log(multiply(5, 10));

// Optional Parameters using '?' operator
function add(a: number, b: number, c?: number ) {
   return a + b + (c || 0);
}
console.log(add(5, 10)); // 15
console.log(add(5, 10, 15)); // 30

// Default Parameters
function pow(value: number, exponent: number = 10) {
   return value ** exponent;
}
console.log(pow(2)); // 1024

// Named Parameters
function divide({dividend, divisor}: {dividend: number, divisor: number}) {
   return dividend / divisor;
}

// Rest Parameters - the type must be an array as rest params are always arrays
function sum(a: number, b: number, ...rest: number[]) {
   return a + b + rest.reduce((p, c) => p + c, 0);
}

// Type alias 