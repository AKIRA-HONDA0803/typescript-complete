class Person {

  // デフォルトはpublic
  public name: string;
  // privateを使うことでクラスの中でしか使えない
  private age: number;

  constructor(initName: string, initAge:number) {
    this.name = initName;
    this.age = initAge;
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
