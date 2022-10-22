import { Scoreable } from "./interfaces";
import { Foods } from "./foods";

export class Score implements Scoreable {
  private static instance: Score;
  get totalScore() {
    const foods = Foods.getInstance();
    // reduceを用いて合計する処理を実装する
    return foods.activeElementsScore.reduce((total, score) => total + score, 0)
  }
  render() {
    // 初期値0の値を変更する
    document.querySelector('.score__number')!.textContent = String(this.totalScore);
  }
  private constructor() { }
  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score();
    }
    return Score.instance;
  }
}