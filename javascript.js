// 1. Ways to print in javascript
// console.log("hello world");
// alert("Hello Rupesh")
// document.write("Hello good mornig");

// 2. javascript console API
// console.log("Hello World", 4 + 6, "another log");
// console.warn("this is warning");
// console.error("this is an error");

// 3. Javascript variable
// What are variable? - container to store data values 
// var number1 = 50;
// var number2 = 50;
// console.log(number1+number2);

// 4. Data types in Javascript
// numbers
//var num1 = 20;
//var num2 = 30;


// string
// var str1 = "This is a string";
//var str2 = 'This is a string';

// Objects is a collection of properties.
// var marks = {
//     rupesh : 99,
//     harsh : 87,
//     kathan: 89
// }
// console.log(marks);

// Booleans
// var a = true;
// var b = false;

// console.log(a, b);

// var und = undefined;
// var und;
// console.log(und);

//var n = null;
// console.log(n);

/* At a very high level, there are two types of data types in javascript
1. Primitive data types: undefined, null, number, string, boolean, symbol.
2. Reference data types: Arrays and Objects.
*/

// var arr = [1,2,3,"Rupesh",4,5]
// console.log(arr);


// Operators in Javascript
// Arithmetic Operator +,-,*,/
// var a = 10;
// var b = 5;

// console.log("a+b is :",a+b);
// console.log("a-b is :",a-b);
// console.log("a*b is :",a*b);
// console.log("a/b is :",a/b);

// Assignment Operators
// var c = b;
//  c+=2; //c = c + 2;
//  c-=2; //c = c - 2;   
//  c*=2; //c = c * 2;
//  c/=2; //c = c / 2;
//  console.log(c);

// comparison operators
// var x = 34;
// var y = 45;
//  console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x>y);

// Logical Operator
// Logical and
//console.log(true && true);  true
// console.log(true && false); false  
// console.log(false && true); false
// console.log(false && false); false    

// Logical or
// console.log(true || true);  true
// console.log(true || false); true
// console.log(false || true); true
// console.log(false && false); false

// Logical not
// console.log(!false); true
// console.log(!true); false



// Function in Javascript
// function avg(a,b){
   // return (a+b)/2; //you can also find this type
    // c = (a+b)/2;
    // return c;
// }
// DRY = Do not repeat yourself
// var c1 = avg(4,6);
// var c2 = avg(14,6);
// console.log(c1,c2);     



// Conditionals in Javascript
/*
var age=41
// single if statement
if(age>18)
{
    console.log('you can drink');
}

// if-else statement

// if(age>18)
// {
//     console.log('you can drink');
// }
// else
// {
//     console.log('you cannot drink');
// }

age=23;
// if-else Ladder
if(age>32)
{
    console.log('you are not a kid');
}
else if(age>35)
{
    console.log('bachhe nhi rhe');
}
else if(age>38)
{
    console.log('you are bachhe');
}
else if(age>22)
{
    console.log('you are children');
}
else
{
    console.log('Bachhe rhe');
}
console.log('end of ladder');*/


// var age=18
// if(age<20)
// {
//     x="you can drink";
// }
// else
// {
//     x="you can not drink";
// }
// alert(x);

/* function using input from the user by alert 
var age = confirm("Are you older than 18 years");

if (age == true) 
{

    x = "You can drink!";

} else {

    x = "You can not drink!";

}

alert (x);*/

// For Loop
// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// While Loop
// const ac = 0;
// ac++;
// ac=ac+1;
//let j = 0;






//JS Course

//var let const
/*let a=21;
let b=55;
let c=77;
const author ="rupesh" //const can not be changed

{
    let b='this';
    console.log(b);
}
console.log(b);*/

//Data type
//premitive data types
/*let a = null;//null
let b = 345;//number
let c = true; //can also be false //boolean
let d = BigInt("567") //bigint
let e = "Rupesh" //string
let f = Symbol("I am a nice symbol")//symbol
let g = undefined //undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof f)

//non primitive data types
//objects in js
const item ={
    rupesh : true,
    harsh : false,
    mitesh : 55,
    kathan : undefined
}
console.log(item["rupesh"])

//Chap 1 
//Ques.1
let a = "rupesh";
let b = 5
console.log(a+b);

//ques. 2
console.log(typeof (a+b))
 
//ques.3 in const key and values are changed/added
const a1 ={
    name : "rupesh",
    class : 4,
    Div : b
}
//ques.4
a1['friends']="ramesh"
a1['name']="mahesh"
console.log(a1);

//ques.5
const dict ={
    Gm : "Good morning",
    Ge : "Good evening",
    Gn : "Good night",
    Hii : "How are u",
    hello : "i am fine"
}
console.log(dict["hello"]);// we can also write console.log(dict.hello)*/

