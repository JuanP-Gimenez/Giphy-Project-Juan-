import View from "./View";

class TrendingView extends View {
  _parentElement = document.querySelector(".trending__gifs");
  _errorMessage = "Oh no, something went snap!";

  _generateMarkup() {
    return this._data.results
      .map((gif, i) => {
        return `
      <picture class="trending__giphy--item">
          <img src="${gif.fixedWidthSmall.url}" alt="${gif.title}">
          <p>${gif.title}</p>
      </picture>
  `;
      })
      .join("");
  }

  //   _generateMarkupTrending(tren) {
  //     return `
  //     <picture class="trending__giphy--item">
  //         <img src="${tren.preview.url}" alt="${tren.title}">
  //         <h3>${tren.title}</h3>
  //     </picture>
  // `;
  //   }
}

export default new TrendingView();
