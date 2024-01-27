function searchRecipes() {
    console.log('Searching recipes...');
    const apiKey = '829083632c4846ed9419cd7ad73bfd1b';
    const searchInput = document.getElementById('searchInput').value;

    // Make sure the input is not empty
    if (!searchInput) {
        alert('Please enter ingredients');
        return;
    }

    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchInput}&apiKey=${apiKey}`;

    // Fetch recipes from Spoonacular API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayRecipes(data))
        .catch(error => console.error('Error fetching recipes:', error));
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    if (recipes.length === 0) {
        recipesContainer.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        // Create a link for each recipe to the recipe details page
        const recipeLink = document.createElement('a');
        recipeLink.href = `recipe.html?id=${recipe.id}`;
        recipeLink.target = '_blank';  // Open link in a new tab
        recipeLink.innerHTML = `<h3>${recipe.title}</h3><img src="${recipe.image}" alt="${recipe.title}">`;

        // Append the link to the recipe container
        recipeElement.appendChild(recipeLink);

        recipesContainer.appendChild(recipeElement);
    });
}


