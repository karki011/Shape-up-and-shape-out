


var Shape = (function() {
  function Shape(width, height) {
  this.width = width;
  this.height = height;
  this.div = document.createElement('div');
  this.div.className = "shape";
  this.insert();
}

Shape.prototype.insert = function() {
  var drawingPlace = document.getElementById('drawingBox');
  var drawingHeight = drawingPlace.offsetHeight - this.height;
  var drawingWidth = drawingPlace.offsetWidth - this.width;
  var sizeHeight = Math.floor(Math.random() * drawingHeight) + 'px';
  var sizeWidth = Math.floor(Math.random() * drawingWidth) + 'px';
  this.div.style.height = this.height + 'px';
  this.div.style.width = this.width + 'px';
  this.div.style.left = sizeHeight;
  this.div.style.top = sizeWidth;
  drawingPlace.appendChild(this.div);
};
return Shape;
}());


var Square = (function (size) {
  shapeholder(Square, size);
    function Square(height) {
    size.call(this, height, height);
        this.div.className = 'square';
    }
    return Square;
}(Shape));


var rectangle = (function (recSize) {
    function rectangle(width, height) {
        recSize.call(this, width, height);
        this.div.className = 'rectangle';
        shapeholder(Rectangle, recSize);
    }
    return rectangle;
}(Shape));

var Circle = (function (circledraw) {
    shapeholder(Circle, circledraw);
    function Circle(radius) {
        circledraw.call(this, 2 * radius, 2 * radius);
        this.div.className = 'circle';
    }
    return Circle;
}(Shape));

var triangle = (function (mycircle) {
    shapeholder(triangle, mycircle);
    function triangle(height) {
        mycircle.call(this, height, height);
        this.div.className = 'triangle';
        this.div.style.borderLeft = height + 'px solid transparent';
        this.div.style.borderRight = height + 'px solid transparent';
        this.div.style.borderBottom = height + 'px solid yellow';
    }
    return triangle;
}(Shape));

document.getElementById('submitRec').addEventListener('click', function () {
  var recHeight = document.getElementById('recH');
  var recWidth = document.getElementById('recW');
  new rectangle(+recWidth.value, +recHeight.value).insert();
});
document.getElementById('submitSquare').addEventListener('click', function () {
    var sizeBox = document.getElementById('drawSquare');
    new Square(+sizeBox.value).insert();
});

document.getElementById('drawCircle').addEventListener('click', function () {
    var circleRadius = document.getElementById('radius');
    new Circle(+circleRadius.value).insert();
});

document.getElementById('drawTriangle').addEventListener('click', function () {
    var angle = document.getElementById('tangle');
    new triangle(+angle.value).insert();
});
