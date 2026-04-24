

const a="sarthak"

console.log(a.length);
console.log(a[1]);



//2  Upper case

console.log(a.toUpperCase());

//3
console.log(a.toLowerCase())

//4

console.log(a.indexOf('k'))
console.log(a.indexOf('K'));  //---- -1 show capital K

// LastIndex

console.log(a.lastIndexOf('a'));


//Include

console.log(a.includes('k'));

// Slice 

console.log(a.slice(1,3));


console.log(a.slice(2));


// Split

let AA=" rohit  , sathak, Pravin , Priti , Sakshi"
console.log(AA.split(","));

AA=" sarthak  joshi , Priti Sakshi"

console.log(AA.split(" "));

// Substring

console.log(a.substring(2,5));  // ---- negative not mark index

console.log(a.replace("sarthak","joshi"));



//trim

const A="  joshi  Sathak"  // remove first and last space
console.log(A.trim());
