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
   

    if (speed <= speedLimit) {
        console.log("Ok");
        window.alert("OK");
        
    } else {
        const speedAboveLimit = speed - speedLimit;
        const demeritPoints = (speedAboveLimit / demeritPointsPerKm); //calculate demerit points by division
         console.log(` points : ${demeritPoints} `);
        window.alert(`points : ${demeritPoints}`)

        if (demeritPoints >= 12) {
            console.log("License suspended"); //User not permitted to be driving anymore
            window.alert("License suspended"); //User not permitted to be driving anymore

        }
        return demeritPoints;
    }
}
calculateDemeritPoints(speed);
