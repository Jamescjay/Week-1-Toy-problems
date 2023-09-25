# Week-1-Toy-problems

## student Grade

## Challenge Goals

-Writing a function that prompts the user to input student marks
-Display the correct grade of the student

## Introduction

My functions prompts the user to input student marks beteween 0-100.
It then tests whether the student mark has met a specific value and return the corresponding grade

## Review of my function

I started by declaring a function called studentGrade
 
      ```js
      function studentGrade(){

      }
      ```
then set up a variable that prompt the user to input student marks inside my function

  ```js
   const input = prompt('Enter tudent marks between 0-100');
  const marks = parseFloat(input);
  ```
  then I run the if, else if and else conditions to return the correct student grade if the marks meet the condition

  ```js
  if (marks > 79 && marks <= 100) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 49 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <49) {
    return "D";
  } else {
    return "E";
  }
  ```

## speed detector

## challenge goals

-Write a program that takes the speed of a car as input
-Check the speed and print ok when the speed limit(70kph) is not exeeded
-Calculate demerit points for every 5km above the speed limit
-print license expired when the demerit points exceed 12

## review of my program

I stared by declaring a function which takes the car speed as an input

```js
function speedDetector(speed){

}
```
Then I declared the variables which stored the speed limit, demerit point and maximum demerit point
```js
const speedLimit = 70;
  const maxDemeritPoints = 12;
  const demeritPointperkm = 5;
```

Then I used the if, else statements to test if the speed exceeds the speed limit or not and print either Ok if the speed limit is not exceeded
or print License expired if the speed limit is exceeded and maximum demerit points is surpassed

```js
if (speed <= speedLimit){
  return 'Ok'
}
const overSpeed = (speed - speedLimit);
const demeritPoints = Math.floor(overSpeed/demeritPointperkm);

if (demeritPoints > maxDemeritPoints){
  return 'License Suspended';
}
else{
  return `Points: ${demeritPoints}`;
}
```

## net salary calculator

## challenge goals

-Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits
-Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

## review of my program

I started by declaring payeRates  variable which consists of an array of objects. 
Each object in the array represents a specific income tax rate bracket
I did the same for nhifRates variable
```js
const payeRates = [
      { min: 0, max: 24000, rate: 0.10 },
      { min: 24001, max: 32333, rate: 0.25 },
      { min: 32334, max: 500000, rate: 0.30 },
      { min: 500001, max: 800000, rate: 0.325 },
      { min: 800001, max: Infinity, rate: 0.35 }
    ];
```
then I declared variable for Constants for NSSF (Tier I and Tier II) as per the new NSSF act thus the New rates

```js
const nssfLimitTier1 = 6000;
    const nssfLimitTier2 = 18000;
    const nssfRate = 0.06; 
```
next I wrote functions that pickup the data stored in the above variables and used them to calculate the paye, nhif and nssf
e.g the function below was used to calculate the paye

```js
 function calculatePAYE(grossSalary) {
  let paye = 0;
  for (const bracket of payeRates) {
    if (grossSalary >= bracket.min && grossSalary <= bracket.max) {
      paye = (grossSalary) * bracket.rate;
      break; 
    }
  }
  return paye;
}
```

then I Prompt the user to iput their Basic salary and Benefits

```js
    const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
    const benefits = parseFloat(prompt("Enter Benefits:"));
```
 next I declared variables that stored the calculated values of the gross salary and net salary
 I also stored the obtain values of the paye, nssf and nhif in respective variables

```js
const grossSalary = basicSalary + benefits;
      const paye = calculatePAYE(grossSalary);
      const nhif = calculateNHIF(grossSalary);
      const nssf = calculateNSSF(grossSalary);
      const netSalary = grossSalary - (paye + nhif + nssf);

```

## conclusion
In this challenge I wrote all the programs that I was required to.
I ensure all my programs are running and are solving the questions that were asked

## Resources
I used the website for KRA to obtain the values for calculating the net salary.
Here is the link to the website that I used:  https://www.aren.co.ke/payroll/taxrates.htm