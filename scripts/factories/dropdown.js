//retrieve data from dropdown menu
const {ingredients, appliance, ustensils} = dropdonwData; 
console.log(dropdonwData)

//ingredients dropdown
/*const ingredientsList = [
    ...new Set(dropdonwData.map((recipe) =>
        recipe.ingredients.map((ingredient) =>
            ingredient.toLowerCase()
            )
        )
    ),
];
console.log(ingredientsList)

//click in the toggle

ingredientsList.addEventListener("click", xx) {
    if () {

    } else {
        return ""
    }
}*/

//appliance dropdown
let applianceDropdown = dropdonwData.map(el => appliance)

//ustensils dropdown
let ustensilsDropdown = dropdonwData.map(el => ustensils)