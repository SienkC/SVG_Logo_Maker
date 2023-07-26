class Shape {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
}

class Circle extends Shape {
    constructor(color, textColor, text) {
        super(color, textColor, text);
        this.svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Triangle extends Shape {
    constructor(color, textColor, text) {
        super(color, textColor, text);
        this.svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 5 270, 170 30, 170" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shape {
    constructor(color, textColor, text) {
        super(color, textColor, text);
        this.svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="75" y="30" width="150" height="150" fill="${this.color}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

// returns a new instance of whatever shape is 
function getShape ({text, textColor, shape, shapeColor}) {
    switch(shape) {
        case "Square":
            return new Square(shapeColor, textColor, text);
        case "Circle":
            return new Circle(shapeColor, textColor, text);
        case "Triangle":
            return new Triangle(shapeColor, textColor, text);
        default:
            // this should be impossible since the only options from prompts are above
            throw new Error(
                'Shape not recognized.'
            );
    }
}

// enables function on logoCreator.js
module.exports = {
    getShape : getShape,
    Circle : Circle,
    Triangle : Triangle,
    Square : Square
};