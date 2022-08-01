//show selected tags
let showSelectedTagsContainer = document.getElementById("showSelectedTag");

function showSelectedTags() {
    showSelectedTagsContainer.innerHTML = "";
    //ingredients
    if (selectedIngredientsTags.length !== 0 /*ou > à, le tableau contient qqc*/){
        selectedIngredientsTags.forEach((selectedIngredientTag, index/*à quel position il est*/) => {
            const ingredientTagElement = document.createElement('span');
            /*class*/
            ingredientTagElement.innerHTML = selectedIngredientTag;

            const removeTagElement = document.createElement('span');
            removeTagElement.textContent = "x";

            removeTagElement.addEventListener('click', (event) => {
                selectedIngredientsTags.splice(index, 1);
                showSelectedTagsContainer.removeChild(ingredientTagElement);
            })

            ingredientTagElement.appendChild(removeTagElement);
            showSelectedTagsContainer.appendChild(ingredientTagElement);
        })
    }

    //appliance
    // if (selectedIngredientsTags.length !== 0 /*ou > à, le tableau contient qqc*/){
    //     selectedIngredientsTags.forEach((selectedIngredientTag) => {
    //         const ingredientTagElement = document.createElement('span');
    //         class
    //         ingredientTagElement.innerHTML = selectedIngredientTag;

    //         showSelectedTagsContainer.appendChild(ingredientTagElement);
    //     })
    // }*/

    // //ustensils
    // /*if (selectedIngredientsTags.length !== 0 /*ou > à, le tableau contient qqc*/){
    //     selectedIngredientsTags.forEach((selectedIngredientTag) => {
    //         const ingredientTagElement = document.createElement('span');
    //         /*class*/
    //         ingredientTagElement.innerHTML = selectedIngredientTag;

    //         showSelectedTagsContainer.appendChild(ingredientTagElement);
    //     })
    // }
}

/*map = créer un nouveau tableau*/
