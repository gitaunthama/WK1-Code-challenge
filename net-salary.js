const prompt = require("prompt-sync")({ sigint: true });
let salary= prompt("Enter your basic salary: ");
let benefits = prompt("Enter your benefits: ");
function calculateNetSalary(basicSalary, benefits) {
    const taxRates = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 40000, rate: 0.25 },
        { min: 40001, max: 80000, rate: 0.3 },
        { min: 80001, max: Infinity, rate: 0.35 }
    ];

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate tax (PAYE)
    let tax = 0;
    for (const rate of taxRates) {
        if (grossSalary > rate.min) {
            const taxableAmount = Math.min(grossSalary, rate.max) - rate.min;
            tax += taxableAmount * rate.rate;
        } else {
            break;
        }
    }

    // Calculate NHIF deductions (assuming a fixed rate)
    const nhifDeductions = 0.06 * basicSalary;

    // Calculate NSSF deductions (assuming a fixed rate)
    const nssfDeductions = 0.05 * basicSalary;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

// Example usage:
const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
    alert("Invalid input! Basic salary and benefits must be positive numbers.");
} else {
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    console.log("Gross Salary:", salaryDetails.grossSalary);
    console.log("Tax (PAYE):", salaryDetails.tax);
    console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
    console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
    console.log("Net Salary:", salaryDetails.netSalary);}