const shape = require('./shape');
const fs = require('fs');

function writeToFile(content) {
    // create file for svg
    fs.writeFile('./logo.svg', content, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg'));
}

function generateLogo(response){
    // gets shape obj
    const genShape = shape.getShape(response);

    writeToFile(genShape.render());
}

// enables function on index.js
module.exports = {
    generateLogo : generateLogo
};