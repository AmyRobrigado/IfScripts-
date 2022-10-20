// Gross Pay 
var payRate = 25.00;
var hoursWorked = 40;
var maritalStatus1 = "Joint";
var maritalStatus2 = "Single";


if (hoursWorked == 40) {
    grossPay = (payRate * hoursWorked);
}

console.log(grossPay);

// Annual Income 
var annualIncome = (grossPay * 52);

console.log(annualIncome);
// Joint Income 
if (maritalStatus1);
if (annualIncome <= 12000) 
    taxrate = 0;
if (annualIncome > 12000 && annualIncome < 25000)
    taxrate = 0.1;
if (annualIncome > 25000 && annualIncome < 75000)
    taxrate = 0.15;
if (annualIncome < 75000)
    taxrate = 0.20;

// Single Income 
if (maritalStatus2);
if (annualIncome <= 12000) 
    taxrate = 0.05;
if (annualIncome > 12000 && annualIncome < 25000)
    taxrate = 0.1;
if (annualIncome > 25000 && annualIncome < 75000)
    taxrate = 0.15;
if (annualIncome < 75000)
    taxrate = 0.20;

    

    var taxWithheld = (grossPay * taxrate);
    var netPay = (grossPay - taxWithheld)

console.log(taxWithheld);
console.log(netPay);
console.log("You worked " + hoursWorked + " hours this period. ");
console.log("Because you earn $" + payRate + " per hour, your gross pay is $" + grossPay);
console.log("Your filing status is " + maritalStatus2);
console.log("Your tax withholdings this period is $" + taxWithheld);
console.log("Your net pay is $" + netPay);
    

