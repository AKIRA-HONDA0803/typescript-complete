class Person {

  name: string;

  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}`)
  }
}
const quill = new Person('Quill');
quill.greeting()
const anotherQuill = {
  name: 'anotherQuill',
  // thisを定義することで正常に動作させる
  greeting: quill.greeting
}
anotherQuill.greeting
