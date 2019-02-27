import S from './test/index22'

interface InterfaceDemo {
    name:String;
    age:Number
}

class ClassDemo {
    // 这是我的注释代码
    get name():String {
        return this.name
    }
}

export { ClassDemo, S }
