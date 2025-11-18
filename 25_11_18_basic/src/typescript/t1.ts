// 类型推断
let str = 'liren'
let str2 : string = 'lirendada'
// str = 10


// 类型注解
let str3 : string
str3 = 'abc'


// 类型断言
let numArr = [1, 2, 3]
const result = numArr.find(item => item > 2) as number
console.log(result * 5)


// 基本类型
let v1: string = 'lirendada'
let v2: number = 10
let v3: boolean = true
let nu: null = null
let un: undefined = undefined

let v4: string | null = null
let v5: 1 | 2 | 3 = 2
// v5 = 4


// 数组类型
let arr: number[] = [1,2,3]
let arr1: Array<string> = ['1', 'asd']


// 元组类型
let tp: [number, string, number] = [1, 'a', 2]
console.log(tp[1])

let tp1: [number, string?, number?] = [1, 'a'] // 可以用?作为缺省参数


// 枚举类型
enum MyEnum {
    A, 
    B, 
    C
}
console.log(MyEnum.A)
console.log(MyEnum[0])


// 函数
function MyFunc(a: number, b: string, c: boolean, ...rest: number[]): number {
    return 100
}
let f = MyFunc(20, 'liren', true, 1, 2, 3)
console.log(f)


// 接口
interface Obj {
    name: string,
    age: number
}

const obj1: Obj = {
    name: 'liren',
    age: 23
}
console.log(obj1)
const obj2: Obj = {
    name: 'zch',
    age: 19
}
console.log(obj2)


// 类型别名
type MyUserName = string | number
let oldname: string | number = 'lirendada'
let newname: MyUserName = 'lirendada'
console.log(oldname)
console.log(newname)


// 泛型
function myFn<T>(a: T, b: T): T[] {
    return [a, b]
}
console.log(myFn<number>(1, 2))
console.log(myFn('a', 'liren'))