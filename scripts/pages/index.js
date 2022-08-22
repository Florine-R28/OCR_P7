const selectedIngredientsTags = []; 
const selectedUstensilsTags = [];
const selectedAppliancesTags = [];
const search_bar = document.getElementById('searchBar');

//step 1 : in helpers/recipes.js

//step 2 : retrieve the data x insert it into the empty slots
function init() {
    displayData(recipes);/*de recipes.js*/
    displayIngredientsTagList(getAllIngredients());
    displayApplianceTagList(getAllApliance());
    displayUstensilsTagList(getAllUstensils());
    search_bar.addEventListener("keyup",(event) => {
        if (event.target.value.length >= 3) {
           toFilterRecipes(event.target.value, selectedIngredientsTags, selectedUstensilsTags, selectedAppliancesTags)
        } else if (event.target.value.length === 0){
            displayData(recipes);
        }
    });
}

//step 3 : start it all
window.onload = init;