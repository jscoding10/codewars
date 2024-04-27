// My Solution
var freewayGame = function(distKmToExit, mySpeedKmPH, otherCars) {
    let myTimeToExit = distKmToExit / mySpeedKmPH;
    return otherCars.reduce((a, [lead, speed]) => a
        + (lead < 0 && myTimeToExit * speed < distKmToExit + lead / 60 * speed)
        - (lead > 0 && myTimeToExit * speed > distKmToExit + lead / 60 * speed), 0);
}