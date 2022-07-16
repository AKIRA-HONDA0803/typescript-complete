// Literal型: 特定の値のみ取り扱う
// * constはliteral型、letはstring型
const apple = 'apple';

// typeエイリアス: 複雑な型を変数のように扱う
type ClothSize = 'small' | 'medium' | 'large'

let clothSize: ClothSize = 'large'
const cloth: {
  color: string;
  size: ClothSize
} = {
  color: 'white',
  size: clothSize
}

// 関数に型を適応させる
// * 戻り値の型は省略できるが基本的には書いておいた方がいい
function add(num1: number, num2: number): number {
  return num1 + num2
}

// 関数の戻り値にvoid型を使う
// * voidは何も返さないということ undefinedはNG
// * ただし、undefinedはreturn文があるときは使える
function sayHello() {
  console.log('Hello!');
}
console.log(sayHello());
let tmp: undefined;

// 関数型: 特定の関数のみを代入できる変数
const anotherAdd: (n1: number, n2: number) => number = add;

// const doubleNumber = (number: number):number => number * 2;
const doubleNumber: (num: number) => number = num => num * 2;

// callback関数の型
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
});

// unknown型: 柔軟でanyよりも厳しい型を定義する
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

// never型: 起こり得ない値の型を使用する
function error(message: string): never {
  throw new Error(message);
}
console.log(error('This is an error'));