//Operator
//77;
//"rupesh"
//console.log("operators in JS");
//let a = 10;
//let b = 4;
/*Arithmetic Operator

console.log("a + b=",a+b);
console.log("a - b=",a-b);
console.log("a % b=",a%b);
console.log("a * b=",a*b);
console.log("a ** b=",a**b);
console.log("a / b=",a/b);

//Inc/Dec 
console.log("a++ =",a++)
console.log("a =",a)
console.log("--b =",--b);
console.log("b =",b)

console.log("++a =",++a)//11
console.log("a++ =",a++)//11
console.log("--a =",--a)//11
console.log("a-- =",a--)//11
console.log("a =",a)//10

//Assignment Operator
//let Assignment = 5;
//Assignment+=5; //Assignment = Assignment +5
//Assignment-=1;
//Assignment*=5;
//Assignment%=5;
//Assignment/=5;
//Assignment**=3;
//console.log(Assignment)

//Comparison Operator
let comp1=6;
let comp2=7;
console.log("comp1==comp2 is",comp1==comp2)//false
console.log("comp1!=comp2 is",comp1!=comp2)//true
console.log("comp1===comp2 is",comp1===comp2)//false
console.log("comp1!==comp2 is",comp1!==comp2)//true
console.log("comp1>comp2 is",comp1>comp2)//false
console.log("comp1<=comp2 is",comp1<=comp2)//true
console.log("comp1<comp2 is",com1p1<comp2)//true


//Logical Operator
let x=5;
let y=6;
console.log(x<y && x==5)// true && true are true and everything is false
console.log(x>y && x==5)// false
console.log(x>y || x==5)// 2 me se 1 condition sahi hogi fir bhi true and everything is false
console.log(x<y || x==5)//true
console.log(x>y || x==6)//false
console.log(!true)//false
console.log(!false)//true*/

//Conditional expressions
//if statement
/*let a = prompt("Hey whats your age")
a = Number.parseInt(a)//converting string to a number
if(a>0){
    alert("this is a valid age")
}

//if-else statement
if(a>0){
    alert("this is a valid age")
}
else{
    alert("this is a unvalid age")
}

if(a<0){
    alert("this is a unvalid age")
}
else if(a<9){
    alert("you are a kid")
}
else if(a<18 && a>=9){
    alert("you are a kid and you can think of driving after 18")
}
else{
    alert("you can drive")
}
console.log("Done")
console.log("you can", (a<18? "not drive":"drive"))*/

//Switch

/*const expr = 'B.tech';
switch (expr) {
    case 'B.com':
        console.log('B.com is an accountant course');
        break;
    case 'Bca':
    case 'B.tech': 
        console.log('Bca and B.tech is an IT course');
        break;
        default:
        console.log('Sorry, we are not find a course{expr}');
}*/

/*const expr = 'papayas';
switch (expr) {
    case 'oranges':
        console.log('oranges are 100rs.');
        break;
        case 'mangoes':
        case 'papayas':
        console.log('mangoes and papayas are 150rs.');
        break;
        default:
        console.log('sorry, we are out of rs{expr}.');
}*/

//chap 2
//ques 1
/*let age = prompt("what is your age?")
age = Number.parseInt(age)
if(age>10 && age<20){
    console.log("your age lies between 10 and 20")
}
else{
    console.log("your age does not lies between 10 and 20")
}*/

//ques2
/*let age = prompt("what is your age")
switch(age){
    case '10':
        console.log("your age is 10")
        break;
        case '11':
            console.log("your age is 11")
            break;
            case '12':
                console.log("your age is 12")
                break;
                case '13':
                    console.log("your age is 13")
                    break;
                    case '14':
                        console.log("your age is 14")
                        break;
        default:
            console.log("your age is not special")
}*/

//ques 3
/*let num = prompt("what is your age?")
num = Number.parseInt(num)
if(num % 2 == 0 && num % 3 == 0)//Dividing 2 and 3 giving a 0 
{
    console.log("your number is divisible by 2 and 3")
}
else{
    console.log("your number is not divisible by 2 and 3")
}*/

//ques 4
/*let num = prompt("what is your age?")
num = Number.parseInt(num)
if(num % 2 == 0)//Dividing 2 and 3 giving a 0 
{
    console.log("your number is divisible by 2")
}
else if(num % 3 == 0)
{
    console.log("your number is divisible of 3")
}
else{
    console.log("your number is not divisible by 2 and 3")
}*/

