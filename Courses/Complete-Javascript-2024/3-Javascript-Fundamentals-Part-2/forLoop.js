/* Iteration: The for Loop
There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'. */
console.log(`\n --- The for loop ---`);

const maxVoters = 50;
for (let i = 1; i <= maxVoters; i++) {
    console.log(`Voter number ${i} is currently voting.`);
}
