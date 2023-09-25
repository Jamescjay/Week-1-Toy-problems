//the function studentGrade prompts the user to input student marks between 0 and 100.

function studentGrade(){
  const input = prompt('Enter tudent marks between 0-100');
  const marks = parseFloat(input);

  //if, else if and else conditions have been used to enable the function to return the correct student name if the conditins are met.
  
if (marks > 79 && marks <= 100) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 49 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <49) {
    return "D";
  } else {
    return "E";
  }

}