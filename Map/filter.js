// const numbers = [1, 2, 3, 4, 5, 6];

// Filter out even numbers
// const evenNumbers = numbers.filter((num) => num % 2 === 0);

// console.log(evenNumbers); // Output: [2, 4, 6]
// console.log(numbers);     // Output: [1, 2, 3, 4, 5, 6]

// filtering strings

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const filteredWords = words.filter((word)=> word.length < 6);
// console.log("words that is less that word count 6",filteredWords);

// const filteredWords2 = words.filter((word)=> word.length > 6);
// console.log("words that is greater that word count 6",filteredWords2);


// unique number in array

// const numbers = [1, 2, 3, 4, 5, 6, 1, 2, 3];
// const uniqueNumbers = numbers.filter((number, index, array) => array.indexOf(number) === index);

// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]

// only names with staring is A

// const studentName = ["Aditya", "Anjali", "Prpit", "Bhanu Kumar", "Jaya", "nkit", "shayam"]
// const studentNames = studentName.filter((username)=> username[0] === "A" || username[0] === "a");

// console.log(studentNames);

// filter price <40

// const productData = [
//     {prodName: "Dairy Milk", price: 10},
//     {prodName: "Dairy Milk Silk", price: 70},
//     {prodName: "Five Star", price: 20},
//     {prodName: "Mars", price: 50}
// ]
// const getProducts =(productData, price) =>{
//     return productData.filter((productData)=> productData.price <= price)
// }

// console.log(getProducts(productData, 40))


// return  divisible number by 7

// const numbers = [1, 2, 3, 21, 14, 7];
// const isDivisibleBy7 = numbers.filter((numbers)=> numbers % 7 === 0)

// console.log(isDivisibleBy7)

// bollywood movie with some cases 

const bollywoodMovies = [
    { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
    { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
    { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
    { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
    { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
    { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
    { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
  ];
  
  // Your code here
  const getBestOldBollywoodMovies = (bollywoodMovies) => {
    return bollywoodMovies
      .filter((movie) => movie.year < 1990 && movie.rating >= 8.0)
      .map((movie) => movie.title);
  };
  
  const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
  console.log(bestOldMovies);
   // Output: ['Sholay', 'Parinda']