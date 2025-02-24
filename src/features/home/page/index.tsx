'use client';
import React from 'react';
import Image from 'next/image';
import { IconFlower, IconThumbUpFilled } from '@tabler/icons-react';
import { FooterButton } from '@/components/FooterButton';
import { RECOMMENDATION_RECIPES, SEASON_RECIPES } from '../constants/recipe';
import { useDetectFoods } from '@/hooks/useDetectFoods';
import { useConvertImageToDataUrl } from '@/hooks/useConvertImageToDataUrl';
import { useFoodsState } from '@/hooks/useFoodsState';
import { useRouter } from 'next/navigation';

export const Home = () => {
  const router = useRouter();
  const { convertImageToDataUrl } = useConvertImageToDataUrl();
  const { setFoods } = useFoodsState();
  const { detectFoods } = useDetectFoods();

  const handleUploadButton = async (file: File[]) => {
    const dataUrls = await convertImageToDataUrl(file);
    const foods = await detectFoods({ dataUrls });
    console.log(foods);
    if (foods && foods.length > 0) {
      setFoods(foods);
      router.push('/selectfoods');
    }
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-10 mx-auto max-w-[390px] bg-white">
        <div className="relative flex h-[71px] justify-center border-b border-[#ececec]">
          <Image
            className="object-cover"
            src="/images/recipe-ai.png"
            alt="Recipe AI Logo"
            fill
          />
        </div>
      </header>
      <div className="mx-auto mt-[71px] max-w-[390px] pb-[122px] pt-[20px]">
        <div className="mx-auto max-w-[353px]">
          <div className="flex justify-start gap-2">
            <IconThumbUpFilled color="#ff9e9f" />
            <h2 className="text-base font-bold text-[#442a00]">
              おすすめのレシピ
            </h2>
          </div>
          {RECOMMENDATION_RECIPES.map((recipe, index) => (
            <div
              key={index}
              className="mb-[20px] mt-[21px] flex justify-center gap-4 border-b border-[#ececec] pb-[20px]"
            >
              <div className="relative w-[100px]">
                <Image
                  className="object-contain"
                  src={recipe.src}
                  alt={recipe.alt}
                  fill
                />
              </div>
              <div className="flex-1">
                <h3 className="mb-[6px] mt-[3px] font-bold text-[#442a00]">
                  {recipe.title}
                </h3>
                <p className="text-[12px] font-medium leading-[1.6] text-[#908574]">
                  {recipe.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-[353px]">
          <div className="flex justify-start gap-2">
            <IconFlower color="#ff9e9f" />
            <h2 className="text-base font-bold text-[#442a00]">季節のレシピ</h2>
          </div>
          {SEASON_RECIPES.map((recipe, index) => (
            <div
              key={index}
              className="mb-[20px] mt-[21px] flex justify-center gap-4 border-b border-[#ececec] pb-[20px]"
            >
              <div className="relative w-[100px]">
                <Image
                  className="object-contain"
                  src={recipe.src}
                  alt={recipe.alt}
                  fill
                />
              </div>
              <div className="flex-1">
                <h3 className="mb-[6px] mt-[3px] font-bold text-[#442a00]">
                  {recipe.title}
                </h3>
                <p className="text-[12px] font-medium leading-[1.6] text-[#908574]">
                  {recipe.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <FooterButton type={1} onChange={handleUploadButton} />
      </div>
    </>
  );
};
