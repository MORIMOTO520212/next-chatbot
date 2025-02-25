'use client';

import { ActionIcon, Badge } from '@mantine/core';
import Image from 'next/image';
import {
  IconChevronLeft,
  IconClock,
  IconStar,
  IconToolsKitchen2,
} from '@tabler/icons-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRecipeState } from '@/hooks/useRecipeState';
import { useGenerateRecipeDetail } from '@/hooks/useGenerateRecipeDetail';
import { useEffect, useState } from 'react';
import { RecipeMethod } from '@/types/RecipeMethod';

export const RecipeDetail = () => {
  const router = useRouter();
  const { recipes } = useRecipeState();
  const searchParams = useSearchParams();
  const { generateRecipeDetail } = useGenerateRecipeDetail();
  const [recipeMethod, setRecipeMethod] = useState<RecipeMethod>();

  const recipeDetail = recipes[Number(searchParams.get('id'))];

  useEffect(() => {
    generateRecipeDetail(recipeDetail.title).then((res) =>
      setRecipeMethod(res),
    );
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-10 mx-auto max-w-[390px] border-b border-[#ececec] bg-white">
        <div className="mx-auto flex h-[65px] max-w-[353px] items-center">
          <ActionIcon variant="default" aria-label="Back" onClick={router.back}>
            <IconChevronLeft />
          </ActionIcon>
          <span className="ml-[120] text-[18px] font-bold text-[#442a00]">
            レシピ詳細
          </span>
        </div>
      </header>
      <div className="pt-[20[px] mt-[67px] overflow-hidden">
        <div className="relative h-[250px] w-screen">
          {!!recipeDetail.thumbnailUrl ? (
            <Image
              src={recipeDetail.thumbnailUrl}
              className="object-cover"
              alt="レシピ写真"
              fill
            />
          ) : null}
        </div>
        <main className="mx-[25px]">
          <div className="mx-auto mt-0 max-w-[353px]">
            <div className="mt-[28px] border-b border-[#ececec]">
              <h1 className="mb-[12px] text-[20px] font-bold text-[#ef797b]">
                {recipeDetail.title}
              </h1>
              <p className="mb-[25px] text-[14px] font-medium text-[#442a00]">
                {recipeDetail.catchcopy}
              </p>
            </div>

            <ul className="mt-[22px] list-none border-b border-[#ececec] pb-[24px]">
              <li className="mb-2 flex items-center gap-1 text-[12px]">
                <IconClock className="text-[#442a00]" stroke={2} size={14} />
                <span className="font-medium text-[#442a00]">
                  調理時間:{recipeDetail.time}分以下
                </span>
              </li>
              <li className="mb-2 flex items-center gap-1 text-[12px]">
                <IconToolsKitchen2
                  className="text-[#442a00]"
                  stroke={2}
                  size={14}
                />
                <span className="font-medium text-[#442a00]">
                  カロリー:{recipeDetail.kcal}kcal
                </span>
              </li>
              <li className="mb-2 flex items-center gap-1 text-[12px]">
                <IconStar className="text-[#442a00]" stroke={2} size={14} />
                <span className="font-medium text-[#442a00]">
                  難易度:{recipeDetail.difficulty}
                </span>
              </li>
            </ul>

            <div className="mb-[24px] border-b border-[#ececec] pb-[24px]">
              <h2 className="mt-[24px] text-[16px] font-bold text-[#ef797b]">
                材料
              </h2>
              <ul>
                {recipeMethod?.ingredients.map((_, i) => (
                  <li
                    key={i}
                    className="mb-[10px] mt-[12px] flex justify-between text-[14px] font-medium text-[#442a00]"
                  >
                    <p className="font-bold">{recipeMethod.ingredients[i]}</p>
                    <p className="font-bold">{recipeMethod.amount[i]}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-[100px]">
              <h2 className="mb-[12px] mt-[28px] text-[16px] font-bold text-[#ef797b]">
                作り方
              </h2>
              <ol>
                {recipeMethod?.cookingInstructions.map((item, i) => (
                  <li
                    key={i}
                    v-for="instruction in recipeData.cooking_instructions"
                    className={`mb-[18px] flex items-start gap-3 border-b border-[#ececec] pb-[16px] text-[14px] font-normal text-[#442a00]`}
                  >
                    <Badge size="lg" circle>
                      {i + 1}
                    </Badge>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
