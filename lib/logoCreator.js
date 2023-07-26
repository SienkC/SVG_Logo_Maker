const shape = require('./shape');
const fs = require('fs');

function generateLogo(response){
    // gets shape obj
    const genShape = shape.getShape(response);

    // create file for svg
    fs.writeFile('./logo.svg', genShape.render(), (err) =>
    err ? console.error(err) : console.log('Your logo has been created! Please look for the file titled "logo.svg"!'));
}

// enables function on index.js
module.exports = {
    generateLogo : generateLogo
};