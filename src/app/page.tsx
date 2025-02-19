'use client';
import { Avatar, Button, Textarea } from '@mantine/core';
import { IconArrowBack, IconCommand } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
        {/* ユーザー */}
        <div>
          <Avatar size="md" color="primary" radius="xl">
            YM
          </Avatar>
        </div>
        {/* AI */}
      </div>
      <div className="w-full">
        <div className="flex gap-3 items-end max-w-[650px] w-full mx-auto">
          <Textarea
            className="flex-1"
            placeholder="質問を入力してください"
            autosize
            minRows={2}
            maxRows={5}
          />
          <Button
            color="primary"
            size="md"
            rightSection={
              <>
                <IconCommand size={14} />
                <IconArrowBack size={14} />
              </>
            }
          >
            実行
          </Button>
        </div>
      </div>
    </div>
  );
}
