class Person {
  readonly id: number = 32;

  // // デフォルトはpublic
  // public name: string;
  // // privateを使うことでクラスの中でしか使えない
  // private age: number;

  // constructor(initName: string, initAge:number) {
  //   this.name = initName;
  //   this.age = initAge;
  // }

  // 簡略化
  constructor(public readonly name:string, protected age: number) {
    // protectedは継承先でも使える
    // ここではreadonlyにならない
    this.id = 31;
    this.name = 'hehh'
  }
  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old`)
  }
}
// const quill = new Person('Quill');
// quill.greeting()
// const anotherQuill = {
//   name: 'anotherQuill',
//   // thisを定義することで正常に動作させる
//   greeting: quill.greeting
// }
// anotherQuill.greeting

let person2: Person;
const quill = new Person('Quill', 38);
quill.incrementAge();
quill.greeting();

class Teacher extends Person {
  get subject() {
    if (!this._subject) {
    throw new Error('There is no subject');
  }
    return this._subject;
  }
  set subject(value) {
    this._subject = value;
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old`)
  }
}

const teacher = new Teacher('Quill', 38, 'Math')
teacher.subject = "Music"
console.log(teacher.subject);
teacher.greeting();