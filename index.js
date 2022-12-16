function getGrade() {
    // This function prompt the user to enter the student's marks

    var marks = prompt("Enter the student's marks:");
    
    // Convert the marks to a number
    marks = Number(marks);
    
    // Check the marks and output the corresponding grade
    if (marks >= 79) {
      console.log("A");
    } else if (marks >= 60) {
      console.log("B");
    } else if (marks >= 49) {
      console.log("C");
    } else if (marks >= 40) {
      console.log("D");
    } else {
      console.log("E");
    }
  }
  
  // Test the function
  getGrade();
  