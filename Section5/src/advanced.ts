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

function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return '';
}
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