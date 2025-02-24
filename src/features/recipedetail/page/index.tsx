import { ActionIcon } from '@mantine/core';
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
      <header className="fixed left-0 right-0 top-0 z-10 mx-auto max-w-[390px] border border-b border-[#ececec] bg-white">
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
        <div className="recipe-photo relative">
          <Image src="" alt="recipe image" fill />
        </div>
      </figure>
      <main>
        <div className="container">
          <div className="recipe-info">
            <h1 className="recipe-name">{'recipe-name'}</h1>
            <p className="recipe-copy">{'recipe-id'}</p>
          </div>

          <ul className="recipe-ave">
            <li className="mb-2 flex items-center justify-start gap-1 text-[12px]">
              <IconClock className="text-[#442a00]" stroke={2} size={14} />
              <span className="font-medium text-[#442a00]">
                調理時間:{'time'}分以下
              </span>
            </li>
            <li className="mb-2 flex items-center justify-start gap-1 text-[12px]">
              <IconToolsKitchen2
                className="text-[#442a00]"
                stroke={2}
                size={14}
              />
              <span className="font-medium text-[#442a00]">
                カロリー:{'kcal'}kcal
              </span>
            </li>
            <li className="mb-2 flex items-center justify-start gap-1 text-[12px]">
              <IconStar className="text-[#442a00]" stroke={2} size={14} />
              <span className="font-medium text-[#442a00]">
                難易度:{'difficulty'}
              </span>
            </li>
          </ul>

          <div className="material">
            <h2>材料</h2>
            <div
              v-for="(name, i) in recipeData.ingredients"
              className="ingredient"
            >
              <p>{'name'}</p>
              <p>{'amount'}</p>
            </div>
          </div>

          <div className="recipe-guide">
            <h2>作り方</h2>
            <ol>
              <li v-for="instruction in recipeData.cooking_instructions">
                {'instruction'}
              </li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
};

// TODO: 以下のcssを要素のクラスにtailwindcssに変換させて適用させてください。
// .select-title {
//   max-width: 353px;
//   margin: 0 auto;
//   height: 65px;
//   display: flex;
//   align-items: center;
//   justify-content: start;
// }

// .container {
//   max-width: 353px;
//   margin-top: 0px;
//   margin: 0px auto 0;
// }

// /* こっから下にコーディングしてください */
// /* 上も修正必要であればいじってもらって大丈夫 */

// .recipe-photo img {
//   display: block;
//   width: 100vw;
//   margin-top: 65px;
//   margin-bottom: 0px;
// }

// .recipe-name {
//   font-size: 20px;
//   color: #ef797b;
//   font-weight: 700;
//   margin-bottom: 12px;
// }

// .recipe-copy {
//   font-size: 14px;
//   color: #442a00;
//   font-weight: 500;
//   margin-bottom: 25px;
// }

// .recipe-info {
//   margin-top: 28px;
//   border-bottom: 1px solid #ececec;
// }

// .recipe-ave {
//   margin-top: 22px;
//   border-bottom: 1px solid #ececec;
//   padding-bottom: 24px;
//   list-style: none;
// }
// .recipe-ave img {
//   width: 18px;
//   height: 18px;
// }

// .recipe-ave li {
//   font-size: 14px;
//   color: #442a00;
//   font-weight: 400;
//   margin-bottom: 8px;
//   display: flex;
// }

// .recipe-ave img {
//   margin-right: 11px;
// }

// .material h2 {
//   font-size: 16px;
//   color: #ef797b;
//   font-weight: 700;
//   margin-top: 24px;
// }

// .ingredient {
//   margin-top: 12px;
//   font-size: 14px;
//   color: #442a00;
//   font-weight: 500;
//   margin-bottom: 10px;
//   display: flex;
//   justify-content: space-between;
// }

// .material {
//   margin-bottom: 24px;
//   border-bottom: 1px solid #ececec;
//   padding-bottom: 24px;
// }

// .recipe-guide h2 {
//   font-size: 16px;
//   color: #ef797b;
//   font-weight: 700;
//   margin-top: 28px;
//   margin-bottom: 12px;
// }

// .recipe-guide ol {
//   counter-reset: my-counter;
//   list-style: none;
//   padding: 0;
// }

// .recipe-guide li {
//   margin-bottom: 18px;
//   padding-left: 27px;
//   position: relative;
//   padding-bottom: 16px;
//   border-bottom: 1px solid #ececec;
//   font-size: 14px;
//   font-weight: 400;
//   color: #442a00;
// }

// .recipe-guide li:last-child {
//   border-style: none;
// }

// .recipe-guide li:before {
//   content: counter(my-counter);
//   counter-increment: my-counter;
//   background-color: #ef797b;
//   color: #ffffff;
//   display: block;
//   float: left;
//   line-height: 26px;
//   margin-left: -30px;
//   text-align: center;
//   height: 26px;
//   width: 26px;
//   border-radius: 50%;
//   margin-right: 20px;
//   font-weight: 700;
// }

// .recipe-guide {
//   margin-bottom: 100px;
// }

// .loading {
//   width: 100%;
//   display: flex;
//   justify-content: center;
// }
// .loading progress {
//   position: absolute;
//   top: 74px;
// }
