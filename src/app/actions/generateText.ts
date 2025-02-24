'use server';

import { QueryMessage } from '@/types/QueryMessage';
import { openai } from '@ai-sdk/openai';
import { generateText as chatCompletion, tool } from 'ai';
import { z } from 'zod';

type Props = {
  messages: QueryMessage;
};
export const generateText = async ({ messages }: Props) => {
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
