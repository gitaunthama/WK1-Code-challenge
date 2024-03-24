//Prompt the user to input the mark to be graded
function promptUserForInput(message) {
    return parseFloat(prompt(message));
}
const mark = promptUserForInput("Enter the student's mark:");

//Grading system : the mark against the grade
if (mark > 79) {
    console.log("A");
} else if (mark >= 60 && mark <= 79) {
    console.log("B");
} else if (mark >= 49 && mark <= 59) {
    console.log("C");
} else if (mark >= 40 && mark < 49) {
    console.log("D");
} else { console.log("E"); }
