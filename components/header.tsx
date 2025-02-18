import { ActionIcon } from '@mantine/core';
import { IconSettings2 } from '@tabler/icons-react';

export function Header() {
  return (
    <div className="flex justify-between px-8 py-4">
      <h1 className="text-2xl">Next Chatbot</h1>
      <ActionIcon size="md" variant="transparent" color="primary" radius="xl">
        <IconSettings2 size={25} />
      </ActionIcon>
    </div>
  );
}
