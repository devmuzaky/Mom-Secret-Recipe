import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import BookmarksView from "./views/bookmarksView";

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import bookmarksView from "./views/bookmarksView";


if (module.hot) {
    module.hot.accept();
}

const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        resultView.update(model.getSearchResultsPage());
        bookmarksView.update(model.state.bookmarks)

        // Loading recipe
        await model.loadRecipe(id);


        // Rendering recipe
        recipeView.render(model.state.recipe);
    } catch (err) {
        recipeView.renderErrors();
    }
}

const controlSearchResults = async function () {

    try {
        resultView.renderSpinner();
        // 1) Get search query
        const query = searchView.getQuery();
        if (!query) return;

        // 2) Load search results
        await model.loadSearchResults(query);

        // 3) Render results
        resultView.render(model.getSearchResultsPage(1));

        // 4) Render initial pagination buttons
        paginationView.render(model.state.search);

    } catch (err) {
        console.error(err);
    }
}

const controlPagination = function (goToPage) {
    // 1) Render NEW results
    resultView.render(model.getSearchResultsPage(goToPage));

    // 2) Render NEW pagination buttons
    paginationView.render(model.state.search);
}

const controlServings = function (newServings) {
    // 1) Update the recipe Servings in state
    model.updateServings(newServings);

    // Update recipe views
    recipeView.update(model.state.recipe);
}

const controlAddBookmark = function () {
    if (!model.state.recipe.bookmarked)
        model.addBookmark(model.state.recipe);
    else
        model.deleteBookmark(model.state.recipe.id);

    recipeView.update(model.state.recipe);

    bookmarksView.render(model.state.bookmarks)
}

const controlBookmarks = function () {
    bookmarksView.render(model.state.bookmarks)

}

const init = function () {
    bookmarksView.addHandlerRender(controlBookmarks);
    recipeView.addHandlerRender(controlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerAddBookmark(controlAddBookmark);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
}

init();

const clearBookmarks = function () {
    localStorage.clear('bookmarks');
}

// clearBookmarks();