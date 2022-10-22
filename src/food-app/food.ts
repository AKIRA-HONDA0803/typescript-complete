import { Foodable } from "./interfaces";
import { Score } from "./score";

export class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    // EventListener内でthisを使うとエラーになるので、bindを使う(class内のthisであることを明示的に示す)
    element.addEventListener('click', this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    this.element.classList.toggle('food--active');
    const score = Score.getInstance();
    score.render();
  }
}