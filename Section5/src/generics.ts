// Section7

// 93
// genericsは引数を複数とれる
// function copy<T>(value: T): T {
//   let user: T;
//   return value;
// }
// console.log(copy<string>('hello'));

// 94
// function copy<T extends { name: string }>(value: T): T {
//   let user: T;
//   return value;
// }
// console.log(copy( { name: 'Quill' }));

// 95
// keyofを使ってオブジェクトのキーのユニオン型を作成
function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key]
  return value;
}
console.log(copy( { name: 'Quill', age: 38}, 'name'));

// 96
class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item) , 1)
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana')

// 97
interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32]
}

// 98
interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('hello');
  }, 3000);
})

fetchData.then(data => {
  data.toUpperCase();
})
const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

// 99
// デフォルトの型パラメータを指定する
interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmp2: ResponseData;

// 100
interface Vegetables {
  readonly tomato: string;
  pumpkin?: string;
}
let tmp3: keyof Vegetables;
type MappedTypes = {
  // readonlyやオプショナルを設定できる
  // -をつけることで打ち消しする
  -readonly [P in keyof Vegetables]-?: string
}

// 101
type ConditionalTypes = 'tomato' extends string ? number : boolean;Enumerator;
type ConditionalTypesInfer = { tomato: string } extends { tomato: infer R } ? R : boolean;
type DistributiveConditionalTypes<T> = T extends 'tomato' ? number : boolean;
let tmp4: DistributiveConditionalTypes<'tomato' | 'pumpkin'>