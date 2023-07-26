const shape = require('./shape');

function generateLogo(response){
    // gets shape obj
    const genShape = shape.getShape(response);

    // test
    console.log(genShape);
}

// enables function on index.js
module.exports = {
    generateLogo : generateLogo
};
