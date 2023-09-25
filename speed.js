//  calculating and displaying demerit points of diffrent speeds.
function demeritPoints(speed) {
    // speed limit and km per Hour.
    let speedLimit = 70;
    let kmPerPoint = 5;

    // speed limit
    if (speed <= speedLimit) {
        console.log("OK");
    } else {
       // demerit points based on speedlimit.
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        
        //suspension demerit points.
        if (demeritPoints >= 12) {
            console.log("License suspended"); 
            // calculating Demerit points.
        } else {
            console.log(`Points: ${demeritPoints}`); 
        }
    }
}