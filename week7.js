

/*question 1a:
Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the 
value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);
let minusAge = ages[ages.length - 1] - ages[0]
console.log("minusAge", minusAge);

/*question 1b:
Add a new age to your array and repeat the step above to ensure it is dynamic. 
(works for arrays of different lengths).*/

ages.push(100);
console.log("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);

/*question 1c:
Use a loop to iterate through the array and calculate the average age.
*/

let sumOfAges = 0;

for(let i = 0; i < ages.length; i++) {
   // console.log("Test");
    sumOfAges += ages[i]
    console.log("index:",i,"sumOfAges:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length
console.log("Average", average);

/*question 2a:
Create an array called names that contains the following values: 
'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the 
average number of letters per name.*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0;

for(i = 0; i < names.length; i++){
   // console.log("Test");
totalChars += names[i].length
console.log("index:",i,"name:", names[i], "totalChars:", totalChars);
}
let averageName = totalChars / names.length
console.log("Average of Name:", averageName);

/*question 2b:
Use a loop to iterate through the array again and 
concatenate all the names together, separated by spaces.*/

let concatNames = "";
for(let i = 0; i < names.length; i++){
  //  console.log(i, "Test");
  concatNames = concatNames.concat(names[i] + " ")
  console.log("Names concatenated:", concatNames);
}

/*question 3:
How do you access the last element of any array?
*/

console.log("Last element of ages array:", ages[ages.length - 1]);

/*question 4:
How do you access the first element of any array?
*/
console.log("First element of ages array:", ages[0]);

/*question 5:
Create a new array called nameLengths. 
Write a loop to iterate over the previously created names array and 
add the length of each name to the nameLengths array.*/

let nameLengths = [];
for(let i = 0; i < names.length; i++){
   // console.log(i, "test");
   nameLengths.push(names[i].length)
   console.log("Name lengths array:", nameLengths);
}

/*question 6:
Write a loop to iterate over the nameLengths array and 
calculate the sum of all the elements in the array.
*/

let charsTotal = 0;
for(i = 0; i < nameLengths.length; i++){
   // console.log(i, "test");
   charsTotal += nameLengths[i]
   console.log("CharsTotal:", charsTotal);
}

/*question 7:
Write a function that takes two parameters, word and n, as arguments and 
returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/

function concatWords(word, n){
console.log("Word Par:", word, "N par:", n);
let concat = word.repeat(n);
console.log(concat);
}
concatWords("Hello", 3)

/*question 8:
Write a function that takes two parameters, firstName and lastName, 
and returns a full name. 
The full name should be the first and the last name separated by a space.*/

function fullName(firstName, lastName){
    let fullName = firstName + " " + lastName
    console.log(fullName);
}
fullName("Kaylee", "Udinski");

/*question 9:
Write a function that takes an array of numbers and returns true 
if the sum of all the numbers in the array is greater than 100.*/

let numbers1 = [100,200,300,400]
let numbers2 = [1,2,3,4]

function sumNumbersArray(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
       // console.log(i, "test");
       total += array[i]
       console.log("Total:", total);
    }
    if (total > 100){
        console.log("Total:", total, true);
        return true
    } else {
        console.log("Total:", total, false);
        return false
    }

}
sumNumbersArray(numbers2);

/*question 10:
Write a function that takes an array of numbers and 
returns the average of all the elements in the array.
*/

function calculateNumbersAverage(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        //console.log(i, "Test");
        total += array[i]
        console.log("calculate Function, total:", total);
    }
    let average = total / array.length
    console.log("Average of Numbers:", average);
    return average;
}
calculateNumbersAverage(numbers1);

/*question 11:
Write a function that takes two arrays of numbers and returns 
true if the average of the elements in the first array is greater than 
the average of the elements in the second array.*/

let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 99];

function twoAverages(array1, array2){
    console.log("Parameters:", array1, array2);
    let total1 = 0;
    let total2 = 0;

    for(const number of array1){
        total1 += number
        console.log("Current number loop1:", number, "Total:", total1);
    }
    for(const number of array2){
        total2 += number;
        console.log("Current number loop2:", number, "Total:", total2);
    }

    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;

    console.log("Averages:", average1, average2);

    if(average1 > average2){
        console.log(true);
        return true
    } else if(average1 < average2){
        console.log(false);
        return false
    } else{
        console.log("Numbers are equal");
    }
}
twoAverages(numbers3, numbers4)

/*question 12:
Write a function called willBuyDrink that takes a 
boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/

function willBuyDrink(isHotOutside, moneyInPocket){
console.log("Parameters:", isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log("Buy a Drink?", buyDrink);
return buyDrink;
}

willBuyDrink(false, 5)

/*quesiton 13: 
Create a function called willEat that takes a boolean isHungry and returns if you will eat if you are hungry.
*/
function willEat(isHungry) {
    if (isHungry) {
        return "You will eat!";
    } else {
        return "You will not eat";
    }
}

console.log(willEat(false)); 
