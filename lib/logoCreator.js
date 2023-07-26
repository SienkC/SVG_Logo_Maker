const shape = require('./shape');
const fs = require('fs');

function generateLogo(response){
    // gets shape obj
    const genShape = shape.getShape(response);

    // test
    console.log(genShape);

    // create file for svg
    fs.writeFile('./logo.svg', genShape.svg, (err) =>
    err ? console.error(err) : console.log('Your logo has been created! Please look for the file titled "logo.svg"!'));
}

// enables function on index.js
module.exports = {
    generateLogo : generateLogo
};
