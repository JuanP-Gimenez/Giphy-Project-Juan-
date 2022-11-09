import View from "./View";

class TrendingView extends View {
  _parentElement = document.querySelector(".trending-gifs");
  _errorMessage = "Oh no, something went snap!";

  _generateMarkup() {
    return this._data.results
      .map((gif, i) => {
        if (i < 12)
          return `
      <picture class="trending-gifs__item trending-gifs__item--${i + 1}">
          <img class="trending-gifs__img" src="${gif.downStill.url}" alt="${
            gif.title
          }">
      </picture>
  `;
      })
      .join("");
  }
}

export default new TrendingView();
