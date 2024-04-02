function calculateNetSalary(basicSalary, benefits) {
    const taxRates = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 40000, rate: 0.25 },
        { min: 40001, max: 80000, rate: 0.3 },
        { min: 80001, max: Infinity, rate: 0.35 }
    ];

    const nhifRates = [
        { min: 0, max: 5999, amount: 150 },
        { min: 6000, max: 7999, amount: 300 },
        { min: 8000, max: 11999, amount: 400 },
        { min: 12000, max: 14999, amount: 500 },
        { min: 15000, max: 19999, amount: 600 },
        { min: 20000, max: 24999, amount: 750 },
        { min: 25000, max: 29999, amount: 850 },
        { min: 30000, max: 34999, amount: 900 },
        { min: 35000, max: 39999, amount: 950 },
        { min: 40000, max: 44999, amount: 1000 },
        { min: 45000, max: 49999, amount: 1100 },
        { min: 50000, max: 59999, amount: 1200 },
        { min: 60000, max: 69999, amount: 1300 },
        { min: 70000, max: 79999, amount: 1400 },
        { min: 80000, max: 89999, amount: 1500 },
        { min: 90000, max: 99999, amount: 1600 },
        { min: 100000, max: Infinity, amount: 1700 }
    ];

    const nssfRate = 0.06;

    const grossSalary = basicSalary + benefits;

    let tax = 0;
    for (const rate of taxRates) {
        if (grossSalary > rate.min) {
            const taxableAmount = Math.min(grossSalary, rate.max) - rate.min;
            tax += taxableAmount * rate.rate;
        } else {
            break;
        }
    }

    let nhifDeductions = 0;
    for (const rate of nhifRates) {
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            nhifDeductions = rate.amount;
            break;
        }
    }

    const nssfDeductions = nssfRate * basicSalary;

    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
    alert("Invalid input! Basic salary and benefits must be positive numbers.");
} else {
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    const message = `Gross Salary: ${salaryDetails.grossSalary}\n`
              + `Tax (PAYE): ${salaryDetails.tax}\n`
              + `NHIF Deductions: ${salaryDetails.nhifDeductions}\n`
              + `NSSF Deductions: ${salaryDetails.nssfDeductions}\n`
              + `Net Salary: ${salaryDetails.netSalary}`;

alert(message);


}
