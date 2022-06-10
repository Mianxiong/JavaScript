let squareList = []
let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6]
let squarePrototype = {
    getArea() {
        return this.width * this.width
    },
    getLength() {
        return this.width * 4
    }
}
for(let i=0;i<12;i++) {
    squareList[i] = Object.create(squarePrototype)//创建一个对象，对象的原型是squarePrototype
    squareList[i].width = widthList[i]
}
//创建square的代码太分散了