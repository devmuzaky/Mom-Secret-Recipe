import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';


if(module.hot) {
    module.hot.accept();
}


const controlRecipes = async function () {
    try {

        const id = window.location.hash.slice(1);
        resultView.renderSpinner();

        if (!id) return;
        recipeView.renderSpinner();

        // Loading recipe
        await model.loadRecipe(id);

        // Rendering recipe

        recipeView.render(model.state.recipe);

        resultView.render(model.state.search.results);

    } catch (err) {
        recipeView.renderErrors();
    }

}

// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

const controlSearchResults = async function () {

try {
    resultView.renderSpinner();
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
        await model.loadSearchResults(query);

    // 3) Render results
        resultView.render(model.state.search.results);

    } catch (err) {
        console.error(err);
    }
}

const init = function () {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);
}

init();