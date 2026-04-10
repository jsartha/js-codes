# js-codes

// singleton ---> constructor kadun banvto to manje 
-----> multipe instance nastat

2.Object literals

🔹 What is an Object in JavaScript?

An object is a collection of key–value pairs used to store data.

👉 Each key is called a property, and it can store any value (string, number, array, function, etc.)

✅ Example:
let person = {
  name: "Sarthak",
  age: 21,
  isStudent: true
};
🔹 Types of Objects in JavaScript (Interview Important)

JavaScript objects are mainly of these types:

1. 🔸 Literal Object
Created using {}
let obj = { name: "John", age: 25 };
2. 🔸 Constructor Object
Created using new Object()
let obj = new Object();
obj.name = "John";
3. 🔸 Array Object
Special type of object
let arr = [1, 2, 3];
4. 🔸 Function Object
Functions are also objects
function greet() {
  console.log("Hello");
}
5. 🔸 Built-in Objects
Provided by JavaScript

Examples:

Date
Math
JSON
let d = new Date();
6. 🔸 Custom Objects (Using Constructor Function)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("Sarthak", 21);
🔥 Very Important Interview Point

👉 In JavaScript:

typeof {} === "object"
typeof [] === "object"
typeof function(){} === "function"
🔹 Bonus: Primitive vs Non-Primitive
Primitive: string, number, boolean, null, undefined, symbol
Non-Primitive: object, array, function