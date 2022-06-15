//get data file in recipes.js (photographers & medias)
async function getRecipes() {
    let url = `data/recipes.json`; 
    let response = await fetch(url);
    let result = await response.json(); 
    
    //flip the array
    return ({
        recipes:result.recipes,
    })
}