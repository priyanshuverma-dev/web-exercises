

var name = "Priyanshu"
let firstName = "Hello"
const time = 240
let num1 = 20

// String Number null Boolean undefined Object Symbol BigInt

firstName = 40;

// 40 + 240

// Arithmetic Operators

// let x = 20 + 10
// let x = 20 - 10
// let x = 20 * 10
// let x = 20 / 10
// let x = 20**5
// console.log(x)

// comparision operators

let x = 3 >= 4 
let y = "hello" != 'hell' 

// console.log(y)

// logic operators


// !, &&, ||
// not, true & true, false or true.

let isValid = 'priyanshu' == 'priyanshu' && 'pass' == 'pass1'
// True True = True
// True False = False
// False True = False
// False False = False

let isOneValid = 'priyanshu' == 'priyanshu' || 'pass' == 'pass'
// True True = True
// True False = True
// False True = True
// False False = False


// console.log(isOneValid) // true
// console.log(!isOneValid) // false


// let num =  prompt("write a number")

// if(num == "hello"){
//     console.log("The Number is too low")
// }if(num == "10"){
    
//     console.log("The Number is 10")
// }
// else{
//     console.log("The Number is too big")

// }



let num = 10;

// if(num < 10){
//     console.log("The Number is smaller than 10 or equal")
// }
// if(!num > 10){
//     console.log("The Number is bigger than 10 or equal")
// }
// else{
//     console.log("No Function")
// }

// ? : 
// Ternary opertors

// let result = num == 10 ? "It is 10" : "Not 10";
// console.log(result)

// Loops
let list = [1,2,3,4,5,6]; // 6

// loop 1 
// let index = 0; True
// 0 < 6; True
// 0 + 1 index = 1;
// ....  0 < 6 ; false; 6 < 6 
// for (let index = 0; index < list.length; index++) {
//     console.log(list[index]);
// }

// while (list.length > 0) {
//     console.log("while loop");
//     // list.pop(); // remove the last item from the list

// }


// do{
//     console.log("do while loop");
//     list.pop()
// } while(list.length > 0)


// Functions

// function hello(){
//     console.log("Hello !!");
// }

// function addNumbers(num1 , num2){
//     return num1 - num2;
// }

// let z =  addNumbers(20,10)
// console.log(z)


// const hi = ()=> {

//     console.log("Hi !!");
// }


// document.body.innerHTML = "<p>This is inserted by JS</p>"

const heading = document.querySelectorAll('h1');
const button = document.querySelector('button');
const paragraph = document.getElementsByClassName("para");
const h4 = document.getElementById('h4div');


console.log(h4)
h4.style = "color: red"

// paragraph.item(0).style = 'background-color: red'

button.addEventListener("click",()=>{
    // for (let index = 0; index < heading.length; index++) {
    //         heading[index].style = "color: red";
    // }

    // heading.forEach(element => {
    //     element.style = "color: red";
    // });
    // heading.style = "color: red";
})







