/**
 * 把数字变成日期
 */
let arr = [0,1,2,2,3,3,3,4,4,4,4,6]
let arr2 = arr.map(item=>{
    if(item === 0) {
        return '周日'
    } else if(item === 1) {
        return '周一'
    } else if(item === 2) {
        return '周二'
    } else if(item === 3) {
        return '周三'
    } else if(item === 4) {
        return '周四'
    } else if(item === 5) {
        return '周五'
    } else if(item === 6) {
        return '周六'
    } else {
        return '周日'
    }
})
console.log(arr2) // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']