const dropdownMenuLink = document.getElementById("dropdownMenuLink");

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
            //créer une fonction (ailleurs) pour boucler surl tableaux de tag pour afficher chaque tag (container)
            //ici appeler cette fonction 
        }) 

        listElement.appendChild(dropdownLinkElement);
        ingredientsTagsList.appendChild(listElement);
    })
}

//input filter for ingredients
dropdownMenuLink.addEventListener('keyup', function(event){
    if (event.target./*(event.target remplace dropdownMenuLink */value.length >= 3 /*pour récup la valeur tjs à jour*/) {
        const ingredientsTags = getAllIngredients();/*stocké*/
        const filteredIngredientsTags = ingredientsTags.filter((ingredientTag) => ingredientTag.includes(event.target.value.toLowerCase()));
        displayIngredientsTagList(filteredIngredientsTags) /*rappelle de la fonction pour afficher la recherche*/
    } else if (event.target.value.length === 0) {
        displayIngredientsTagList(getAllIngredients());
    }
  })

// show ingredient search
//const dropdownMenuSearch = document.getElementById("dropdownMenuLink");

//dropdownMenuSearch.addEventListener('focus', function(){
    //if () {
        //remplacer le placeholder
        // ajouter le css
//         dropdownMenuSearch.innerHTML = 'Rechercher un ingrédient';
//         dropdownMenuSearch.classList.add('filter_select_research');
//     } else {
//         //ne rien faire 
//     }
//   })

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
dropdownMenuLink.addEventListener('keyup', function(event){
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
dropdownMenuLink.addEventListener('keyup', function(event){
    if (event.target./*(event.target remplace dropdownMenuLink */value.length >= 3 /*pour récup la valeur tjs à jour*/) {
        const ustensilsTags = getAllUstensils();/*stocké*/
        const filteredUstensilsTags = ustensilsTags.filter((ustensilTag) => ustensilTag.includes(event.target.value.toLowerCase()));
        displayUstenilsTagList(filteredUstensilsTags) /*rappelle de la fonction pour afficher la recherche*/
    } else if (event.target.value.length === 0) {
        displayUstenilsTagList(getAllUstensils());
    }
  })

/*const toggleIngredients  = document.querySelector(".toggleIngredients");

toggleIngredients.addEventListener("click", () => {
    if (toggleIngredients /*???)) {
        ingredients.forEach((ingredient) => {
            return toggleIngredients.append(createDom("li", `${ingredient}`));
        });
    } else {
        toggleIngredients.innerHTML = "";
    }
    listenOnIngredientsItems();
});

ingredientInput.addEventListener("keyup", (event) => {
    dropdown-item-ingredients.innerHTML = "";
    if (event.target.value.length >= 3) {
        const query = event.target.value.toLowerCase();
        const results = ingredients.filter((ingredient) => {
            return ingredient.toLowerCase().includes(query);
        });
        results.forEach((result) => {
            return ingredientWrapper.append(createDom("li", `${result}`, { class: "ingredient__item" }));
        });
    }
    listenOnIngredientsItems();
});

const listenOnIngredientsItems = () => {
    const dropdown-item-ingredients = document.querySelectorAll(".dropdown-item-ingredients");
    dropdown-item-ingredients.forEach((/*????) => {
        ?????.addEventListener("click", () => {
            /*selectedFilters.push(????.textContent);
            const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
            createFiltersBar(selectedFiltersUnduplicated, recipes);
        });
    });
*/