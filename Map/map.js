// const nums =[1,2,3,4];
// const doubledTheNumber = nums.map ((nums) =>(nums*2));
// console.log(doubledTheNumber);
// console.log(nums);


// const items = ['Apple', 'Banana', 'Cherry'];
// const itemElements = items.map((item) => `<li>${item}</li>`);
// console.log(itemElements);

// converting data types 

// const stringNumbers = ['1', '2', '3'];
// const numbers = stringNumbers.map((str) => parseInt(str));
// console.log(numbers);


// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 },
//   ];
  
//   const ages = people.map((person) => person.age);
//   const names = people.map((person) => person.name);

//   console.log(ages);
//   console.log(names);

// Creating a Map
// const myMap = new Map();

// // Adding key-value pairs
// myMap.set('name', 'Alice');
// myMap.set('age', 30);

// // Retrieving values
// const name = myMap.get('name');
// const age = myMap.get('age');

// console.log(name); // Output: 'Alice'
// console.log(age);  // Output: 30

// // Iterating over the Map
// myMap.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// const people = [
//     { name: 'Raj', age: 28 },
//     { name: 'Swapnil', age: 42 },
//     { name: 'Anushka', age: 35 }
//   ];
  
//   const names = people.map((person) => person.name)
  
//   console.log(names);

// new array only number muntliplited by  5

// const numbers = [1, 2, 3, 4];

// const multiplyByFive = numbers.map((numbers)=> numbers * 5)

// console.log(numbers);
// console.log(multiplyByFive);


// greets

// const employeeData = [
// 	{name: "ram", dept: "marketer"}, 
// 	{name: "Radha", dept: "SDE"},
// 	{name: "shyam", dept: "finance professional"},
// ]

// const greetEmployeeMessages = employeeData.map((employeeData) => `Hi ${employeeData.name} we are glad to have you as a ${employeeData.dept}`)

// console.log(greetEmployeeMessages);

// titles of the books

const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
  ];
  
  const getBookTitles = (books) => {
    return books.map((book) => book.title);
  }
  
  const titles = getBookTitles(books);
  console.log(titles);