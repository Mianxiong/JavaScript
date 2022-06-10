let squareList = []
let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6]
for (let i = 0; i < 12; i++) {
    squareList[i] = {
        width: widthList[i],
        getArea() {
            return this.width * this.width
        },
        getLength() {
            return this.width * 4
        }
    }

}
//浪费了太多内存