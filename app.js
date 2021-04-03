//========================CHAPTER 17 TO 20========================
//========================QUESTION 1========================
// let matrix = [[], [], []];

//========================QUESTION 2========================
// let matrix = [[], [], []];
// let number;

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         number = +prompt("Enter numbers");
//         matrix[i][j] = number;
//     }
// }

// for (i = 0; i < matrix.length; i++) {
//     for (j = 0; j < matrix[i].length; j++) {
//         document.write(matrix[i][j] + "\t");
//     }
//     document.write("<br>")
// }

//========================QUESTION 3========================
// let number = 0;

// for (let i = 1; i <= 10; i++) {
//     document.write("<br>"+ ++number);
// }

//========================QUESTION 4========================
// let number = Number(prompt("Enter number"));
// let startingPoint = Number(prompt("Enter starting number"));
// let endingPoint = Number(prompt("Enter ending number"));


// for (let i = startingPoint; i <= endingPoint; i++) {
//     document.write("<br>" + number + "\t*\t" + i + "\t=\t" + (number * i));
// }

//========================QUESTION 5========================
// let fruits = ["apple", "banana", "mango", "orange","strawberry"];

// for(let i =0; i <fruits.length;i++){
//     document.write("<br>" + "Element at index " + i +" is " + fruits[i]);
// }

//========================QUESTION 6========================
// document.write("Counting :" + "<br>");
// for (let i = 1; i <= 15; i++) {
//     document.write(i+",\t");
// }

// document.write("<br>"+"Reverse counting :" + "<br>");
// for (i = 10; i >= 1; i--) {
//     document.write(i+",\t");
// }

// document.write("<br>" + "Even number :" + "<br>");
// for (i = 0; i <= 20; i+=2) {
//     document.write(i + ",\t");
// }

// document.write("<br>" + "Even number :" + "<br>");
// for (i = 1; i <= 19; i+=2) {
//     document.write(i + ",\t");
// }

// document.write("<br>" + "Series :" + "<br>");
// for (i = 2; i <= 20; i+=2) {
//     document.write(i + "K,\t");
// }

//========================QUESTION 7========================
// let sweets = ["cake", "apple pie", "cookie", "chips", "patties"]

// let selectSweet = prompt("Enter name");

// let answer = sweets.indexOf(selectSweet);
// if (answer === -1) {
//     document.write("We are sorry " + selectSweet + " is not avalible in our bakery")
// }

// else {
//     document.write(selectSweet + " avalible at index " + answer + " in our bakery");
// }

// Or
// let array = ["cake", "apple pie", "cookie", "chips", "patties"];
// let selectSweet = prompt("Enter sweets");
// let notFind = true;

// for(let i =0;i <array.length;i++){
//     if(selectSweet.toLowerCase() === array[i]){
//         document.write("The given item is found in the list");
//         notFind = false;
//         break;
//     }
// }
// if(notFind){
//     document.write("The given item is not found in the list")
// }

//========================QUESTION 8========================
// let numbers = [24, 53, 78, 91, 12];
// let largestNumber = numbers[0];

// for(let i = 0;i < numbers.length;i++){
//     if(largestNumber < numbers[i]){
//         largestNumber = numbers[i];
//     }
// }

// document.write("<br>"+"Numbers : "+numbers);
// document.write("<br>"+"Largest Number is: "+ largestNumber);

//========================QUESTION 9========================
// let numbers = [24, 91, 12, 53, 78];
// let smallestNumber = numbers[0];

// for(let i = 0;i < numbers.length;i++){
//     if(smallestNumber > numbers[i]){
//         smallestNumber = numbers[i];
//     }
// }

// document.write("<br>"+"Numbers : "+numbers);
// document.write("<br>"+"Smallest Number is: "+ smallestNumber);

//========================QUESTION 10========================
// let number = 5;
// while(number <= 100){
//     document.write(number +"\t");
//     number = 5+number;
// }



