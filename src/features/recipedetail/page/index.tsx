import { ActionIcon } from '@mantine/core';
import Image from 'next/image';
import {
  IconChevronLeft,
  IconClock,
  IconStar,
  IconToolsKitchen2,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export const RecipeDetail = () => {
  const router = useRouter();

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-10 mx-auto max-w-[390px] border-b border-[#ececec] bg-white">
        <div className="mx-auto flex h-[65px] max-w-[353px] items-center">
          <ActionIcon variant="default" aria-label="Back" onClick={router.back}>
            <IconChevronLeft />
          </ActionIcon>
          <span className="ml-[100] text-[18px] font-bold text-[#442a00]">
            レシピ詳細
          </span>
        </div>
      </header>

      <figure>
        <div className="relative mt-[65px] w-screen">
          <Image src="" alt="recipe image" fill />
        </div>
      </figure>
      <main>
        <div className="mx-auto mt-0 max-w-[353px]">
          <div className="mt-[28px] border-b border-[#ececec]">
            <h1 className="mb-[12px] text-[20px] font-bold text-[#ef797b]">
              {'recipe-name'}
            </h1>
            <p className="mb-[25px] text-[14px] font-medium text-[#442a00]">
              {'recipe-id'}
            </p>
          </div>

          <ul className="mt-[22px] list-none border-b border-[#ececec] pb-[24px]">
            <li className="mb-2 flex items-center gap-1 text-[12px]">
              <IconClock className="text-[#442a00]" stroke={2} size={14} />
              <span className="font-medium text-[#442a00]">
                調理時間:{'time'}分以下
              </span>
            </li>
            <li className="mb-2 flex items-center gap-1 text-[12px]">
              <IconToolsKitchen2
                className="text-[#442a00]"
                stroke={2}
                size={14}
              />
              <span className="font-medium text-[#442a00]">
                カロリー:{'kcal'}kcal
              </span>
            </li>
            <li className="mb-2 flex items-center gap-1 text-[12px]">
              <IconStar className="text-[#442a00]" stroke={2} size={14} />
              <span className="font-medium text-[#442a00]">
                難易度:{'difficulty'}
              </span>
            </li>
          </ul>

          <div className="mb-[24px] border-b border-[#ececec] pb-[24px]">
            <h2 className="mt-[24px] text-[16px] font-bold text-[#ef797b]">
              材料
            </h2>
            <div
              v-for="(name, i) in recipeData.ingredients"
              className="mb-[10px] mt-[12px] flex justify-between text-[14px] font-medium text-[#442a00]"
            >
              <p>{'name'}</p>
              <p>{'amount'}</p>
            </div>
          </div>

          <div className="mb-[100px]">
            <h2 className="mb-[12px] mt-[28px] text-[16px] font-bold text-[#ef797b]">
              作り方
            </h2>
            <ol className="list-none p-0">
              <li
                v-for="instruction in recipeData.cooking_instructions"
                className="relative mb-[18px] border-b border-[#ececec] pb-[16px] pl-[27px] text-[14px] font-normal text-[#442a00]"
              >
                {'instruction'}
              </li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
};
