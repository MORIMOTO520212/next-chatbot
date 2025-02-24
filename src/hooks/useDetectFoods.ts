import { DataContent } from 'ai';
import { generateText } from '@/app/actions/generateText';
import { Foods } from '@/types/Foods';
import { QueryMessage } from '@/types/QueryMessage';
import { useSearchImage } from './useSearchImage';

type DetectFoodsProps = {
  dataUrls: string[];
};

export const useDetectFoods = () => {
  const { searchImage } = useSearchImage();

  const detectFoods = async ({
    dataUrls,
  }: DetectFoodsProps): Promise<Foods | undefined> => {
    const messages: QueryMessage = [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'ステップバイステップで考えてください。この画像を上から順に詳しく見て、冷蔵庫の中にある食材を可能な限り見つけ出してください。そして、食材名を書き出し、`setFoods`ツールを呼び出してください。',
          },
          ...dataUrls.map(
            (dataUrl) =>
              ({
                type: 'image',
                image: dataUrl,
              }) as { type: 'image'; image: DataContent | URL },
          ),
        ],
      },
    ];

    const result = await generateText({ messages });

    const foods = await Promise.all(
      result.toolCalls
        .map((call) =>
          call.args.foods.map(async (x) => ({
            imgSrc: await searchImage(x.name),
            ...x,
          })),
        )
        .flat(),
    );

    return foods;
  };

  return {
    detectFoods,
  };
};
