/* 
You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces.
*/
function wordCountGenerator(text) {
    // Convert the text to lowercase to handle case insensitivity
    text = text.toLowerCase();

    // Split the text into words by spaces
    const words = text.split(' ');

    // Create a Map to store the word counts
    const wordCountMap = new Map();

    // Iterate through each word in the array
    words.forEach(word => {
        // Check if the word is already in the map
        if (wordCountMap.has(word)) {
            // If the word is already in the map, increment the count
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            // If the word is not in the map, set the count to 1
            wordCountMap.set(word, 1);
        }
    });

    return wordCountMap;
}

// Example usage:
const text = "The quick brown fox jumps over the lazy dog The fox is quick";
const wordCounts = wordCountGenerator(text);

// Display the word counts
wordCounts.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});





/* 
2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements.
*/
function removeDuplicates(arr) {
    // Use a Set to store only unique values
    const uniqueSet = new Set(arr);

    // Convert the Set back to an array (if needed)
    return [...uniqueSet];
}

// Example usage:
const numbers = [1, 2, 3, 4, 3, 2, 5, 6, 7, 8, 5, 9, 10];
const uniqueNumbers = removeDuplicates(numbers);

console.log(uniqueNumbers);





/* 

You are working on a project that requires you to swap the values of two variables without using a temporary
variable. You decide to write a function that takes two variables as input and swaps their values using
destructuring assignment with an array. The function should take the two variables as arguments, destructure
them into an array, and then swap their positions within the array. Finally, the function should return an array
with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should
return an array [10, 5] with x now equal to 10 and y equal to 5.
*/
function swapValues(x, y) {
    // Use destructuring assignment to swap the values
    [x, y] = [y, x];

    // Return an array containing the swapped values
    return [x, y];
}

// Example usage:
let x = 5;
let y = 10;

const swappedValues = swapValues(x, y);

console.log(swappedValues);  // Output: [10, 5]



/* 
4. Access random elements.
You are building a program that takes an array of numbers as input and you need to extract the first, second,
and last elements of the array. You decide to write a function that can accomplish this task using destructuring
assignment with an array. The function should take the array as an argument, destructure it into three variables
representing the first, second, and last elements, and then return an array with these three values. For example,
if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].
*/
function extractElements(arr) {
    // Destructure the first and second elements directly from the array
    const [first, second] = arr;

    // Get the last element using the length of the array
    const last = arr[arr.length - 1];

    // Return an array containing the first, second, and last elements
    return [first, second, last];
}

// Example usage:
const number = [1, 2, 3, 4, 5];
const result = extractElements(number);

console.log(result);  // Output: [1, 2, 5]




/* 
5. Min and max values.
You are building a program that needs to find the maximum and minimum values in an array of numbers. You
decide to write a function that can accomplish this task by taking an array of numbers as input and using the
spread operator with the Math methods max() and min(). The function should return an object with two
properties, max, and min, representing the maximum and minimum values in the input array, respectively. For
example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }.
*/
function findMinMax(arr) {
    // Use the spread operator with Math.max() and Math.min() to find the max and min values
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // Return an object with the max and min properties
    return { max, min };
}

// Example usage:
const numb = [5, 2, 7, 1, 9];
const resul = findMinMax(numb);

console.log(resul);  // Output: { max: 9, min: 1 }




/* 
6. Nested Objects.
Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below.
*/
function extractNameAndStreet(person) {
    // Destructure the name and street properties from the nested object
    const { name, address: { street } } = person;

    // Return an object with the name and street properties
    return { name, street };
}

// Example usage:
const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};

const resu = extractNameAndStreet(person);
console.log(resu);  // Output: { name: "John Doe", street: "123 Main St" }




/* 

*/