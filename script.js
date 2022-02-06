const getSleepHours = day => {
  
// Prints the number of hours slept at night.
    switch(day) {
        case "monday":
            return 8
            break;
        case "tuesday":
            return 7
            break;
        case "wednesday":
            return 6
            break;
        case "thursday":
            return 7
            break;
        case "friday":
            return 8
            break;
        case "saturday":
            return 8
            break;
        case "sunday":
            return 8
            break;
        default:
            return "Error!"
    }
};
  
// Prints the # hours assigned to specific day
console.log("You've had " + getSleepHours("tuesday") + " hours of sleep last night.");
  
// Return the sum using an implicit return, i.e no return keyword, or curly braces
const getActualSleepHours = () =>
    getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
  
// Prints the # hours assigned to specific day
// console.log("You've had " + getSleepHours("wednesday") + " hours of sleep last night.");
// Prints the actual sleep hours for the week
console.log("You've had " + getActualSleepHours() + " hours of sleep this week.");
  
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};
  
// Prints the actual sleep hours for the week
// console.log("You've had " + getActualSleepHours() + " hours of sleep this week.");
// Prints the ideal sleep hours for the week
console.log("Your ideal sleep hours for the week: " + getIdealSleepHours() + " hours.");
  
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
        console.log("You've got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You've got " + (actualSleepHours - idealSleepHours) + " more hour(s) of sleep than needed.");
    } else if (actualSleepHours < idealSleepHours) {
        console.log("You got " + (idealSleepHours - actualSleepHours) + " hour(s) less sleep than you needed this week. Get some rest.");
    } else {
          console.log("Error! Something went wrong. Please, check your code.");  
    }
};
  
calculateSleepDebt ();
