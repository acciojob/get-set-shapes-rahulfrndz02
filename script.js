//complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width;
  }
}

// Example usage:

const rectangle = new Rectangle(5, 8);
console.log('Rectangle Width:', rectangle.width); // Output: 5
console.log('Rectangle Height:', rectangle.height); // Output: 8
console.log('Rectangle Area:', rectangle.getArea()); // Output: 40

const square = new Square(6);
console.log('Square Side:', square.width); // Output: 6
console.log('Square Area:', square.getArea()); // Output: 36
console.log('Square Perimeter:', square.getPerimeter()); // Output: 24

window.Rectangle = Rectangle;
window.Square = Square;