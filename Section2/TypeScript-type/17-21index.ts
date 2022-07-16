// Array型: 配列に型を付ける
const fruits = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0];

// Union型
// const fruits = ['Apple', 'Banana', 'Grape', 1]

// Tuple型: 決まった内容の配列を作る
const book: [string, number, boolean] = ['business', 1500, false];

// 列挙型: 特定のまとまったグループのみを受け入れる
// * = を入れない場合は0,1,2という値が入る
// * = 100と入れると次以降の値は101,102となる
// * enumは全て大文字
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;

// any型
let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fjiafjaj = 'faijfi';
let banana = 'banana';
banana = anything

//Union型: 複数の型を使う
let unionType: number | string = 10;
// unionType.toUpperCase(); //error
unionType = 'hello'
unionType.toUpperCase
let unionTypes: (number | string)[] = [21, 'hello']