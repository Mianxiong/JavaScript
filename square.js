class Square{
    constructor(width){
      this.width = width
    } 
    getArea(){ 
      return this.width * this.width 
    }
    // getLength(){
    //   return this.width * 4
    // }
    getLength:function(){
        return this.width*4
    }
    get area2(){ // 只读属性
      return this.width * this.width
    }
  }
  