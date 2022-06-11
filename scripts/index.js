//step 1 : create an empty model
async function displayData() {
    const recipeSection = document.getElementById("recipe_container");

    recipeSection.forEach((photographer) => {
        const recipeModel = /*à compléter*/; 
        const userCardDOM = recipeModel.getUserCardDOM();
        recipeSection.appendChild(userCardDOM);
    });
}