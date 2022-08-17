// using the for loop
function selectedRecipes(event, selectedIngredientsTags, selectedUstensilsTags, selectedAppliancesTags) {
	// les 2 dropdonw
    if (event.target.value.length >= 3) {
        const results = [];

        for (let i = 0; i < recipes.length; i++) {
            const {name, ingredients, description, appliance, ustensils} = recipes[i];
            const nameResearch = name.toLowerCase().includes(event.target.value.toLowerCase());
            const descriptionResearch = description.toLowerCase().includes(event.target.value.toLowerCase());

            let ingredientsResearch = false;
            let applianceResearch = false;
            let ustensilsResearch = false;

            //ingredients
            for (let y = 0; y < ingredients.length; y++) {
                if (ingredients[y].ingredient.toLowerCase()/*nom de l'ingrédient*/.includes(event.target.value.toLowerCase())) {
                    ingredientsResearch = true;
                }
            }
            //appliance
            if (appliance.toLowerCase().includes(event.target.value.toLowerCase())) {
                applianceResearch = true ;
            }
                //ustensils
                for (let y = 0; y < ustensils.length; y++) {
                    if (ustensils[y]./*string directement*/toLowerCase().includes(event.target.value.toLowerCase())) {
                    ustensilsResearch = true ; 
                    }
                }

                //OU
                if (nameResearch || descriptionResearch || ingredientsResearch || applianceResearch || ustensilsResearch) {
                    results.push(recipes[i]);
                }
            }

            if (results.length) {
                /*recipesContainer.innerHTML = ""; est déjà placé dans recipeSection in helpers/recipes.js*/
                displayData(results);
            }
        } else if (event.target.value.length === 0) {
            displayData(recipes);
        }
}