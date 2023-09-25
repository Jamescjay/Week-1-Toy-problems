/** the function speed detector take speed as the input
* contains variables that store the value of the speed limit, demerit points and maximum demerit point
*/

function speedDetector(speed){
  const speedLimit = 70;
  const maxDemeritPoints = 12;
  const demeritPointperkm = 5;

// the if statement check whether the speed limit is exceeded or not and if the maximum demerit point is exeeded and print the assigned string
/**If the value of the speed variable is less than or equal to the speedLimit, it returns 'Ok'.

*If the speed exceeds the speed limit, the code calculates the number of demerit points. It first calculates how much the speed exceeds the limit by subtracting speedLimit from speed and stores it in the overSpeed variable.

*The code then calculates the number of demerit points by dividing overSpeed by demeritPointperkm and using Math.floor. This value is stored in the demeritPoints variable.

*If the calculated demeritPoints are greater than maxDemeritPoints, it returns 'License Suspended', indicating that if the driver accumulates that much demerit points, their license will be suspended.

*If the demeritPoints are within acceptable limits (not exceeding maxDemeritPoints), it returns a string that provides the number of demerit points incurred.
*/
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

}

