// using the for loop
function toFilterRecipes(inputValue, selectedIngredientsTags, selectedUstensilsTags, selectedAppliancesTags) {
	// les 2 dropdonw
        const results = [];

        for (let i = 0; i < recipes.length; i++) {
            const {name, ingredients, description, appliance, ustensils} = recipes[i];
            const isIncludedInName = name.toLowerCase().includes(inputValue.toLowerCase());
            const isIncludedInDescription = description.toLowerCase().includes(inputValue.toLowerCase());
            const selectedTags = [...selectedIngredientsTags, ...selectedAppliancesTags, ...selectedUstensilsTags]; /*je mets le contenu des tableaux dans un tableau*/

            let isIncludedInIngredients = false;
            let isIncludedInAppliance = false;
            let isIncludedInUstensils = false;
            let isIncludedInSelectedTags = false;

            //ingredients
            for (let y = 0; y < ingredients.length; y++) {
                if (ingredients[y].ingredient.toLowerCase()/*nom de l'ingrédient*/.includes(inputValue.toLowerCase())) {
                    isIncludedInIngredients = true;
                }
            }
            //appliance
            if (appliance.toLowerCase().includes(inputValue.toLowerCase())) {
                isIncludedInAppliance = true ;
            }
            //ustensils
            for (let y = 0; y < ustensils.length; y++) {
                if (ustensils[y]./*string directement*/toLowerCase().includes(inputValue.toLowerCase/*spé input*/())) {
                    isIncludedInUstensils = true ; 
                }
            }

            //que les tags
            for(let y = 0; y < selectedTags.length; y++) {
                if (ingredients.findIndex((ingredient) => ingredient/*parenthèse*/.ingredient/*nom de l'ingrédient*/.toLowerCase() === selectedTags[y].toLowerCase())> -1) {
                    isIncludedInSelectedTags = true;
                }

                if (appliance === selectedTags[y]) { /*l'appapreil est-il dans le tableau de tags sélectionnés*/
                    isIncludedInSelectedTags = true;
                }

                if (ustensils.findIndex((ustensil) => ustensil.toLowerCase() === selectedTags[y].toLowerCase())> -1) { /*si le tag est dans le tableau "ustensils"*/
                    isIncludedInSelectedTags = true;
                }
            }

            //OU
            if ((isIncludedInName || isIncludedInDescription || isIncludedInIngredients || isIncludedInAppliance || isIncludedInUstensils) && isIncludedInSelectedTags) {
                results.push(recipes[i]);
            }
        }

        if (results.length) {
            /*recipesContainer.innerHTML = ""; est déjà placé dans recipeSection in helpers/recipes.js*/
            displayData(results);
        }

}