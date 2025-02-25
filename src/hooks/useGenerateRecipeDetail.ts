import { generateRecipeDetail as _generateRecipeDetail } from '@/app/actions/completions';
import { RecipeMethod } from '@/types/RecipeMethod';

export const useGenerateRecipeDetail = () => {
  const generateRecipeDetail = async (
    recipeName: string,
  ): Promise<RecipeMethod> => {
    const result = await _generateRecipeDetail(recipeName);

    const recipeMethod = result.toolCalls.map((call) => call.args)[0];
    return recipeMethod;
  };
  return {
    generateRecipeDetail,
  };
};
