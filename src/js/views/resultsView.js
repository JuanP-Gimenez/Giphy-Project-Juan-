import View from "./View";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _parentElError = document.querySelector(".error-container");
  _errorMessage = "No Gifs were found! Please try another one 🙃";

  _generateMarkup() {
    this._clearError();
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(result, index) {
    return `
    <picture class="results--active__item results--active__item--${index + 1}">
    <source srcset="${result.previewGif.url}"
    media="(max-width: 37em)"/>
        <img class="results--active__img" src="${
          result.previewWebp.url
        }" alt="${result.title}">
    </picture>
`;
  }
}

export default new ResultsView();
