// Function to prompt the user for input 
function promptUserForInput(message) {
    return parseFloat(prompt(message));
}

// Prompt the user for the car speed
const speed = promptUserForInput("Enter the car speed:");

// Function to calculate demerit points based on the speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70; //The set speed limit
    const demeritPointsPerKm = 5;
    const pointsAboveLimitPerKm = 1;

    if (speed <= speedLimit) {
        console.log("Ok");
        return 0; // No demerit points
    } else {
        const speedAboveLimit = speed - speedLimit;
        const demeritPoints = Math.floor(speedAboveLimit / demeritPointsPerKm); //calculate demerit points
        console.log(demeritPoints + " points");

        if (demeritPoints >= 12) {
            console.log("License suspended"); //User not permotted to be driving anymore
        }
        return demeritPoints;
    }
}


calculateDemeritPoints(speed);
