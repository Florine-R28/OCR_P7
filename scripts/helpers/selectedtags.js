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
    if (selectedApplianceTags.length !== 0 /*ou > à, le tableau contient qqc*/){
        selectedApplianceTags.forEach((selectedApplianceTag, index/*à quel position il est*/) => {
            const applianceTagElement = document.createElement('span');
            /*class*/
            applianceTagElement.innerHTML = selectedApplianceTags;

            const removeTagElement = document.createElement('span');
            removeTagElement.textContent = "x";

            removeTagElement.addEventListener('click', (event) => {
                selectedApplianceTags.splice(index, 1);
                showSelectedTagsContainer.removeChild(applianceTagElement);
            })

            applianceTagElement.appendChild(removeTagElement);
            showSelectedTagsContainer.appendChild(applianceTagElement);
        })
    }

    // //ustensils
    if (selectedUstensilsTags.length !== 0 /*ou > à, le tableau contient qqc*/){
        selectedUstensilsTags.forEach((selectedUstensilsTag, index/*à quel position il est*/) => {
            const ustensilTagElement = document.createElement('span');
            /*class*/
            ustensilTagElement.innerHTML = selectedUstensilsTag;

            const removeTagElement = document.createElement('span');
            removeTagElement.textContent = "x";

            removeTagElement.addEventListener('click', (event) => {
                selectedUstensilsTags.splice(index, 1);
                showSelectedTagsContainer.removeChild(ustensilTagElement);
            })

            ustensilTagElement.appendChild(removeTagElement);
            showSelectedTagsContainer.appendChild(ustensilTagElement);
        })
    }
}