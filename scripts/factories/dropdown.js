//ingredients
function displayIngredientsTagList(ingredients) {
    const ingredientsTagsList = document.getElementById('ingredientsTagsList');
    ingredientsTagsList.innerHTML = "";
    ingredients.forEach((ingredient) => {
        const listElement = document.createElement('li'); 

        const dropdownLinkElement = document.createElement('a');
        dropdownLinkElement.classList.add('dropdown-item');
        dropdownLinkElement.textContent = ingredient.toLowerCase();

        listElement.appendChild(dropdownLinkElement);
        ingredientsTagsList.appendChild(listElement);
    })
}

// filter by tags ingredients
const dropdownMenuLink = document.getElementById("dropdownMenuLink");

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
function displayApplianceTagsList(appliance) {
    const applianceTagsList = document.getElementById('applianceTagsList');
    appliance.forEach((appliance) => {
        const listElement = document.createElement('li'); 

        const dropdownLinkElement = document.createElement('a');
        dropdownLinkElement.classList.add('dropdown-item');
        dropdownLinkElement.textContent = appliance.toLowerCase();

        listElement.appendChild(dropdownLinkElement);
        applianceTagsList.appendChild(listElement);
    })
}

//ustensils
function displayUstensilsTagsList(ustensils) {
    const ustensilsTagsList = document.getElementById('ustensilsTagsList');
    ustensils.forEach((ustensil) => {
        const listElement = document.createElement('li'); 

        const dropdownLinkElement = document.createElement('a');
        dropdownLinkElement.classList.add('dropdown-item');
        dropdownLinkElement.textContent = ustensil.toLowerCase();

        listElement.appendChild(dropdownLinkElement);
        ustensilsTagsList.appendChild(listElement);
    })
}



/*
function dropdonwFactory(filterData){
    const filterSection = document.getElementById("filterSection");
    const {ingredients, appliance, ustensils} = filterData;


    //dropdown menu of all ingredients
    function getTagsListCardDOM() {}

        const listElement = document.createElement('li');

        //filterNavBar.appendChild(dropdownMenu);

    const dropdownLinkElement = document.createElement('a');
    dropdownLinkElement.classList.add('dropdown-menu');

    dropdownLinkElement.forEach((ingredients) => {
        const ingredientsGlobalList = document.createElement('li');
        //ingredientsGlobalList.classList.add('');
        ingredientsGlobalList.textContent = `${ingredient.ingredient}`;
    })

    dropdownMenu.appendChild(dropdownItems);

    return 
    }
    return {getTagsListCardDOM};
}

const toggleIngredients  = document.querySelector(".toggleIngredients");

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
};


/*<ul class="filter-nav filter_heading col-xs-12">
          <li class="filter-item dropdowm col-xs-4">
            <a class="filter-link dropdown-toggle-ingredients filter_blue filter_select" href="#" id="filterbardrop" data-toggle="dropdown">Ingredients</a>
            <div class="dropdown-menu">
              <a class="dropdown-item-ingredients" href="#">Lait de coco</a>
            </div>
          </li>*/

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
