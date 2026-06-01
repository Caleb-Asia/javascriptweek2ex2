function sum(integer) {
    if (integer % 1 !== 0 ) {
        console.log("Not a valid integer");
        return;
    }
    let sum = 0 ;
    for( let i = 0 ; i <= integer ; i++) {
        sum += i ;
    }
    console.log("Total is:" + sum);
 
}
sum(9)
function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number ; i++) {
        fact *= i 
    }
    console.log("Factorial is:" + fact);
}
factorial(7)
function funkyMath() {

}

let numbers = [1 , 2 , 33 , 45 , 6 , 44]
let oddStuff = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddStuff.push(numbers[i]);
    }
}
//referenced sorting from w3schools.com//
oddStuff.sort(function(a, b) {
    return a - b;
});
console.log(oddStuff);

let me = {
    firstName: "Caleb",
    lastName: "Asia" ,
    age: 21 ,
    favColor: "periwinkle",
    dreamCar: "Trolley",
}
me.favfood= "Chicken Alfredo"
delete me.age   