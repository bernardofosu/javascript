// Naming Variables
let js = "amazing"
console.log(40 + 8 + 3 - 10)

console.log("Jonas");

let first_name = "Bernard";
console.log(first_name);

// Checking datatypes
console.log(typeof true)
console.log(typeof "Hello")
console.log(typeof 5)

console.log(typeof first_name)
first_name = 5
console.log(typeof first_name)



const year = 2000
console.log(typeof year)

year = 2001

const now = 2024

const ageAma = now - 1991
const ageKofi = now - 1986
console.log(ageAma <= ageKofi)

let a = b = 4
console.log(a, b)

age = (1 + ((2 ** 3) * 4 / 5))

console.log(age)


// First Coding Exercise 1 for markBMI
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI)

higherBMI = `"Mark's BMI is higher than John's!"`;
console.log(higherBMI);

if (markBMI > johnBMI) {
    console.log(`"Mark's BMI (${markBMI}) is higher than John's (${johnBMI})"`)
}
else {
    console.log(`"John's BMI (${johnBMI}) is higher than Mark's (${markBMI})"`)
}

// Second Coding Exercise 1 for markBMI
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markBMI2, johnBMI2, markHigherBMI2);


const firstName = "Bernard";
const job = "Planner";
const currentYear = 2024;
const birthYear = 1996;
const dateOfBirth = currentYear - birthYear

const bernard = "I'm " + firstName + ", a "
    + dateOfBirth + " years old " + job + '!';

console.log(bernard);

const ben = `I'm ${firstName}, a ${dateOfBirth} years old ${job}!`;
console.log(ben)

// line breaks
console.log("Bernard \n\
Multiple \n\
Lines");

console.log(`Bernard
Ofosu
Ghana`);

// coding challenge
const age2 = 19
const isOldEnough = age2 >= 18
console.log(isOldEnough)

const birthYear2 = 2000;
let century;

if (isOldEnough) {
    console.log("Bernard can start driving 🚗");
}
else {
    console.log("Bernard do not meet the minimum age requirement 😓")
}

if (birthYear2) {
    century = 20;
}
else {
    century = 21;
}

console.log(century)


const birth_year = "1991";
console.log(birth_year + 18);

age = 13
a = "13"

add = Number(a) + age

console.log(add)

// Adding prompts
const favNumber1 = Number(prompt("Enter your favourite number"));
console.log(favNumber1);
console.log(typeof favNumber1);


const favNumber = prompt("Enter your favourite number")
console.log(Number(favNumber1))
console.log(typeof favNumber1)

// coding challenge
dolpinsScore = 96, 108, 89;
koalasScore = 88, 91, 110;


const avgDolphinScore1 = (96 + 108 + 89) / 3;
const avgKoalasScore1 = (88 + 91 + 110) / 3;
console.log(avgDolphinScore1, avgKoalasScore1);

if (avgDolphinScore1 === avgKoalasScore1) {
    console.log("No team won");
}
else if (avgDolphinScore1 > avgKoalasScore1) {
    console.log("Team Dolphins Won");
}
else {
    console.log("Team Koalas Won");
}


// coding challenge
dolpinsScore = 97, 112, 101;
koalasScore = 109, 95, 123;

const avgDolphinScore = (97 + 112 + 101) / 3;
const avgKoalasScore = (109 + 95 + 106) / 3;
console.log(avgDolphinScore, avgKoalasScore);

if (avgDolphinScore > avgKoalasScore && avgDolphinScore >= 100) {
    console.log("Team Dolphins");
}
else if (avgKoalasScore > avgDolphinScore && avgKoalasScore >= 100) {
    console.log("Team Koalas Won");
}
else if (avgDolphinScore === avgKoalasScore && avgDolphinScore >= 100 && avgKoalasScore >= 100) {
    console.log("Both teams won");
}
else {
    console.log("Both teams did not win");
}

// coding exercise
const age = 17;
const drive = age >= 18 ? "You can drive" : "You cannot drive";
console.log(`${drive}`)



// coding challenge
const userBill = 40

const tip1 = 0.15;
const tip2 = 0.20;

if (userBill >= 50 && userBill <= 300) {
    userTip = userBill * 0.15;
    userTotalBill = userBill + userTip;
    console.log(userTip, userTotalBill)
    displayUserBill = `The bill was ${userBill}, the tip was ${userTip}, and the total value is ${userTotalBill}`;
    console.log(displayUserBill);
}
else if (userBill < 50) {
    userTip = 0;
    userTotalBill = userBill + userTip;
    console.log(userTip, userTotalBill);
    displayUserBill = `The bill was ${userBill}, the tip was ${userTip}, and the total value is ${userTotalBill}`;
    console.log(displayUserBill);
}

else if (userBill > 300) {
    userTip = userBill * 0.25;
    userTotalBill = userBill + userTip;
    console.log(userTip, userTotalBill)
    displayUserBill = `The bill was ${userBill}, the tip was ${userTip}, and the total value is ${userTotalBill}`;
    console.log(displayUserBill);
}


const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

displayUserBill2 = `The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`;
console.log(displayUserBill2);

