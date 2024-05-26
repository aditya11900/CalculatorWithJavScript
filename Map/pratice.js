// array to object

let arr=['abcd','bdjd','ckdkd','ddndn'];
let obj = arr.reduce((acc,curr,index)=>{
    acc[index]=curr;
    return acc;
},{});

console.log(obj);

// object to array

let newArray = Object.entries(obj).map(([key,value])=>{
    return value;
});

console.log(newArray);