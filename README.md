# Toy-problems-assignment
# Toy problem 1: Student grade generator.
- The function getGrade() has been user here to prompt the user to input the students grade.
- The variable (var marks) is meant to convert the marks entered into a number.
- I then used a simple if- else statement to check for the student grades in terms of range, before the program outputs the grade.
- And finally, getGrade() can be used to test whether the function works properly.

# Toy problem 2: Speed detector.
- In this program I first defined the speedLimit as a constant (70).
- I then used an if-else statement to test the speed limit, if it is less it outputs 'Ok', and if it is above the speed limit demerit points are awarded.
- 'Math.floor((speed - speedLimit) / 5)' has been used to calculate the number of demerit points.
- The console.log function is used here  to print out the total number of demerits.

# Toy problem 3: Net salary calculator.
- The function calculateNetSalary utilizes the basic salary for a payee and the benefits. Then the payeeTax is calculated using the basic salary multiplied by the 15%(0.15) tax rate.
- A simple if-else statement is utilized here to calculate the NHIF deductions using the basic salaries ranging from 5999 to 100000, with their respective deductuble amounts.
- To calculatre the NSSF deductions I multiplied the basicSalary with the fixed NSSF tax rate (6%).
- For the gross salary I added the basicSalary to the benefits in order to output the payee grossSalary.
- And finally, to calculate the net salary for the payees, I subtracted the grossSalary, payeeTax, nhifDeductions and nssfDeductions.
