type Engineer = {
  name: string;
  role: string;
}
type Blogger = {
  name: string;
  follower: number;
}
// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer , Blogger {}
const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// function toUpperCase(x: string | number) {
//   if (typeof x === 'string') {
//     return x.toUpperCase();
//   }
//   return '';
// }
type NomadWorker = Engineer | Blogger
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  // in演算子
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

class Dog {
  kind: 'dog' = 'dog'
  speak() {
    console.log('bow-bow');
  }
}
class Bird {
  kind: 'bird' = 'bird'
  speak() {
    console.log('tweet-tweet');
  }
  fly() {
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  if (pet instanceof Bird) {
    pet.fly();
  }
}

// HTMLElement | null
// const input = document.getElementById('input');
// 型アサーション① JSX使用の時は非推奨
// const input = <HTMLInputElement>document.getElementById('input');
// 型アサーション②
const input = document.getElementById('input') as HTMLInputElement;

//!(Non-null assertion operator)を使うとnullではないと言い切る
// const input = document.getElementById('input')!;

interface Designer {
  name: string;
  // インデックスシグネチャ
  [index: string]: string
}

const designer: Designer = {
  name: 'Quill'
}

// 関数のオーバーロード
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}
// string
// const upperHello = toUpperCase('hello')
// number
// const upperHello = toUpperCase(22)

// Optional Chaining
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}
const downloadedData: DownloadedData = {
  id: 1
}
// downloadedData.userがnullかundefinedであればundefinedを返す
console.log(downloadedData.user?.name?.first);

// Nullish Coalescing
// or演算子 || でも使える
const userData = downloadedData.user ?? 'no-user';

// LookUp型 オブジェクトの型のメンバーの型を取得する
// userの?を外す
// type id = DownloadedData["user"]["name"]
type id = DownloadedData["id"]

// 型の互換性の仕様
enum Color {
  RED,
  BLUE
}
class AdvancedPerson {
  name: string = 'Peter'
  age: number = 35;
}
class AdvancedCar {
  name: string = 'Prius'
  age: number = 5;
}
let target = new AdvancedPerson();
let source = new AdvancedCar();
// let target = function (a: string, b: string) { }
// let source = function (a: string) { }
// let source = 0;
// let target = Color.RED
// let source = 0;
// let target = 'hello'
// let source: 'hello' = 'hello'
target = source;
// target('hi', 'hello');

// cf Type Compatibility

// 関数型のオーバーロードはinterfaceで定義する必要がある

interface TmpFunc {
  (x: string): string;
  (x: number): number;
}

const upperHello : TmpFunc = function (x: string | number) { return 0 };
// const upperHello = toUpperCase;
interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}
interface FuncB {
  (a: string): number;
}
// &の順番によってオーバーロードされる順番が変わる
let intersectionFunc: FuncA & FuncB;
intersectionFunc = function (a: number | string, b?: number | string) { return }


// 関数型のユニオン型
interface FuncA {
  (a: number): number;
}
interface FuncB {
  (a: string): string;
}
let unionFunc: FuncA | FuncB;
// let unionFanc: (a: never) => number;
// 引数は使えない
// unionFunc();
unionFunc = function (a: number) { return 3 }
unionFunc();

// レストパラメーターに配列やタプルを指定する

// 3つの引数があることを省略して記載
// ...number[]のような記述はタプルだとできる
// function advancedFn(...args: [number, string, boolean?, ...number[]]) {

// }
// advancedFn(0, 'hi', true, 3,3,3,3)

// 配列とタプルにreadonly修飾詞をつける

function advancedFn(...args: readonly number[]) {

}
advancedFn(0, 1)

// constアサーションはこう使う

const milk = 'milk' as const;
// letをconstにして終えば良い...?
let drink = milk;
// readonly修飾詞がついている
const array = [10, 20] as const;
const peter = {
  name: 'Peter',
  age: 38
} as const;

// 型の中でtypeofを使う

// typeof 値　でその値の型を取得する
type PeterType = typeof peter;