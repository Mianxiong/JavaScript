function Rect(width,height){
    this.width = width;
    this.height = height;
}
Rect.prototype.getArea = function() {
    return this.width * this.height
}
Rect.prototype.getLength = function() {
    return (this.width + this.height) * 2
}
let r1 = new Rect(4,5)
console.log(r1)
console.log(r1.getLength())
console.log(r1.getArea())