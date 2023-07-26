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
});