class Shape {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }

    nap() {
        console.log('Zzzzzzzzz');
    }
}

function generateLogo({text, textColor, shape, shapeColor}){
    
}

// enables function on index.js
module.exports = {
    generateLogo : generateLogo
};
