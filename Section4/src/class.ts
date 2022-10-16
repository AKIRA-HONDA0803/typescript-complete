// abstractは継承のみに使われるクラス
abstract class Person {
  static species = 'Homo sapiens';
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
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
    this.explainJob();
  }
  // 継承先で必ずexplainJobというメソッドが必要になる。
  abstract explainJob(): void;
}
// const quill = new Person('Quill');
// quill.greeting()
// const anotherQuill = {
//   name: 'anotherQuill',
//   // thisを定義することで正常に動作させる
//   greeting: quill.greeting
// }
// anotherQuill.greeting

// let person2: Person;
// const quill = new Person('Quill', 38);
// quill.incrementAge();
// quill.greeting();

class Teacher extends Person {
  private static instance: Teacher;
  explainJob() {
    console.log(`I am a teacher and ${this.subject}`);
  }
  get subject() {
    if (!this._subject) {
    throw new Error('There is no subject');
  }
    return this._subject;
  }
  set subject(value) {
    this._subject = value;
  }
  // constructorの前にprivateを定義することで、クラスを作成できなくなる
  // シングルトンパターン
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher('Quill', 38, 'Math')
    return Teacher.instance;
  }
  // greeting() {
  //   console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
  // }
}

// const teacher = new Teacher('Quill', 38, 'Math')
// teacher.subject = "Music"
// console.log(teacher.subject);
// teacher.greeting();
// Math.random()
console.log(Person.species);

const teacher = Teacher.getInstance();
