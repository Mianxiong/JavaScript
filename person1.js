class Person{
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    sayHi() {
        console.log('你好，我叫'+this.name)   
    }
}
let person = new Person('mx', 18)
console.log(person.name === 'mx') // true
console.log(person.age === 18) // true
person.sayHi() // 打印出「你好，我叫 mx」

let person2 = new Person('jack', 19)
console.log(person2.name === 'jack') // true
console.log(person2.age === 19) // true
person2.sayHi() // 打印出「你好，我叫 jack」