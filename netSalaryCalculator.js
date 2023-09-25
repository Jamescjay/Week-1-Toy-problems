/**  the payeRates is a variable which consists of an array of objects. 
 * Each object in the array represents a specific income tax rate bracket. 
 * These rate brackets are used to calculate PAYE tax
 * min: This property represents the minimum taxable income amount within the bracket.
 * max: This property represents the maximum taxable income amount within the bracket
 */
    const payeRates = [
      { min: 0, max: 24000, rate: 0.10 },
      { min: 24001, max: 32333, rate: 0.25 },
      { min: 32334, max: 500000, rate: 0.30 },
      { min: 500001, max: 800000, rate: 0.325 },
      { min: 800001, max: Infinity, rate: 0.35 }
    ];

/**  the nhifRates is a variable which consists of an array of objects. 
 * Each object in the array represents a specific income deduction bracket. 
 * These deduction brackets are used to calculate NHIF deductions.
 */

    const nhifRates = [
      { min: 0, max: 5999, deduction: 150 },
      { min: 6000, max: 7999, deduction: 300 },
      { min: 8000, max: 11999, deduction: 400 },
      { min: 12000, max: 14999, deduction: 500 },
      { min: 15000, max: 19999, deduction: 600 },
      { min: 20000, max: 24999, deduction: 750 },
      { min: 25000, max: 29999, deduction: 850 },
      { min: 30000, max: 34999, deduction: 900 },
      { min: 35000, max: 39999, deduction: 950 },
      { min: 40000, max: 44999, deduction: 1000 },
      { min: 45000, max: 49999, deduction: 1100 },
      { min: 50000, max: 59999, deduction: 1200 },
      { min: 60000, max: 69999, deduction: 1300 },
      { min: 70000, max: 79999, deduction: 1400 },
      { min: 80000, max: 89999, deduction: 1500 },
      { min: 90000, max: 99999, deduction: 1600 },
      { min: 90000, max: Infinity, deduction: 1700 } //Infinity represents the income over 99999
    ];


// Constants for NSSF (Tier I and Tier II) as per the new NSSF act thus the New rates
    const nssfLimitTier1 = 6000;
    const nssfLimitTier2 = 18000;
    const nssfRate = 0.06; 

/**  Function to calculate PAYE based on an individual's income.
 * It takes the values from the payeRates2023 variable and calculate the paye.
 * This is archieved by multiplying the grossSakary by the corresponding percentage rate.
 * The function returns the calculated value of paye.
 */
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

/**Function to calculate NHIF Deductions
 * it takes the values from nhifrates2023 variable and returns the value of nhif by selecting the corresponding bracket.deduction based on the if condition.
 * when the apropriate bracket is found the break command stop checking and return the nhif value from the corresponding bracket.deduction.
 */
function calculateNHIF(grossSalary) {
  let nhif = 0;
  for (const bracket of nhifRates) {
    if (grossSalary >= bracket.min && grossSalary <= bracket.max) {
      nhif = bracket.deduction;
      break; // this stop checking further brackets once the appropriate one is located
    }
  }
  return nhif;
}



/**Function to calculate NSSF Deductions
 * this is done by testing the variables nssLimitTier1 and nssLimitTier2 withe the if, else if and else statements.
 * 
 * 
 */
function calculateNSSF(grossSalary) {
  let nssf = 0;
  if (grossSalary <= nssfLimitTier1) {
    nssf = nssfLimitTier1 * nssfRate;
  } else if (grossSalary <= nssfLimitTier2) {
    nssf = nssfLimitTier2 * nssfRate 
  } else {
    nssf = (grossSalary- nssfLimitTier2) * nssfRate;
  }
  return nssf;
}

// Prompt the user to iput their Basic salary and Benefits
    const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
    const benefits = parseFloat(prompt("Enter Benefits:"));

//here I Calculated the values of grossSalary, paye, nhif and nssf and store them in the respective variables.
// then I calculated the netSalary by adding the paye, nhif and nssf and subtracting the result from the grossSalary.
      const grossSalary = basicSalary + benefits;
      const paye = calculatePAYE(grossSalary);
      const nhif = calculateNHIF(grossSalary);
      const nssf = calculateNSSF(grossSalary);
      const netSalary = grossSalary - (paye + nhif + nssf);

// Display the results of Gross Salary, PAYE, NHIF Deductions, NSSF Deductions and Net Salary.
// I applied the use of string interpolation to incorporate the variables grossSalary, paye, nhif, nssf and netSalary.
      console.log(`Gross Salary: ${grossSalary}`);
      console.log(`PAYE (Tax): ${paye}`);
      console.log(`NHIF Deductions: ${nhif}`);
      console.log(`NSSF Deductions: ${nssf}`);
      console.log(`Net Salary: ${netSalary}`);