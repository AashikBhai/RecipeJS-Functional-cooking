const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    time: 25,
    difficulty: "easy",
    description: "A quick and creamy garlic pasta perfect for weeknight dinners.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Classic Caesar Salad",
    time: 20,
    difficulty: "easy",
    description: "Crisp romaine lettuce tossed with creamy Caesar dressing and croutons.",
    category: "salad"
  },
  {
    id: 3,
    title: "Chicken Stir Fry",
    time: 35,
    difficulty: "medium",
    description: "Flavorful chicken stir fry with fresh vegetables and soy sauce.",
    category: "asian"
  },
  {
    id: 4,
    title: "Beef Tacos",
    time: 40,
    difficulty: "medium",
    description: "Spiced ground beef served in warm tortillas with fresh toppings.",
    category: "mexican"
  },
  {
    id: 5,
    title: "Vegetable Curry",
    time: 65,
    difficulty: "hard",
    description: "Rich and aromatic vegetable curry simmered with spices and coconut milk.",
    category: "curry"
  },
  {
    id: 6,
    title: "Slow-Cooked Beef Stew",
    time: 120,
    difficulty: "hard",
    description: "Tender beef stew slow-cooked with potatoes, carrots, and herbs.",
    category: "stew"
  },
  {
    id: 7,
    title: "Margherita Pizza",
    time: 50,
    difficulty: "medium",
    description: "Classic Italian pizza topped with fresh mozzarella and basil.",
    category: "pizza"
  },
  {
    id: 8,
    title: "Avocado Toast",
    time: 10,
    difficulty: "easy",
    description: "Toasted bread topped with smashed avocado and seasoning.",
    category: "breakfast"
  }
];

const recipeContainer = document.querySelector("#recipe-container");

const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

const renderRecipes = (recipesArray) => {
  const recipesHTML = recipesArray
    .map(recipe => createRecipeCard(recipe))
    .join("");

  recipeContainer.innerHTML = recipesHTML;
};

renderRecipes(recipes);
