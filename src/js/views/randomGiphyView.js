import View from "./View.js";
import icons from "url:../../img/icons.svg";

class RandomGiphyView extends View {
  _parentElement = document.querySelector(".random__giphy");
  _errorMessage = "We could not find that giphy. Please try another one!";

  _generateMarkup() {
    return `
    <picture class="random__giphy--item">
        <img src="${this._data.original.url}" alt="">
        <h3>${this._data.title}</h3>
    </picture>
`;
  }

  addHandlerNewRandomGif(handler) {
    this._parentElement
      .closest(".random-section")
      .addEventListener("click", function (e) {
        const btn = e.target.closest(".random-btn");
        if (!btn) return;
        handler();
      });
  }
}

export default new RandomGiphyView();
