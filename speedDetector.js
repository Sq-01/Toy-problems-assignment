function checkSpeed(speed) {
    //Here, the speed limit is defined as a constant since it is a fixed value
  const speedLimit = 70;
    //This statement will check if the value entered is less than the speed limit and will output 'Ok' if it is
  if (speed < speedLimit) {
    console.log("Ok");
  } else {
    //This formula will calculate the total number of demerits to be awarded
    const demeritPoints = Math.floor((speed - speedLimit) / 5);
    //This function will print out the number of demerit points depending on the speed
    console.log(`Total demerit points: ${demeritPoints}`);
  }
}
    //Example:
checkSpeed(80); 
    // Total demerit points: 2
checkSpeed(60); 
    // Ok
