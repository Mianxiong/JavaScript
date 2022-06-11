function Circle(radius) {
    this.radius = radius
}
Circle.prototype.getLength = function() {
    return this.radius * 2 * Math.PI
}
Circle.prototype.getArea = function() {
    return Math.pow(this.radius,2) * Math.PI
}
let c1 = new Circle(10)
console.log(c1.radius)
console.log(c1.getLength())
console.log(c1.getArea())