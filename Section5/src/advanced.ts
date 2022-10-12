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