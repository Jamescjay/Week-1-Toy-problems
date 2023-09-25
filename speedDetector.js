/** the function speed detector take speed as the input
* contains variables that store the value of the speed limit, demerit points and maximum demerit point
*/

function speedDetector(speed){
  const speedLimit = 70;
  const maxDemeritPoints = 12;
  const demeritPointperkm = 5;

// the if statement check whether the speed limit is exceeded or not and if the maximum demerit point is exeeded and print the assigned string
// else returns the value of demerit points.
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

