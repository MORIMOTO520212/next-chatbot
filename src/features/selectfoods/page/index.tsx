'use client';

import { useFoodsState } from '@/hooks/useFoodsState';
import { ActionIcon } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FooterButton } from '@/components/FooterButton';

export const SelectFoods = () => {
  const router = useRouter();
  const { foods } = useFoodsState();
  const { selectedFoods, setSelectedFoods } = useFoodsState();

  const onTapFoodButton = (item: string) => {
    if (selectedFoods.includes(item)) {
      setSelectedFoods((prev) => [...prev.filter((x) => x !== item)]);
    } else {
      setSelectedFoods((prev) => [item, ...prev]);
    }
  };

  const onSubmit = () => {
    router.push('/recipelist');
  };

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
        <main className="mx-auto max-w-[390px] overflow-hidden">
          <p className="mb-[23px] mt-[26px] text-center text-[15px] font-bold text-[#442a00]">
            <span className="pe-1 text-[22px]">{foods.length}</span>
            品の食材を検出しました。
          </p>
          <div>
            <h1 className="mb-[29px] text-center text-[18px] font-bold text-[#ef797b]">
              食材を選択してください
            </h1>
          </div>
          <div>
            <ul className="mb-[70px] flex flex-wrap justify-evenly">
              {foods.map((food) => (
                <li
                  className="relative flex list-none flex-col gap-3 text-[#442A00]"
                  key={food.name}
                >
                  <button
                    className={`relative h-[106px] w-[106px] rounded-full border-[6px] p-[3px] ${selectedFoods.includes(food.name) ? 'border-[#ef797b] opacity-100' : 'border-[#9e9e9e] opacity-50'}`}
                    onClick={() => onTapFoodButton(food.name)}
                  >
                    <Image
                      src={food.imgSrc}
                      className="rounded-full object-cover"
                      alt={food.name}
                      fill
                    />
                  </button>
                  <p className="mb-[21px] flex w-[106px] justify-around overflow-hidden text-ellipsis whitespace-nowrap text-center text-[15px] font-bold text-[#442A00]">
                    {food.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>

      <footer>
        <FooterButton type={2} onClick={onSubmit} />
      </footer>
    </>
  );
};
