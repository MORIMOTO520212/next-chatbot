import { Recipe } from '@/types/Recipe';
import { atom, useAtom } from 'jotai';

const recipeStateAtom = atom<Recipe>([]);

export const useRecipeState = () => {
  const [recipes, setRecipes] = useAtom<Recipe>(recipeStateAtom);
  return {
    recipes,
    setRecipes,
  };
};
