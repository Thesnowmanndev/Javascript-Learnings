// Strict mode -- has to be at the top of the file
'use strict';

console.log(`--- Strict Mode ---`);
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; -- Strict mode catches this (Uncaught ReferenceError)

if (hasDriversLicense) {
    console.log(`I can drive`);
} else console.log(`I can't drive`);
