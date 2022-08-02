const selectedIngredientsTags = []; 
const seclectedUstensilsTags = [];
const selectedAppliancesTags = [];

//step 1 : create an empty model
function displayData(recipesData) {
    const recipeSection = document.getElementById("recipesContainer");

    recipesData.forEach((cardData) => {
        const recipeModel = cardFactory(cardData); 
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        recipeSection.appendChild(recipeCardDOM);
    });
}

// function ChangeCSS()
// {
//     dropdownMenuLinkBlue.setAttribute("class", "filter_select_research");
// }


//step 2 : retrieve the data x insert it into the empty slots
function init() {
    displayData(recipes);/*de recipes.js*/
    displayIngredientsTagList(getAllIngredients());
    displayApplianceTagList(getAllApliance());
    displayUstensilsTagList(getAllUstensils());
    //ChangeCSS(dropdownMenuLinkBlue)
}

//step 3 : start it all
window.onload = init;