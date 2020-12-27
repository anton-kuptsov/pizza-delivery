export const getIngredients = state => state.ingredients.data;

export const getIngredientsByCategory = category => state => {
  if (state.ingredients.pending) {
    return [];
  }
  return state.ingredients.data.filter(i => i.category === category);
};

export const getIngredientNameBySlug = name => state => {
  if (state.ingredients.pending) {
    return null;
  }
  return state.ingredients.data.find(i => i.slug === name)?.name;
};

export const getIsLoading = state => state.ingredients.pending;
export const getIsError = state => state.ingredients.error;
