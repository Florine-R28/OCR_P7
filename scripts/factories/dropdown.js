function dropdonwFactory(filterData){
    const filterSection = document.getElementById("filterSection");
    const {ingredients, appliance, ustensils} = filterData;

    //dropdown menu of all ingredients
    function getIngredientsCardDOM() {
    const filterNavigation = document.createElement('ul');
    filterNavigation.classList.add('filter-nav');
    filterNavigation.classList.add('col-xs-12');

    filterSection.appendChild('filterNavigation');

    const filterNavBar = document.createElement('li');
    filterNavBar.classList.add('filter-item');
    filterNavBar.classList.add('dropdonw');
    filterNavBar.classList.add('col-xs-4');

    filterNavigation.appendChild(filterNavBar);

    const filterLink = document.createElement('a');
    filterLink.classList.add('filter-link');
    filterLink.classList.add('dropdown-toggle');
    filterLink.classList.add('filter_blue');

    filterNavBar.appendChild(filterLink);

    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');

    filterNavBar.appendChild(dropdownMenu);

    const dropdownItemsIngredients = document.createElement('a');
    dropdownItemsIngredients.classList.add('dropdown-menu');
    dropdownItemsIngredients.toLowerCase();

    dropdownItemsIngredients.forEach((ingredients) => {
        const ingredientsGlobalList = document.createElement('li');
        //ingredientsGlobalList.classList.add('');
        ingredientsGlobalList.textContent = `${ingredient.ingredient}`;
    })

    dropdownMenu.appendChild(dropdownItems);

    return (filterNavigation);
    }
    return {getIngredientsCardDOM};
}


/*<ul class="filter-nav filter_heading col-xs-12">
          <li class="filter-item dropdowm col-xs-4">
            <a class="filter-link dropdown-toggle filter_blue filter_select" href="#" id="filterbardrop" data-toggle="dropdown">Ingredients</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Lait de coco</a>
            </div>
          </li>*/

//
/*const cardDetails = document.createElement('div');
cardDetails.classList.add('card_details');

//ingredients x description
const ingredientsList = document.createElement('ul');
ingredientsList.classList.add('card_ingredients'); 

ingredients.forEach((ingredient) => {
    const ingredientslistElement = document.createElement('li');
    ingredientslistElement.classList.add('filter_option');

    //ingredient
    const ingredientComponent = document.createElement('span');
    ingredientComponent.textContent = `${ingredient.ingredient}${ingredient.quantity ? ":" : ""} `;
    
    //quantity x unit
    const quantityComponent = document.createElement('span');
    quantityComponent.textContent = `${ingredient.quantity ?? ""} ${ingredient.unit ?? ""}`;

    ingredientslistElement.appendChild(quantityComponent);
    ingredientslistElement.insertBefore(ingredientComponent, quantityComponent);

    ingredientsList.appendChild(ingredientslistElement);
})

cardDetails.appendChild(ingredientsList);
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

//ustensils dropdown