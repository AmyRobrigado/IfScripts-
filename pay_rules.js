// Under 40 hours
var payRate = 12.50;
var hoursWorked = 20;
var grossPay;


if (hoursWorked <= 40) {
    grossPay = payRate * hoursWorked ; 
}

console.log(grossPay);

// Exactly 40 hours
var payRate = 25.00;
var hoursWorked = 40;
var grossPay;


if (hoursWorked == 40) {
    grossPay = payRate * hoursWorked; 
}

console.log(grossPay);

// Over 40 hours 
var payRate = 17.30;
var hoursWorked = 45;
var overtimeHours = 1.5;
var grossPay;


if (hoursWorked >= 40) {
    grossPay = payRate * hoursWorked * overtimeHours; 
}

console.log(grossPay);