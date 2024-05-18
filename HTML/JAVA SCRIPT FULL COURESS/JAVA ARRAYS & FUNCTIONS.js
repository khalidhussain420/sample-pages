// const fruits = ["apple", "banana", "cherries", "blueberries", "blackbarries", 5, null, true, false];
// console.log(fruits);
// // to change
// fruits[6] = "grapes";  
// console.log(fruits);
// console.log(fruits[3]);
// let bestfruit = fruits[0]
// console.log("take every day keep doctor away:" + bestfruit);



// // FUNCTIONS

// function wish(){
//     console.log("GOOD MORINING How are you ?");
//     console.log("HAPPY BIRTHADAY What about party on night ?");
//     console.log("WHO was your day going ?");
// }


// wish();

// use of parameters & argument in FUNCTIONS


// function greets(name) {
//     console.log("hello" + " " + name + " " + "how are you");
// }

// greets("khalid");
// greets("chaitanaya");
// greets("rizwana");


// const jakka = "jakka";
// const ravi = "ravi";
// const durga = "durga";

// greets("jakka");
// greets("ravi");
// greets("durga");

// // MULTIPLE PARAMETERS

// function littleBIO(name, study, place){
//     console.log("ms/mr:" + name + " " + study + " " + place);
// }

// littleBIO("khalid", "mechanical", "bitragunta");
// littleBIO("chaitanaya", "governement officer", "hyderabad");
// littleBIO("rizwana", "medicine", "kadapa");
// littleBIO("jakka", "mechanical", "ulapala");


//   **RETURN**

// ==>>WITHOUT RETURN==>>

// const wallheight = 100;
// function caluculation(value) {
//     console.log("the value in cm is: " + value * 2.54 + " cm");
// }

// const width = caluculation(200);
// const height = caluculation(wallheight);

// const dimensions = [width, height];
// console.log(dimensions);

//    ==>>WITH RETURN==>>

// const measure1 = 10.8;
// const measure2 = 4.094;
// function caluculation(value, dim){
//     const inch = value * 2.54;
//     return inch;
// }
// const height1 = caluculation(measure1);
// const height2 = caluculation(measure2);

// const dimensions = [height1, height2];
// console.log(dimensions);


// //    SHORTCUT
// const size1 = 10.8;
// const size2 = 10.4;
// function calc(value){
//     return value / 2.54;
// }
// const inch1 = calc(size1);
// const inch2 = calc(size2);
// const inch = [inch1, inch2];
// console.log(inch);

//     **FUNCTION EXPRESSION**
//    ==>> WITHOUT EXPRESSION==>>
// function add(num1, num2){
//     return num1 + num2;
// }
// const num1 = add(9, 6);
// const num2 = add(12, 13);
// const result = [num1, num2];
// console.log(result);

//    ==>>WITH EXPRESSION==>>
// function operation(num1, num2, num3){
    // return num1 + num2 * num3;
}
// const opr1 = operation(10, 5, 6);
// const opr2 = operation(60, 20, 9);
// const opr3 = operation(11, 3, 7);
// const final = [opr1, opr2, opr3];
// console.log(final);
//{ ARRAYS CHANGER
// final[2] = 5; 
// console.log(final);
// console.log(final[1]);}

// const final = [operation(10, 5, 6), opr2, opr3];
// console.log(final);

// //  ARROW FUNTION
// const add = (opr1, opr2) => opr1 * opr2;

//    @@@==>>OBJECTS@@@==>>>
// const person = {
//     firstname: "khalid",
//     middlename: "hussain",
//     lastname: "shaik",
//     age:24,
//     education: "B . E . Mechanical",
//     marriedstatus: "no",
//     goodfellow: "yes",
//     sex: "male",
//     friends: ["jakka", "ravi", "durga"],
//     greetings: function(){
//         console.log("hello this is about agent khalid");
//     } 
// };
// console.log(person);
// console.log(person.marriedstatus);
// console.log(person.friends[0]);
// person.greetings();


// ====>>>*CONDITION STATEMENTS (IF,ELSE,ELSE IF,!)


