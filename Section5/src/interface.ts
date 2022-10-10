// type Human = {
//   name: string;
//   age: number;
// }
interface Human  {
  name: string;
  age: number;
  // メソッドの定義
  greeting(message: string): void;
}

const human: Human = {
  name: 'Quill',
  age: 38,
  greeting(message: string) {
    console.log(message);
  }
}
// let developer: Human;

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number)
  greeting(message: string) {
    console.log('Hello!');
  }
}
const  tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log('Hello!');
  }
}

// Humanはexperienceがない => Developer側の要素が多くても大丈夫
const user:Human = new Developer('Quill', 38, 3);
// tmpDeveloperを一度変数にしないとexperienceでエラーが出る。
// const user:Human = tmpDeveloper;