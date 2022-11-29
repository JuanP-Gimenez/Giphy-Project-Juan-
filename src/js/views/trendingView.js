import View from "./View";

class TrendingView extends View {
  _parentElement = document.querySelector(".trending-gifs");
  _parentElError = document.querySelector(".trending-grid");
  _errorMessage = "Oh no, something went snap!";
  _generateMarkup() {
    console.log(this._data.results);
    return this._data.results
      .map((gif, i) => {
        return `
      <picture class="trending-gifs__item trending-gifs__item--${i + 1}">
          <source srcset="${gif.previewGif.url}"
                  media="(max-width: 37em)"/>
          <img class="trending-gifs__img" src="${gif.previewWebp.url}" alt="${
          gif.title
        }">
      </picture>
  `;
      })
      .join("");
  }
}

export default new TrendingView();
