// function findLength(str , target){
//     console.log("original string: ", str);
//     console.log("Index of target", str.indexOf(target));
// }
// findLength("Hello World", "World");

//find the length of the string

// const str = "Hello World";
// console.log(str.length);

//find the last index of the string

// function findLastIndex(str,target){
//     console.log("original string: ", str);
//     console.log("Index of target", str.lastIndexOf(target));
// }
// findLastIndex("hello world world world", "world");

//Slice

// const value = "morning";
// console.log(value.slice(1,4));

//function for slice

// function slicing(str,start,end){
//     console.log("original string: ", str);
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         if(i>=start && i<end){
//             result += str[i];
//         }
//     }
//     console.log("result: ", result);
// }
// slicing("morning", 1,4);

//array

// let arr = [1,2,3];
// arr.push(4);
// console.log(" after removeing last element",arr)
// console.log(" after removeing last element",arr.pop())
// arr.unshift(500);//add element at the beginning
// console.log(arr)//add element at the beginning
// arr.shift()//remove element at the beginning
// console.log(arr)


//class
class Animal{
    constructor(name, legs,sound){
        this.name = name;
        this.legs = legs;
        this.sound = sound;
    }
}

let dog = new Animal("dog",4,"bark");
console.log(dog);