const { test } = require('node:test');
const shape = require('../lib/shape');

describe('Shape', () => {
    it('should throw an error when the shape is not one of the provided options', () => {
        const testObj = {text: 'test', textColor: 'test', shape: 'not shape', shapeColor: 'test'};
        const cb = () => shape.getShape(testObj);
        const err = new Error('Shape not recognized.');
        expect(cb).toThrow(err);
    });

    it('should return a Circle when Circle is entered', () => {
        const testObj = {text: 'test', textColor: 'test', shape: 'Circle', shapeColor: 'test'};
        const circle = shape.getShape(testObj);
        expect(circle).toBeInstanceOf(shape.Circle);
    });

    it('should return a Triangle when Triangle is entered', () => {
        const testObj = {text: 'test', textColor: 'test', shape: 'Triangle', shapeColor: 'test'};
        const triangle = shape.getShape(testObj);
        expect(triangle).toBeInstanceOf(shape.Triangle);
    });

    it('should return a Square when Square is entered', () => {
        const testObj = {text: 'test', textColor: 'test', shape: 'Square', shapeColor: 'test'};
        const square = shape.getShape(testObj);
        expect(square).toBeInstanceOf(shape.Square);
    });

    it('should return the correct text when it is added to Square', () => {
        const testObj = {text: `SVG`, textColor: 'test', shape: 'Square', shapeColor: 'test'};
        const text = shape.getShape(testObj).text;
        expect(text).toBe(`SVG`);
    });

    it('should return the correct text when it is added to Circle', () => {
        const testObj = {text: `SVG`, textColor: 'test', shape: 'Circle', shapeColor: 'test'};
        const text = shape.getShape(testObj).text;
        expect(text).toBe(`SVG`);
    });

    it('should return the correct text when it is added to Triangle', () => {
        const testObj = {text: `SVG`, textColor: 'test', shape: 'Triangle', shapeColor: 'test'};
        const text = shape.getShape(testObj).text;
        expect(text).toBe(`SVG`);
    });

    it('should return the correct shape color when it is added to Square', () => {
        const testObj = {text: `SVG`, textColor: 'test', shape: 'Square', shapeColor: 'black'};
        const color = shape.getShape(testObj).color;
        expect(color).toBe(`black`);
    });

    it('should return the correct shape color when it is added to Circle', () => {
        const testObj = {text: `SVG`, textColor: 'test', shape: 'Circle', shapeColor: 'black'};
        const color = shape.getShape(testObj).color;
        expect(color).toBe(`black`);
    });

    it('should return the correct shape color when it is added to Triangle', () => {
        const testObj = {text: `SVG`, textColor: 'test', shape: 'Triangle', shapeColor: 'black'};
        const color = shape.getShape(testObj).color;
        expect(color).toBe(`black`);
    });

    it('should return the correct text color when it is added to Square', () => {
        const testObj = {text: `SVG`, textColor: 'orange', shape: 'Square', shapeColor: 'black'};
        const textColor = shape.getShape(testObj).textColor;
        expect(textColor).toBe(`orange`);
    });

    it('should return the correct text color when it is added to Circle', () => {
        const testObj = {text: `SVG`, textColor: 'orange', shape: 'Circle', shapeColor: 'black'};
        const textColor = shape.getShape(testObj).textColor;
        expect(textColor).toBe(`orange`);
    });

    it('should return the correct text color when it is added to Triangle', () => {
        const testObj = {text: `SVG`, textColor: 'orange', shape: 'Triangle', shapeColor: 'black'};
        const textColor = shape.getShape(testObj).textColor;
        expect(textColor).toBe(`orange`);
    });

    it('should return the correct SVG string when parameters are added to Square', () => {
        const testObj = {text: `SVG`, textColor: 'orange', shape: 'Square', shapeColor: 'black'};
        const svgString = shape.getShape(testObj).svg;
        expect(svgString).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="75" y="30" width="150" height="150" fill="black" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">SVG</text></svg>`);
    });

    it('should return the correct SVG string when parameters are added to Circle', () => {
        const testObj = {text: `SVG`, textColor: 'orange', shape: 'Circle', shapeColor: 'black'};
        const svgString = shape.getShape(testObj).svg;
        expect(svgString).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">SVG</text></svg>`);
    });

    it('should return the correct SVG string when parameters are added to Triangle', () => {
        const testObj = {text: `SVG`, textColor: 'orange', shape: 'Triangle', shapeColor: 'black'};
        const svgString = shape.getShape(testObj).svg;
        expect(svgString).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 5 270, 170 30, 170" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">SVG</text></svg>`);
    });
});