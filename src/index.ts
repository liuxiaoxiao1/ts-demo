// import S from './test/index22'
//
// interface InterfaceDemo {
//     name:String;
//     age:Number
// }
//
// class ClassDemo {
//     name: string;
//     constructor (name: string) {
//         this.name = name
//     }
// }
//
//
// function test (str: string) {
//     return str
// }
//
// test('2')
// var a = new ClassDemo('Xiaoxiao Liu')
// console.log(a.name)
//
// export { ClassDemo, S }

// 一些基本类型
let isDone: boolean = false;        //申明该值为 boolean 类型

let decLiteral: number = 6;

let notANumber: number = NaN;       // 进行隐式转换

let infinityNumber: number = Infinity;  // 进行隐式转换

let num: number = undefined;   // 进行隐式转换

let myName: string = 'Xcat Liu';

let u: undefined = undefined;

let n: null = null;

let anytest: any = 123;   //申明该值为任意类型
anytest = true;
anytest = '任意值'

//  内置对象类型申明

let b: Boolean = new Boolean(1);    // 申明为 Boolean 类型

let e: Error = new Error('Error occurred');    //申明为错误类型

let d: Date = new Date();   // 申明为 时间类型

let r: RegExp = /[a-z]/;    //申明为正则类型


let body: HTMLElement = document.body;

let allDiv: NodeList = document.querySelectorAll('div');

document.addEventListener('click', function(e: MouseEvent) {
    // Do something
});


// 联合类型
let test: string | number;    //申明 test变量的类型为string 或者 number其中一种
test = 'seven';     //test的取值可以为其中一种类型
test = 7;

// 当不确定一个使用了联合类型的变量是哪种类型时，只能访问此联合类型的所有类型里共有的属性或方法
function getString(something: string | number) {     //申明传入的参数为string或者number类型
    return something.toString();        // 只能调用string和number共有的方法
}

// error
// function getLength(something: string | number) {
//     return something.length;       // number类型不存在length
// }


// interface
interface Person {     //使用interface定义一个对象的类型，取名Person    首字母一般大写
    name: string;        //申明该对象每个值的取值类型
    age: number;
}

let xcatliu: Person = {     // 申明一个xcatliu对象，使用Person规则进行匹配验证
    name: 'Xcat Liu',
    age: 25,
};


// error  不能比定义的Person类型的变量少
// let xcatliu2: Person = {     // 申明一个xcatliu对象，使用Person规则进行匹配验证
//     name: 'Xcat Liu',
// };

// 有时候我们希望一个接口允许有任意的属性，即可以任意添加属性个数，使用 任意属性  [propName: string]

interface Person2 {
    name: string;
    [propName: string]: any;     // 表示可以任意添加属性个数  ，添加的属性类型为 any
}

let xcatliu3: Person2 = {
    name: 'Xc Liu',
    website: 'http://***.com',   //任意添加的属性
    websit2: 'http://***.com',    //任意添加的属性
};

// 对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性，在刚刚创建对象的时候赋值，后面不允许改变该属性值。也不能在创建的时候未定义值
interface Person4 {
    readonly id: number;   //使用 readonly 定义只读属性
    name: string;
}

let xcatliu4: Person4 = {
    id: 89757,
    name: 'Xcat Liu',
};

// error
// xcatliu.id = 9527;    //报错  不能改变该属性值


// 数组
let testArr: number[] = [1,2,5,4,8]     //申明一个数组的类型为 number

let fibonacci: string[] = ["1","2"];    //申明一个数组的类型为 string

let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];   // 申明一个数组的类型为任意类型

let fibona: Array<number> = [ 1, 2, 3, 5];   //也可以使用数组泛型Array<elemType> 来表示数组

interface NumberArray {      //使用接口定义一个数组的类型，表示该数组取值必须为 string 类型
    [index: number]: string;
}
let fi: NumberArray = ["a","1"];

interface NumberArr {        //使用接口定义一个数组的类型，表示该数组取值必须为 number 类型
    [index: number]: number;
}
let fi2: NumberArr = [1, 1, 2, 3, 5];


// 函数的类型
// 定义函数的类型，对函数传入的参数和返回值做一定的限制
// 输入多余的（或者少于要求的）参数，是不被允许的，
function sum(x: number, y: number): number {     //申明一个函数sum  限制其传入的参数为 number类型，返回的参数为 number类型
    return x + y;
}

sum(1, 2);



// 函数表达式
// 如果是一个函数表达式，，那么需要对左右两边进行类型的限制
//申明了一个 mySum函数，申明其类型为number
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 函数的类型也可以定义可选的传入参数， 在参数后面使用 ?
// 可选参数必须接在必需参数后面

function buildName(firstName: string, lastName?: string) {    // lastName 为可选参数
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let xcatliu5 = buildName('x', 'Liu');
let xcat = buildName('x');

// TypeScript 会将添加了默认值的参数识别为可选参数     使用默认值的可选参数不限制位置
function buildName2(firstName: string, lastName: string = 'Liu') {     // lastName 为可选参数
    return firstName + ' ' + lastName;
}
let xcatliu6= buildName2('Xcat', 'Liu');
let xcat6 = buildName2('Xcat');


function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 类型断言
// 类型断言可以用来绕过编译器的类型推断，手动指定一个值的类型
//
// TypeScript在使用联合类型时，默认不能引用不确定类型的方法，只能引用共有的方法，某些时刻，我们需要使用类型断言，即申明此时的属性为某个类型
//
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的   断言的类型必须是联合类型中的某一个

function getLength(something: string | number): number {
    if ((<string>something).length) {   // 默认不能使用 length属性，使用类型断言 <string>   将此时的something申明为 string类型
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}


// 类型别名
// 类型别名用来给一个类型起个新名字。使用 type
type Name = string;        // 使用 type 将string类型起名为 Name
type NameResolver = () => string;      //另一种写法
type NameOrResolver = Name | NameResolver;     //使用该别名
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}




// 字符串字面量类型

//字符串字面量类型用来约束取值只能是某几个字符串中的一个。同样使用 type
type test = 'click'|'scroll'|'mousemove'       // 使用 type 规定test变量为三个值其中一个
function handleEvent(ele: Element, event: test) {   //使用test类型，传入的值为规定值的其中一个
    // do something
}








// 元组
//数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
//
// 简单理解，在数组类型中，要么规定数组中的每个值都为某种类型，要么都为任意类型。使用元组，可以依次给每个值指定类型
let xcatliu7: [string, number] = ['Xcat Liu', 25];

// 我们也可以在定义数组类型后，通过索引依次赋值，也可以只赋值其中一项
//
// 当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。

let xcatliu8: [string, number];    //先定义每个值的类型
xcatliu8[0] = 'Xcat Liu';     // 通过索引赋值
xcatliu8[1] = 25;

xcatliu8[0].slice(1);     //可以通过索引调用对应类型的方法
xcatliu8[1].toFixed(2);

// error
// let xcatliu9: [string, number] = ['Xcat Liu'];   //报错，需要全部赋值











// TypeScript 中类的用法    public private 和 protected
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的


class ClassDemo {
    name: string;
    constructor (name: string) {
        this.name = name
    }
    private getName () : string {
        return this.name
    }
    getN () {
        return this.getName()
    }
}

var testU = new ClassDemo('xxxx')
console.log(testU.getN())
