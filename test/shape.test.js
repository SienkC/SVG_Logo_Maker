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
    // // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
    // it('should throw an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores', () => {
    //   // Arrange
    //   // const str = 'aB12####?';
    //   // Act - invoke the method /w Args
    //   // const result = new BlogPost(str);
    //   // the above DOESNOT work
    //     const cb = () => new BlogPost('aB12####?');
    
    //     const err = new Error('Author must only contain letters, numbers, dashes, and underscores.');
    //     //Assert
    //     expect(cb).toThrow(err);
    // });
});