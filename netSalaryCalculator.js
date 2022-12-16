function calculateNetSalary(basicSalary, benefits) {
    // This function calculates the payee tax
    const payeeTax = basicSalary * 0.15;
  
    // Calculating NHIF deductions
    let nhifDeductions;
    if (basicSalary <= 5999) {
      nhifDeductions = 150;
    } else if (basicSalary >= 6000 && basicSalary <= 7999) {
      nhifDeductions = 300;
    } else if (basicSalary >= 8000 && basicSalary <= 11999) {
      nhifDeductions = 400;
    } else if (basicSalary >= 12000 && basicSalary <= 14999) {
      nhifDeductions = 500;
    } else if (basicSalary >= 15000 && basicSalary <= 19999) {
      nhifDeductions = 600;
    } else if (basicSalary >= 20000 && basicSalary <= 24999) {
      nhifDeductions = 750;
    } else if (basicSalary >= 25000 && basicSalary <= 29999) {
      nhifDeductions = 850;
    } else if (basicSalary >= 30000 && basicSalary <= 34999) {
      nhifDeductions = 900;
    } else if (basicSalary >= 35000 && basicSalary <= 39999) {
      nhifDeductions = 950;
    } else if (basicSalary >= 40000 && basicSalary <= 44999) {
      nhifDeductions = 1000;
    } else if (basicSalary >= 45000 && basicSalary <= 49999) {
      nhifDeductions = 1100;
    } else if (basicSalary >= 50000 && basicSalary <= 59999) {
      nhifDeductions = 1200;
    } else if (basicSalary >= 60000 && basicSalary <= 69999) {
      nhifDeductions = 1300;
    } else if (basicSalary >= 70000 && basicSalary <= 79999) {
      nhifDeductions = 1400;
    } else if (basicSalary >= 80000 && basicSalary <= 89999) {
      nhifDeductions = 1500;
    } else if (basicSalary >= 90000 && basicSalary <= 99999) {
      nhifDeductions = 1600;
    } else if (basicSalary >= 100000) {
      nhifDeductions = 1700;
    }
  
    // Calculating NSSF deductions
    const nssfDeductions = basicSalary * 0.06;
  
    // Calculating gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculating net salary
    const netSalary = grossSalary - payeeTax - nhifDeductions - nssfDeductions;
  
    return{
        payeeTax: payeeTax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        grossSalary: grossSalary,
  }
    }