//========================CHAPTER 21 TO 25========================

//========================QUESTION 1========================
// let firstName = prompt("Enter you First name");
// let lastName = prompt("Enter you Last name");
// document.write("Hello " + firstName + " " + lastName);

//========================QUESTION 2========================
// let string = prompt("Enter String/Text");
// document.write("<br/>"+"User given string: "+ string+ "<br/>"+"Length of user given string is: " + string.length);

//========================QUESTION 3========================
// let word = "Pakistani";
// document.write("<br>" + "Index of 'n' is: " + word.indexOf("n"));

// or

// let word = "Pakistani";
// for (let i = 0; i < word.length; i++) {
//     if (word[i] === "n"){
//         document.write("<br>"+ "Index of 'n' is: " + i);
//         break;
//     }
// }

//========================QUESTION 4========================
// let greeting = "Hello World";
// document.write("<br/>Last index of string: " + greeting.lastIndexOf("l"));

//========================QUESTION 5========================
// let word = "Pakistani";
// document.write("<br/>"+ "Character at index 3: " + word.charAt(3));

//========================QUESTION 6========================
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName.concat(" ",lastName);
// document.write("<br>" + "Full Name using string concat function: " + fullName);

//========================QUESTION 7========================
// let city = "Hyderabad";
// document.write("<br>" + city.replace("Hyder","Islam"));

//========================QUESTION 8========================
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g,"&"));

//========================QUESTION 9========================
// let str = "472";
// document.write("<br>"+ "Data type of str: " + typeof str);
// str = Number(str);
// document.write("<br>"+ "Data type of str: " + typeof str);

//========================QUESTION 10========================
// let fruit = prompt("Enter any fruit");
// document.write("<br>"+ "User input : " + fruit);
// document.write("<br>"+ "Upper Case : " + fruit.toUpperCase());

//========================QUESTION 11========================
// let fruit = prompt("Enter any fruit");
// document.write("<br>"+ "User input : " + fruit);
// document.write("<br>"+ "Lower Case : " + fruit.toLowerCase());

//========================QUESTION 12========================
// let number = 34.32;
// number = number.toString();
// document.write("<br>" + "Number: " + number);
// let Result = number.replace(".","");
// document.write("<br>" + "Result: " + Result);

//========================QUESTION 13========================
// let userName = prompt("Enter user name ");
// for (let i = 0; i < userName.length; i++) {
//     if (userName[i] === "@" || userName[i] === "," || userName[i] === "." || userName[i] === "!") {
//         alert("Please Enter a valid username");
//         break;
//     }
// }

//========================QUESTION 14========================
// let sweets = ["cake", "apple pie", "cookie", "chips", "patties"];
// let order = prompt("Enter your order");
// let index = sweets.indexOf(order.toLowerCase());
// if(index === -1){
//     document.write("<br>" + "We are sorry." + order + " is not avalible in our bakery");
// }
// else{
//     document.write("<br>"+ order.toLowerCase() + " is avalible at index " + index + " in our bakery");
// }


//========================QUESTION 16========================
// var university = "University of Karachi";
// let array = university.split("");

// let i = 0;

// while(i<university.length){
//     document.write("<br>"+array[i]);
//     i++;
// }

//========================QUESTION 17========================
// let userInput = prompt("Enter any thing");
// let lastIndex = userInput.length;
// document.write("<br>"+"User input: " + userInput);
// document.write("<br>"+ "Last character of user input: " + userInput[lastIndex-1]);

//========================QUESTION 18========================
let string = "The quick brown fox jumps over the lazy dog";
let i= 0;
let count = 0;
while(i < string.length){
    if("the" === (string.slice(i,i+3).toLowerCase())){
        count++;
    }
    i++;
}
document.write("<br>"+ "Text: " + string);
document.write("<br>"+ "There are "+ count + " occurance(s) of the word \"the\"");

// =================================complete====================================