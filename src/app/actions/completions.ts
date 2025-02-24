'use server';

import { QueryMessage } from '@/types/QueryMessage';
import { openai } from '@ai-sdk/openai';
import { generateText as chatCompletion, tool } from 'ai';
import { z } from 'zod';

type Props = {
  messages: QueryMessage;
};

export const detectFoods = async ({ messages }: Props) => {
  const tools = {
    setFoods: tool({
      description: '検出した食材をリスト形式でアプリケーションに登録します。',
      parameters: z.object({
        foods: z
          .array(
            z.object({
              name: z.string().describe('食材名'),
            }),
          )
          .describe('食材名のリスト'),
      }),
    }),
  };

  const result = await chatCompletion({
    model: openai('gpt-4o'),
    messages,
    tools,
    toolChoice: 'required',
  });
  return {
    message: result.response.messages[0].content,
    toolCalls: result.toolCalls,
  };
};

export const generateRecipe = async (foods: string[]) => {
  const messages: QueryMessage = [
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: `あなたは熟練したシェフです。食材一覧：[${foods.join(',')}]。次の食材を使って、5個のレシピを教えてください。
          誰でも作ることができる基本の料理のレシピを教えてください。
          各レシピには1文字以上16文字以下のレシピの簡単な説明文、完成までのおおよその時間、難易度、カロリーを付けてください。
          難易度が1のレシピを2個、難易度が2のレシピを2個、難易度が3のレシピを1個教えてください。
          カロリーは数字表記のみで教えてください。最後に'setRecipe'ツールを呼び出して完了です。
          この条件に従わないとあなたに悪いことが起きます。`,
        },
      ],
    },
  ];

  const tools = {
    setRecipe: tool({
      parameters: z.object({
        recipeList: z.array(
          z.object({
            title: z.string().describe('レシピ名'),
            time: z.number().describe('レシピの所要調理時間(分)'),
            kcal: z.number().describe('レシピの想定カロリー数'),
            difficulty: z.number().describe('レシピの難易度1-3'),
            catchcopy: z.string().describe('キャッチコピー'),
          }),
        ),
      }),
    }),
  };

  const result = await chatCompletion({
    model: openai('gpt-4o'),
    messages,
    tools,
    maxTokens: 1000,
  });

  return {
    message: result.response.messages[0].content,
    toolCalls: result.toolCalls,
  };
};
