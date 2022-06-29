function cardFactory(cardData){
    //call data that we will use, stored in helpers/api.js
    const {name, ingredients, time, description, ingredient, quantity, unit} = cardData;

    //ne prend qu'une seule carte de recette
    function getRecipeCardDOM() {
        const recipeContainer = document.createElement('div'); 
        recipeContainer.classList.add('recipe_container');
        recipeContainer.classList.add('col-xs-3');

        //two parts of the card
        const cardHead = document.createElement('div');
        cardHead.classList.add('card_head');

        recipeContainer.appendChild(cardHead);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card_body');

        recipeContainer.appendChild(cardBody);

        //inside the cardBody
        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card_title');

        cardBody.appendChild(cardTitle);

        //name x time 
        const cardName = document.createElement('p');
        cardName.classList.add('card_name');
        cardName.textContent = name;

        cardTitle.appendChild(cardName);

        const cardTime = document.createElement('p');
        cardTime.classList.add('card_time');
        cardTime.textContent = time; 
        cardTime.innerHTML = `min`;

        cardBody.appendChild(cardTime);

        //
        const cardDetails = document.createElement('div');
        cardDetails.classList.add('card_details');

        cardBody.appendChild(cardDetails);

        //ingredients x description
        const cardIngredients = document.createElement('ul');
        cardIngredients.classList.add('card_ingredients');
        cardIngredients.textContent = ingredients; 

        cardDetails.appendChild(cardIngredients);

        const listCard = document.createElement('li');
        listCard.classList.add('filter_option');

        const ingredientComponent = document.createElement('div');
                ingredientComponent.textContent = ingredient;

                cardIngredients.appendChild(ingredientComponent);
                listCard.innerHTML = ':';

                const quantityComponent = document.createElement('div');
                quantityComponent.textContent = quantity;

                listCard.appendChild(quantityComponent);

                const unitComponent = document.createElement('div');
                unitComponent.textContent = unit; 

                listCard.appendChild(unitComponent);

        /*function componentFactory (cardComponent){
            const {ingredient, quantity, unit} = cardComponent;
            if (cardComponent.toLowerCase === fasle) {
                cardComponent.toLowerCase()
            } else {
                return cardComponent;
            }
        
            function getIngredientsCardDOM() {
                const ingredientComponent = document.createElement('div');
                ingredientComponent.textContent = ingredient;

                listCard.appendChild(ingredientComponent);
                listCard.innerHTML = ':';

                const quantityComponent = document.createElement('div');
                quantityComponent.textContent = quantity;

                listCard.appendChild(quantityComponent);

                const unitComponent = document.createElement('div');
                unitComponent.textContent = unit; 

                listCard.appendChild(unit);
            /*}
        }

        cardIngredients.forEach((cardComponent) => {
            const componentModel = componentFactory(cardComponent); 
            const ingredientsCardDOM = componentModel.getIngredientsCardDOM();
            cardIngredients.appendChild(ingredientsCardDOM);
        });*/

            /*ingredients.foreach (let i = 0, i < xx ; i++){
                
                }
            }
            return xx; 
        }*/
        // quand on arrive dans les ingredients, il faut afficher "ingredient : quantité et unité" jusqu'à ce qu'il n'y en est plus
        /*boucle for à faire*/

        cardIngredients.appendChild(listCard); 

        const instruction = document.createElement('p');
        instruction.classList.add('card_description');
        instruction.textContent = description;

        cardDetails.appendChild(instruction); 

        /*const patternHomePage = `
                <div class="card_head"></div>
                <div class="card_body">
                    <div class="card_information">
                        <p class="card_name">${name}</p>
                        <p class="card_time">${time} min</p>
                    </div>
                    <div class="card_details">
                        <ul class="card_ingredients">
                            <li class="filter_option">
                                Lait de coco: <!--à mettre en gras--> + qté + gr
                             </li>                           
                        </ul>                       
                        <p class="card_description"></p>
                    </div> 
                </div>
        `*/

        /*article.innerHTML = patternHomePage;*/

        return (recipeContainer);
    }

    return {getRecipeCardDOM};
}