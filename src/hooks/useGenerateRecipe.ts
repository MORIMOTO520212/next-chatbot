import { generateRecipe as _generateRecipe } from '@/app/actions/completions';
import { useSearchImage } from './useSearchImage';

export const useGenerateRecipe = () => {
  const { searchImage } = useSearchImage();

  const generateRecipe = async (foods: string[]) => {
    const result = await _generateRecipe(foods);

    const recipes = await Promise.all(
      result.toolCalls
        .map((call) =>
          call.args.recipeList.map(async (item) => ({
            thumbnailUrl: await searchImage(item.title),
            ...item,
          })),
        )
        .flat(),
    );
    return recipes;
  };
  return {
    generateRecipe,
  };
};
