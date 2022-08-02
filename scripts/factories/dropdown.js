
let showSelectedTagsinHtml = document.getElementById("showSelectedTags");

//dropdownMenu all link
const dropdownMenuLinkBlue = document.getElementById("dropdownMenuLinkBlue");
const dropdownMenuLinkGreen = document.getElementById("dropdownMenuLinkGreen");
const dropdownMenuLinkRed = document.getElementById("dropdownMenuLinkRed");

//ingredients

function displayIngredientsTagList(ingredients) {
    const ingredientsTagsList = document.getElementById('ingredientsTagsList');
    ingredientsTagsList.innerHTML = "";
    ingredients.forEach((ingredient) => { 
        const listElement = document.createElement('li'); 

        const dropdownLinkElement = document.createElement('a');
        dropdownLinkElement.classList.add('dropdown-item');
        dropdownLinkElement.textContent = ingredient.toLowerCase();

        dropdownLinkElement.addEventListener('click', function(event) {
            selectedIngredientsTags.push(event.target.textContent)
            showSelectedTags(); 
        }) 

        listElement.appendChild(dropdownLinkElement);
        ingredientsTagsList.appendChild(listElement);
    })
}

//onclick replace text
dropdownMenuLinkBlue.addEventListener('click', function() {
    dropdownMenuLinkBlue.placeholder = 'Rechercher un ingrédient';
    //dropdownMenuLinkBlue.textContent = 'Rechercher un ingrédient';
    //dropdownMenuLinkBlue.setAttribute("class", "filter_select_research");
    dropdownMenuLinkBlue.classList.add('col-xs-6');
})

// function ChangeCSS()
// {
//     dropdownMenuLinkBlue.setAttribute("class", "filter_select_research");
// }

//input filter for ingredients
dropdownMenuLinkBlue.addEventListener('keyup', function(event){
    if (event.target./*(event.target remplace dropdownMenuLink */value.length >= 3 /*pour récup la valeur tjs à jour*/) {
        const ingredientsTags = getAllIngredients();/*stocké*/
        const filteredIngredientsTags = ingredientsTags.filter((ingredientTag) => ingredientTag.includes(event.target.value.toLowerCase()));
        displayIngredientsTagList(filteredIngredientsTags) /*rappelle de la fonction pour afficher la recherche*/
    } else if (event.target.value.length === 0) {
        displayIngredientsTagList(getAllIngredients());
    }
  })

//appliance
function displayApplianceTagList(appliance) {
    const applianceTagsList = document.getElementById('applianceTagsList');
    applianceTagsList.innerHTML = "";
    appliance.forEach((appliance) => {
        const listElement = document.createElement('li'); 

        const dropdownLinkElement = document.createElement('a');
        dropdownLinkElement.classList.add('dropdown-item');
        dropdownLinkElement.textContent = appliance.toLowerCase();

        listElement.appendChild(dropdownLinkElement);
        applianceTagsList.appendChild(listElement);
    })
}

//input filter for appliance
dropdownMenuLinkGreen.addEventListener('keyup', function(event){
    if (event.target./*(event.target remplace dropdownMenuLink */value.length >= 3 /*pour récup la valeur tjs à jour*/) {
        const applianceTags = getAllApliance();/*stocké*/
        const filteredApplianceTags = applianceTags.filter((applianceTag) => applianceTag.includes(event.target.value.toLowerCase()));
        displayApplianceTagList(filteredApplianceTags) /*rappelle de la fonction pour afficher la recherche*/
    } else if (event.target.value.length === 0) {
        displayApplianceTagList(getAllApliance());
    }
  })

//ustensils
function displayUstensilsTagList(ustensils) {
    const ustensilsTagsList = document.getElementById('ustensilsTagsList');
    ustensilsTagsList.innerHTML = "";
    ustensils.forEach((ustensil) => {
        const listElement = document.createElement('li'); 

        const dropdownLinkElement = document.createElement('a');
        dropdownLinkElement.classList.add('dropdown-item');
        dropdownLinkElement.textContent = ustensil.toLowerCase();

        listElement.appendChild(dropdownLinkElement);
        ustensilsTagsList.appendChild(listElement);
    })
}

//input filter for ustensils
dropdownMenuLinkRed.addEventListener('keyup', function(event){
    if (event.target./*(event.target remplace dropdownMenuLink */value.length >= 3 /*pour récup la valeur tjs à jour*/) {
        const ustensilsTags = getAllUstensils();/*stocké*/
        const filteredUstensilsTags = ustensilsTags.filter((ustensilTag) => ustensilTag.includes(event.target.value.toLowerCase()));
        displayUstenilsTagList(filteredUstensilsTags) /*rappelle de la fonction pour afficher la recherche*/
    } else if (event.target.value.length === 0) {
        displayUstenilsTagList(getAllUstensils());
    }
  })
 
/*const listenOnIngredientsItems = () => {
    const dropdown-item-ingredients = document.querySelectorAll(".dropdown-item-ingredients");
    dropdown-item-ingredients.forEach((????) => {
        ?????.addEventListener("click", () => {
            /*selectedFilters.push(????.textContent);
            const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
            createFiltersBar(selectedFiltersUnduplicated, recipes);
        });
    });
*/