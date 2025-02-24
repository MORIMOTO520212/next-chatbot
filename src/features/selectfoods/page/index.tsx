'use client';

import { useFoodsState } from '@/hooks/useFoodsState';
import { ActionIcon } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const SelectFoods = () => {
  const router = useRouter();
  const { foods } = useFoodsState();

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-10 mx-auto max-w-[390px] border border-b border-[#ececec] bg-white">
        <div className="mx-auto flex h-[65px] max-w-[353px] items-center justify-start">
          <ActionIcon variant="default" aria-label="Back" onClick={router.back}>
            <IconChevronLeft />
          </ActionIcon>
          <span className="ml-[121px] text-[18px] font-bold text-[#442a00]">
            食材選択
          </span>
        </div>
      </header>
      <div className="pt-[20[px] mt-[71px]">
        <main className="mx-auto max-w-[390px]">
          <div>
            <p>{foods.length}品の食材を取得しました。</p>
            <div>
              <h1>食材を選択してください</h1>
            </div>
            <div>
              <ul className="flex flex-wrap justify-between">
                {foods.map((food) => (
                  <li
                    className="listnone relative text-[#442A00]"
                    key={food.name}
                  >
                    <div className="relative h-[106px] w-[106px] rounded-full border-[6px] border-[#9e9e9e] p-[3px] opacity-50">
                      <Image
                        src={food.imgSrc}
                        className="rounded-full object-cover"
                        alt={food.name}
                        fill
                      />
                    </div>
                    <p className="mb-[21px] flex w-[106px] justify-around overflow-hidden text-ellipsis whitespace-nowrap text-center text-[15px] font-bold text-[#442A00]">
                      {food.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
