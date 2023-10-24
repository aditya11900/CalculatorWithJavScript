let car = function(color , model){
    this.color = color;
    this.model = model;
    }

let car1 = new car("red", "BMW");
let car2 = new car("black", "Audi");
let car3 = new car("white", "Mercedes");

console.log(car1 ,car2, car3);