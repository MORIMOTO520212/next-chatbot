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
          text: `あなたは熟練したシェフです。食材一覧：[${foods.join(',')}]。提供された食材の中で作れるレシピを5つ教えてください。
          誰でも作ることができる一般的な料理のレシピを教えてください。
          食材一覧にない食材もやむを得ない場合は使用することも可能です。
          ただし、架空のレシピは考えないでください。
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

export const generateRecipeDetail = async (recipeName: string) => {
  const messages: QueryMessage = [
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: `${recipeName}\nこのレシピに必要な1人前の材料を考えてください。また、ステップバイステップでこのレシピを作るための手順を考えてください。最後に、recipe関数を呼び出して終了します。`,
        },
      ],
    },
  ];
  const tools = {
    recipe: tool({
      parameters: z.object({
        ingredients: z
          .array(z.string())
          .describe('レシピに必要な材料のリストを渡します。'),
        amount: z
          .array(z.string())
          .describe(
            '材料の使用量をリストで渡します。例えば、1-2個、小さじ1/2、3本など。',
          ),
        cookingInstructions: z
          .array(z.string())
          .describe(
            'レシピを作るための手順をリストで渡します。手順の順番はリストの手前から始まることに注意してください。',
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
