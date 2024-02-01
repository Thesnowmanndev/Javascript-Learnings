/* Functions
Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console. */
console.log(`\n --- Functions ---`);
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} people and its capital city is ${capitalCity}.`;
    return description;
}

const unitedStates = describeCountry(
    `United States`,
    `333.29 million`,
    `Washington DC`
);
console.log(unitedStates);

const canada = describeCountry(`Canada`, `38.93 million`, `Ottawa`);
console.log(canada);

const mexico = describeCountry(`Mexico`, `127.5 million`, `Mexico City`);
console.log(mexico);
