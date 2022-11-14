import View from "./View.js";

class RandomGiphyView extends View {
  _parentElement = document.querySelector(".random__giphy");
  _parentElError = document.querySelector(".random__giphy");
  _errorMessage = "We could not find that giphy. Please try another one!";

  _generateMarkup() {
    return `
    <picture class="random__giphy--item">
        <source srcset="${this._data.fixedWidth.webp}"
        media="(max-width: 37em)"/>
        <source srcset="${this._data.original.url}"
        media="(min-width: 112.5em)"/>
        <img srcset="${this._data.original.webp},${this._data.downStill?.url}" alt="">
    </picture>
`;
  }

  addHandlerNewRandomGif(handler) {
    this._parentElement
      .closest(".random-section")
      .addEventListener("click", function (e) {
        const btn = e.target.closest(".random__btn");
        if (!btn) return;
        handler();
      });
  }
}

export default new RandomGiphyView();
