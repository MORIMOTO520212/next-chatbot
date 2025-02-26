'use client';

import { useFoodsState } from '@/hooks/useFoodsState';
import { useGenerateRecipe } from '@/hooks/useGenerateRecipe';
import { ActionIcon } from '@mantine/core';
import {
  IconChevronLeft,
  IconClock,
  IconStar,
  IconToolsKitchen2,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import { useRecipeState } from '@/hooks/useRecipeState';
import { Recipe } from '@/types/Recipe';

export const RecipeList = () => {
  const router = useRouter();
  const { selectedFoods } = useFoodsState();
  const { generateRecipe } = useGenerateRecipe();
  const { recipes, setRecipes } = useRecipeState();

  useEffect(() => {
    generateRecipe(selectedFoods).then((recipe: Recipe) => setRecipes(recipe));
  }, []);

  const onSubmit = (recipeId: number) => {
    router.push(`/recipedetail?id=${recipeId}`);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-10 mx-auto max-w-[390px] border border-b border-[#ececec] bg-white">
        <div className="mx-auto flex h-[65px] max-w-[353px] items-center">
          <ActionIcon variant="default" aria-label="Back" onClick={router.back}>
            <IconChevronLeft />
          </ActionIcon>
          <span className="ml-[50] text-[18px] font-bold text-[#442a00]">
            あなたにオススメのレシピ
          </span>
        </div>
      </header>

      <div className="pt-[20[px] mt-[71px] overflow-hidden">
        <main className="mx-[20px] mt-[20px]">
          <ul>
            {recipes.map((item, i) => (
              <li
                className="mt-[24px] flex list-none gap-5 border-b border-[#ded6ca] pb-3 text-[14px] font-bold text-[#ef797b]"
                key={item.title}
                onClick={() => onSubmit(i)}
              >
                <div className="relative h-[100px] w-[100px]">
                  {!!item.thumbnailUrl ? (
                    <Image
                      className="object-cover"
                      src={item.thumbnailUrl}
                      alt="レシピ写真"
                      fill
                      priority={true}
                    />
                  ) : null}
                </div>
                <div className="m-0 mr-auto w-[205px] text-left">
                  <div>
                    <h2 className="mb-[3px] text-[18px] font-bold text-[#ef797b]">
                      {item.title}
                    </h2>
                    <p className="mb-[12px] text-[12px] text-[#442a00]">
                      {item.catchcopy}
                    </p>
                  </div>
                  <div className="mb-2 flex items-center justify-start gap-1 text-[12px]">
                    <IconClock
                      className="text-[#442a00]"
                      stroke={2}
                      size={14}
                    />
                    <span className="font-medium text-[#442a00]">
                      調理時間:{item.time}分以下
                    </span>
                  </div>
                  <div className="mb-2 flex items-center justify-start gap-1 text-[12px]">
                    <IconToolsKitchen2
                      className="text-[#442a00]"
                      stroke={2}
                      size={14}
                    />
                    <span className="font-medium text-[#442a00]">
                      カロリー:{item.kcal}kcal
                    </span>
                  </div>
                  <div className="mb-2 flex items-center justify-start gap-1 text-[12px]">
                    <IconStar className="text-[#442a00]" stroke={2} size={14} />
                    <span className="font-medium text-[#442a00]">
                      難易度:{item.difficulty}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};
