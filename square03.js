let squareList = []
let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6]
//封装，函数它也是一个对象，所以如果我们把原型放到函数上，
function createSquare(width) {
    //此函数叫做构造函数,因为这个函数它能够构造出一个对象出来
    let obj = Object.create(squarePrototype)
    //以squarePrototype为原型创建空对象
    obj.width = width
    return obj
}
//原型
let squarePrototype = {
    getArea(){
        return this.width * this.width
    },
    getLength(){
        return this.width * 4
    }
}
for(let i=0;i<12;i++){
    squareList[i] = createSquare(widthList[i])
}
//squarePrototype原型和createSquare函数还是分散的，能不能组合在一起