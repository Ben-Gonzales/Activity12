//1. Exercise: Object Manipulation Create an object called "student" with properties: name, age, and grade. Add a method called "introduce" that prints the student's name, age, and grade to the console. 
const student = {
    name: 'Karl',
    age: 21,
    grade: 3.75,
    introduce() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
      }
  };
  student.introduce();

//2. Exercise: Array Manipulation Create an array called "fruits" with the elements: apple, banana, cherry. Add a new fruit, "orange", to the end of the array. Print the modified array to the console.
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);
fruits.push('orange');
console.log(fruits);

//3. Exercise: Object Iteration Create an object called "person" with properties: name, age, and city. Iterate over the object and print each property to the console.
const person = {
    name: 'Tope',
    age: 20,
    city: 'Bacoor'
  };
  for (let key in person) {
    console.log(person[key]);
  }

//4. Exercise: Array Iteration Create an array called "numbers" with the elements: 1, 2, 3, 4, 5. Use a loop to calculate the sum of all the numbers in the array and print the result to the console.
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

//5. Exercise: Object Access Create an object called "car" with properties: make, model, and year. Access the value of the "make" property and print it to the console.
const car = {
    make: 'Mazda',
    model: 'RX-7',
    year: 2001
};
console.log(car.make);

//6. Exercise: Array Access Create an array called "colors" with the elements: red, green, blue. Access the element at index 1 and print it to the console.
const color = ['red', 'green', 'blue'];
console.log(color[1]);

//7. Exercise: Object Modification Create an object called "book" with properties: title, author, and year. Update the value of the "year" property to the current year and print the modified object to the console.
const book = {
    title: 'Percy Jackson: The Lighting Thief',
    author: 'Rick Riordan',
    year: 2005
};
console.log(book);
book.year = new Date().getFullYear();
console.log(book);

//8. Exercise: Array Modification Create an array called "animals" with the elements: cat, dog, elephant. Remove the element "dog" from the array and print the modified array to the console.
const animals = ['cat', 'dog', 'elephant'];
console.log(animals);
animals.splice(1, 1);
console.log(animals);

//9. Exercise: Object Comparison Create two objects, "object1" and "object2", with the same properties and values. Compare the two objects for equality and print the result to the console.
const object1 = {
    make: 'Nissan',
    model: 'Skyline R32'
};
const object2 = {
    make: 'Toyota',
    model: 'Trueno AE86'
};
let areObjectsEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length){
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}
const areEqual = areObjectsEqual(object1, object2);
console.log(areEqual);

//10. Exercise: Array Concatenation Create two arrays, "array1" and "array2", with some elements. Concatenate the two arrays and print the resulting array to the console.
const arr3 = ['Harry', 'Potter', 'the', 'boy', 'who', 'lived'];
const arr4 = ['has', 'come', 'to', 'die.'];
console.log(arr3);
console.log(arr4);
const arr5 = arr3.concat(arr4);
console.log(arr5);
