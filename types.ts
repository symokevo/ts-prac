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
