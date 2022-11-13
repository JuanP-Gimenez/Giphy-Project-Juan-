import icons from "url:../../img/sprite.svg";

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _clearError() {
    this._parentElError.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-spinner5"></use>
          </svg>
          <p>Giphy’s will be here in a jiffy ...</p>
        </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
       
         <div class="error">           
         <p>${message}</p>
               <svg>
                   <use href="${icons}#icon-caution"></use>
               </svg>            
       </div>
        
      `;
    this._clearError();
    this._clear();
    this._parentElError.insertAdjacentHTML("afterbegin", markup);
  }
}
