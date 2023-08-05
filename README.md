# easyGoRoomsQuestions

## question 1

1.Rahul is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m. and dinner at 7:00 p.m. in the evening. Create a javascript function that takes in the current time as a string and determines the duration of time before rahul's next meal. Represent this as an array with the first and second elements representing hours and minutes, respectively. Example: timeToEat("2:00 p.m.") ➞ [5, 0] //( 5 hours until the next meal, dinner) timeToEat("5:50 a.m.") ➞ [1, 10] // (1 hour and 10 minutes until the next meal, breakfast);

```javascript 

// object time meal 
const allmeals = [
    { name: "breakfast", time: "7:00 a.m." },
    { name: "lunch", time: "12:00 p.m." },
    { name: "dinner", time: "7:00 p.m." },
]

// function that converts time in minutes 
const TimeinMinutes = (currentTime) => {
    const [time, ampm] = currentTime.split(" ");
    let [hours, minutes] = time.split(":").map(Number)
    return ampm === 'a.m.' || hours === 12 ? hours * 60 + minutes : (hours + 12) * 60 + minutes

}

// function that converts time in hours from minutes
const minutesToHours = (timeMinutes) => {
    const hours = Math.floor(timeMinutes / 60);
    const minutes = timeMinutes % 60;
    return [hours, minutes]
}


// time to eat function which returns the hours and minutes to the next meal
function timeToEat(currentTime) {
    let currentTimeInMinutes = TimeinMinutes(currentTime);
    const nextmeal = allmeals.find((meal) => TimeinMinutes(meal.time) > currentTimeInMinutes)

    if (!nextmeal) {
        const minutesDiff = TimeinMinutes('7:00 a.m.') + 24 * 60 - currentTimeInMinutes;
        return minutesToHours(minutesDiff)
    }
    const minutesDiff = TimeinMinutes(nextmeal.time) - currentTimeInMinutes;

    return minutesToHours(minutesDiff)

}

console.log(timeToEat("8:00 p.m."))
 

```

This program helps you determine the duration of time until your next meal. The meal times are predefined and include breakfast, lunch, and dinner. The program takes the current time as input and calculates the time difference until the next meal.

### Function Descriptions

#### TimeinMinutes(currentTime)
- Description: This function converts a given time string to minutes since midnight.
- Parameters: currentTime: A string representing the current time in the format "hh:mm a.m./p.m." (e.g., "8:00 p.m.").
- Returns: The total minutes since midnight for the given time.


#### minutesToHours(timeMinutes)
- Description: This function converts time in minutes to hours and minutes.
- Parameters: timeMinutes: The time in minutes to be converted.
- Returns: An array representing the time in hours and minutes (e.g., [1, 30] for 1 hour and 30 minutes).


#### timeToEat(currentTime)
- Description: This is the main function that calculates the time difference until the next meal based on the current time.
- Parameters: currentTime: A string representing the current time in the format "hh:mm a.m./p.m." (e.g., "8:00 p.m.").
- Returns: An array representing the time difference until the next meal in hours and minutes.



## question 2

How many ways to convert an Object {} into an Array [] and Array [] to Object{} in JavaScript ?


#### conversion of object to an array 
```javascript

// object to array 
// these are three ways to convert object to array
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };

1. console.log(Object.keys(obj))     //  output: ['a', 'b', 'c','d', 'e', 'f','g' ]

2. console.log(Object.values(obj))     /// [ 1, 2, 3, 4, 5, 6, 7];


3. console.log(Object.entries(obj));

// output [
//     [ 'a', 1 ],
//     [ 'b', 2 ],
//     [ 'c', 3 ],
//     [ 'd', 4 ],
//     [ 'e', 5 ],
//     [ 'f', 6 ],
//     [ 'g', 7 ]
//   ]
```


#### conversion of array into an object 

1. using for loop

```javascript 
let arr = ["a", "b", "c", "d", "e"];
let object = {};
for (let i = 0; i < arr.length; i++) {
    object[arr[i]] = i

}
console.log(object);

```

2. using array entries 

```javascript
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

```


