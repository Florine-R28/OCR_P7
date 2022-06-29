//step 1 : create an empty model
function displayData(recipesData) {
    const recipeSection = document.getElementById("recipesContainer");

    recipesData.forEach((cardData) => {
        const recipeModel = cardFactory(cardData); 
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        recipeSection.appendChild(recipeCardDOM);
    });
}

//step 2 : retrieve the data x insert it into the empty slots
function init() {
    displayData(recipes);/*de recipes.js*/
}

//step 3 : start it all
window.onload = init;