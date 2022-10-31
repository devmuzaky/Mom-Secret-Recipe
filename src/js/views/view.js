import icons from 'url:../../img/icons.svg';

export default class View {
    _data;

    /**
     * Render the received object to the DOM
     * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
     * @param {boolean} [render = true] true to render the result to the DOM, false to return the markup string
     * @returns {undefined | string} A markup string is returned if render = false
     * @this {Object} View instance (e.g. recipeView)
     * @returns {void|*} A markup string is returned if render = false
     * @author <a href="mail:devmuzaky@gmail.com">Mohamed Zaky</a>
     */
    render(data, render = true) {

        if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();

        if (!render) return markup;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }


    /**
     *
     * @param {Object} data The data to be updated (e.g. recipe)
     * @returns {void}  The updated markup is rendered to the DOM
     * @description This function is used to update the DOM with new data without re-rendering the entire DOM
     * @example this._update(data); // where this is the parent class

     */
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDom.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));

        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];
            if (!(newEl.isEqualNode(curEl)) && newEl.firstChild?.nodeValue.trim() !== '') {
                curEl.textContent = newEl.textContent;
            }

            if (!newEl.isEqualNode(curEl))
                Array.from(newEl.attributes).forEach(attr => {
                    curEl.setAttribute(attr.name, attr.value)
                })
        })
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    renderSpinner() {
        const markup = `
            <div class="spinner">
                <svg>
                    <use href="${icons}#icon-loader"></use>
                </svg>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this._errorMessage) {
        const markup = `
            <div class="error">
                <div>
                    <svg>
                        <use href="${icons}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message) {
        const markup = `
            <div class="message">
                <div>
                    <svg>
                        <use href="${icons}#icon-smile"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }


}