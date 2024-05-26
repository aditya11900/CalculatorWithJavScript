function async (){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("Async function");
            resolve("Hello, World!");
        },2000);
    });
}
console.log("fetching data");
let promise = async();
promise.then((res)=>{
    console.log(res);
})