//ques 5
/*let age = 19
let a = age>18 ? "you can drive" : "you can not drive"
console.log(a)*/

//For Loop
// for (i=0; i<100; i++)
// {
//     console.log(i+1)
// }

//program top add first n natural numbers
/*let sum =0      //|"let varibale is always use in block level scop"
let n = prompt("enter the value of n")
n = Number.parseInt(n)
for (i=0; i<n; i++)
{
    sum += (i+1)

}
console.log("sum of first" +n+ "natural number is" +sum)


//For in Loop it is use of array
let obj = {
    rupesh : 87,
    harsh : 78,
    krish : 89,
    mahjesh : 86,
    prakash : 67
}
for(let a in obj){
    console.log("marks 0f " +a+ " are " +obj[a])
}

//For of Loop it is use of array
for(let a of "Rupesh"){
    console.log(a)
}*/



//while loop
//syntax

// while(condition){
//    code execution
// }

//example of while loop

/*let n = prompt("enter the value of n")
n = Number.parseInt(n)
i=0;
while(i<n){
    console.log(i)
    i++;
}*/

//do while loop
/*let n= prompt("enter the value of n")
n= Number.parseInt(n)
let i=10; // i=0
do{ //  do while loop is atlieast one time execute 
    console.log(i)
    i++;
}while(i<n)*/


//"Function example in js"
// example 1
/*function oneplusAvg(x,y){
    console.log("Done")
    return (1+(x+y)/2)
}

let a = 1;
let b = 2;
let c = 3;

console.log("one plus average of a and b is", oneplusAvg(a,b))
console.log("one plus average of b and c is", oneplusAvg(b,c))
console.log("one plus average of c and a is", oneplusAvg(a,c))*/

//example 2
/*const hello = () =>{
    console.log("Hey how are u. I am fine")
    return "hii"
}
let v = hello();
console.log(v)

//example 3
const sum = (p, q)=>{
    return p * q
} 
console.log(sum(9, 7))*/




//chap 3
// example 1
// let marks = {
//     mahesh : 98,
//     shubham : 9,
//     harish : 78,
//     karan : 6
// }

// example. 1
/*for(let i=0; i<Object.keys(marks).length; i++) {
    console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}*/

// example. 2
// for(let key in marks){
//     console.log("the marks of " +key+ " are " +marks[key])
// }

//example 3
/*let cn =43 //cn is a correct number
let i 
while(i != cn){
    console.log("try again")
   i = prompt("enter the value")
}
console.log("you have entered a correct number")*/


//example 4
/*const mean = (a,b,c,d) =>{
    return(a+b+c+d)/4
}

console.log(mean(4,5,6,7))*/



//Strings
//string can never change  it


/*let name = "rupesh"
// console.log(name.length)
console.log(name[0])
console.log(name[5])

let friend = 'prakash'
console.log(friend)

//template literals
//string interpolation
let boy1 = "pramod"
let boy2 = "Nikhil"
// i want to  print a nikhil is a friend of pramod
let sentence = `${boy2} is a friend of ${boy1}` //`` it symbols known as backlits
console.log(sentence)

//Escap sequence character
//let fruit = 'Bana\'na'
//console.log(fruit.length)
let fruit = "Bana\"na"
console.log(fruit.length)*/

// let name = "rupesh"
/*console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))// print index p,e
console.log(name.slice(2))
console.log(name.replace("ru","pu"))

let friend = "Naman"
console.log(name.concat(" is a friend of ", friend, " Ok"))

let friend2 = "         Meena          "
console.log(friend2)
console.log(friend2.trim())*/

// let fr = "harsh + mahesh + rupesh"
// console.log(fr[0])
// console.log(fr[1])
// console.log(fr[2])
// console.log(fr[3])
// console.log(fr[4])
// console.log(fr[5])
// console.log(fr)



// use a for loop to print a string
// let str = "rupesh"
// for(let i=0; i<String.length; i++){
//     console.log(str[0])
//     console.log(str[1])
//     console.log(str[2])
//     console.log(str[3])
//     console.log(str[4])
//     console.log(str[5])
// }

// for(let char of str){
//     console.log(char)
// }

// for(let key in str){
//     console.log(str[key])
// }

// que  1
//string practice set
// let str = "Har\""
// console.log(str.length)


//que 2
// let name = "Rupesh"
// console.log(name.toLowerCase()) 

//que 3
// let str2 = "please give rs 1000"
// let amount = Number.parseInt(str2.slice(15))
// console.log(amount)
// console.log(typeof amount)

//que 4
// let friend = "deepika"
// friend[3] = "R"
// console.log(friend)  // friend is not changed because string is immutable or string cannot be changed
