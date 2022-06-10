/**
 * 函数和原型结合（重写）
 */
let squareList = []
let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6]
function Square(width) {
    this.width = width//用this代表新的对象，就是obj
    // return obj;//不用写，它会帮你写
}
Square.prototype.getArea = function() {
    return this.width * this.width
}
Square.prototype.getLength = function() {
    return this.width * 4
}
for(let i=0;i<12;i++) {
    squareList[i] = new Square(widthList[i])
    console.log(squareList[i].constructor)
}
//每个函数都有prototype属性
//每个prototype都有constructor属性