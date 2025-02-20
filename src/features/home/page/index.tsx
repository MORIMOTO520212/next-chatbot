'use client';
import React from 'react';
import Image from 'next/image';
import { IconFlower, IconThumbUpFilled } from '@tabler/icons-react';
import { FooterButton } from '@/components/FooterButton';

export const Home = () => {
  const uploadImage = (file) => {
    console.log('upload:', file);
  };

  const recommendationRecipes = [
    {
      src: '/images/recipe1.png',
      alt: 'Recipe 1',
      title: '卵とトマトの中華風炒め',
      description: '卵とトマトは意外と合います。彩りも良い一品です。。',
    },
    {
      src: '/images/recipe2.png',
      alt: 'Recipe 2',
      title: '納豆とピーマンの和えもの',
      description: 'これを作れば、ピーマン嫌いな人が減ります。',
    },
    {
      src: '/images/recipe3.png',
      alt: 'Recipe 3',
      title: '牛乳のクリームシチュー',
      description:
        'じっくり煮込んだかのような、深い味わいが口いっぱいに広がります。',
    },
  ] as const;

  const seasonRecipes = [
    {
      src: '/images/recipe4.png',
      alt: 'recipe4',
      title: '塩ちゃんこ鍋',
      description: '力士たちが毎日のように食べるあの味！ボリューム満点です。',
    },
    {
      src: '/images/recipe4.png',
      alt: 'recipe4',
      title: 'かつおだし香るお雑煮',
      description:
        'お正月にお餅買いすぎちゃったと思っているそこのあなた！この味を知ってしまえば、一瞬で餅が消えます。',
    },
    {
      src: '/images/recipe4.png',
      alt: 'recipe4',
      title: '濃厚ガトーショコラ',
      description: '甘いものが食べたくなるこの季節にぴったりのデザートです。',
    },
  ] as const;

  return (
    <div className="mx-auto mt-[71px] max-w-[390px] pb-[122px] pt-[20px]">
      <div className="mx-auto max-w-[353px]">
        <div className="flex justify-start gap-2">
          <IconThumbUpFilled color="#ff9e9f" />
          <h2 className="text-base font-bold text-[#442a00]">
            おすすめのレシピ
          </h2>
        </div>
        {recommendationRecipes.map((recipe, index) => (
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
        {seasonRecipes.map((recipe, index) => (
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
      <FooterButton
        type={1}
        label="写真で食材を検出する"
        onChange={uploadImage}
      />
    </div>
  );
};
