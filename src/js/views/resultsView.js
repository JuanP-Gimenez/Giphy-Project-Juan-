import View from "./View";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage =
    "No Gifs were found for your query! Please try another one :(";

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(result) {
    return `
    <picture class="results__giphy--item">
        <img src="${result.preview.url}" alt="${result.title}">
        <h3>${result.title}</h3>
    </picture>
`;
  }
}

export default new ResultsView();
