// recipe.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the recipe ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');

    // Fetch detailed recipe information
    const apiKey = '829083632c4846ed9419cd7ad73bfd1b';
    const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayRecipeDetails(data))
        .catch(error => console.error('Error fetching recipe details:', error));
});

function displayRecipeDetails(recipe) {
    const recipeDetailsContainer = document.getElementById('recipeDetails');
    const recipeElement = document.createElement('div');
    recipeElement.classList.add('recipe-details');

    // Display recipe details
    recipeElement.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <p>${recipe.instructions}</p>
        <a href="${recipe.sourceUrl}" target="_blank">View full recipe on Spoonacular</a>
    `;

    recipeDetailsContainer.appendChild(recipeElement);
}
