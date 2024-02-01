/* Basic Array Operations (Methods)
Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'. */
console.log(`\n --- Basic Array Operations (Methods) ---`);

const neighbours = [`Canada`, `Mexico`];
const utopiaName = `Utopia`;

neighbours.push(utopiaName); // Add to end of an array
console.log(neighbours);

neighbours.pop(); // Removes variable at the end of an array
console.log(neighbours);

if (!neighbours.includes(`Germany`)) {
    console.log('Probably not a central european country :D');
}

neighbours[neighbours.indexOf(`Mexico`)] = `Sweden`; // Replace a variable in an Array
console.log(neighbours);

neighbours.shift(); // Removes variable at the beginning of an array
console.log(neighbours);

neighbours.unshift(`Canada`); // Add to the beginning of an array
neighbours[neighbours.indexOf(`Sweden`)] = `Mexico`;
console.log(neighbours);
