var recipe = {
  title: 'Vatalapam',
  servings: 10,
  ingredients: ['eggs', 'palm sugar', 'coconut cream', 'more eggs']
}

console.log(recipe.title);
console.log('Serves: ' + recipe.servings);
for (var i = 0; (i < recipe.ingredients.length); i++) {
  console.log(recipe.ingredients[i]);
}
