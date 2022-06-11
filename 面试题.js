let arr = [
    {名称:'动物',id:1,parent:null},
    {名称:'狗',id:2,parent:1},
    {名称:'猫',id:3,parent:1}
]
console.log(arr)
let arrNew = arr.reduce((result,item)=>{
    if(item.parent === null) {
        result.id = item.id
        result['名称'] = item['名称']
    }
    else {
        result.children.push(item)
        delete item.parent
        item.children = null
    }
    return result
},{id:null,children:[]})
console.log(arrNew)