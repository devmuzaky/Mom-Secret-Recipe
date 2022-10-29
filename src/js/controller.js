import * as model from './model.js';
import recipeView from './views/recipeView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);

        if (!id) return;

        recipeView.renderSpinner();

        // Loading recipe
        await model.loadRecipe(id);

        // Rendering recipe

        recipeView.render(model.state.recipe);

    } catch (err) {
        recipeView.renderMessages();
    }

}

// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

const init = function () {
    recipeView.addHandlerRender(controlRecipes);
}

init();