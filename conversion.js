// object to array 
// these are three ways to convert object to array
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };

console.log(Object.keys(obj))     //  output: ['a', 'b', 'c','d', 'e', 'f','g' ]

console.log(Object.values(obj))     /// [ 1, 2, 3, 4, 5, 6, 7];


console.log(Object.entries(obj));

// [
//     [ 'a', 1 ],
//     [ 'b', 2 ],
//     [ 'c', 3 ],
//     [ 'd', 4 ],
//     [ 'e', 5 ],
//     [ 'f', 6 ],
//     [ 'g', 7 ]
//   ]



// array to object conversion

//1.  using a for loop

let arr = ["a", "b", "c", "d", "e"];
let object = {};
for (let i = 0; i < arr.length; i++) {
    object[arr[i]] = i

}
console.log(object);

// 2. using entries 

const entry = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7]
];

console.log(Object.fromEntries(entry))