import View from "./View";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage =
    "No Gifs were found for your query! Please try another one :(";

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(result, index) {
    return `
    <picture class="results--active__item results--active__item--${index + 1}">
        <img class="results--active__img" src="${
          result.previewWebp.url
        }" alt="${result.title}">
    </picture>
`;
  }
}

export default new ResultsView();