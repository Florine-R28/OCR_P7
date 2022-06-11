//get data file in recipes.js (photographers & medias)
async function getRecipes() {
    let url = `scripts/recipes.js`; 
    let response = await fetch(url);
    let result = await response.js(); 
    
    //flip the array
    return ({
        recipes:result.recipes,
        /*medias:result.media,*/
    })
}