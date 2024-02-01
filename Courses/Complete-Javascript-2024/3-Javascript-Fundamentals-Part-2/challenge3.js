// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!
// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:
// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
// 👋 OPTIONAL: You can watch my solution in video format in the next lecture
// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
console.log(`\n --- Challenge #3 ---`);
/* Write your code below. Good luck! 🙂 */

const mark = {
    firstName: `Mark`,
    lastName: `Miller`,
    fullName: `Mark Miller`,
    height: 1.69,
    mass: 78,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

const john = {
    firstName: `John`,
    lastName: `Smith`,
    fullName: `John Smith`,
    height: 1.95,
    mass: 92,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

const marksBMI = mark.calcBMI();
const johnsBMI = john.calcBMI();

if (marksBMI > johnsBMI) {
    console.log(
        `${mark.fullName}'s BMI (${marksBMI.toFixed(1)}) is higher than ${
            john.fullName
        }'s (${johnsBMI.toFixed(1)})!`
    );
} else {
    console.log(
        `${john.fullName}'s BMI (${johnsBMI.toFixed(1)}) is higher than ${
            mark.fullName
        }'s (${marksBMI.toFixed(1)})!`
    );
}
