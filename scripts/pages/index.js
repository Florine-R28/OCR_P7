//step 1 : create an empty model
async function displayData(recipes) {
    const recipeSection = document.getElementById("recipe_container");

    recipes.forEach((cardData) => {
        const recipeModel = cardFactory(cardData); 
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        recipeSection.appendChild(recipeCardDOM);
    });
}

//step 2 : retrieve the data x insert it into the empty slots
async function init() {
    const { recipes } = await getRecipes(); 
    displayData(recipes);
}

//step 3 : start it all
window.onload = init;