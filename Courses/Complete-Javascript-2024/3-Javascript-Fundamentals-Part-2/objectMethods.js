/* Object Methods
Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

Call the describe method.

Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property. */
console.log(`\n --- Object Methods ---`);

const myCountry2 = {
    country: `United States`,
    capital: `Washington D.C`,
    language: `English`,
    nativeSpeakers: `78%`,
    population: 8100000000,
    neighbours: [`Canada`, `Mexico`],

    describe: function () {
        // How to create a method inside an object
        console.log(
            `${this.country} has ${populationShortened} people, ${this.nativeSpeakers} of the population speak ${this.language}, ${this.neighbours.length} neighbouring countries, and it's capital is ${this.capital}.`
        );
    },

    checkIsland: function () {
        let isIsland = true;
        if (neighbours.length > 0) {
            isIsland = false;
        }
        return isIsland;
    },
};

myCountry2.describe();
console.log(myCountry2.checkIsland());
