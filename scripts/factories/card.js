function cardFactory(cardData){
    //call data that we will use, stored in helpers/api.js
    const {id, name, ingredients, time, description} = cardData;

    function getRecipeCardDOM() {
        const article = document.createElement('article'); 
        article.className = "card";

        const patternHomePage = `
                <a href='recipes.js?id=${id}' class="card_head"></a>
                <div class="card_body">
                    <div class="card_information">
                        <p class="card_name">${name}Limonade de Coco <!--à mettre en gras--></p>
                        <p class="card_time">${time} min</p>
                    </div>
                    <div class="card_details">
                        <ul class="card_ingredients">
                            <li class="filter_option">
                                Lait de coco: <!--à mettre en gras--> + qté + gr
                             </li>
                            <li class="filter_option">
                            Sucre
                            </li>
                        </ul>
                        <p class="card_description">${description}</p>
                    </div> 
                </div>
        `
        article.innerHTML = patternHomePage;

        return (article);
    }

    return {getRecipeCardDOM};
}