import { Button, FileButton } from '@mantine/core';
import { IconPhotoFilled } from '@tabler/icons-react';
import { FormEventHandler } from 'react';

type Props = {
  type: 1 | 2; // 1: 画像入力, 2: 食材決定
  onClick?: FormEventHandler<HTMLButtonElement>;
  onChange?: (file: File[]) => void;
};

export const FooterButton = ({ type, onClick, onChange }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full border border-t border-[#ececec] bg-white">
      <div className="mb-6">
        {type === 1 ? (
          !!onChange ? (
            <FileButton multiple onChange={onChange}>
              {(props) => (
                <Button
                  {...props}
                  variant="filled"
                  fullWidth
                  size="md"
                  radius="xl"
                  leftSection={<IconPhotoFilled color="#fff" />}
                >
                  画像で食材を入力
                </Button>
              )}
            </FileButton>
          ) : null
        ) : (
          <Button
            variant="filled"
            radius="xl"
            size="md"
            fullWidth
            onClick={onClick}
          >
            決定する
          </Button>
        )}
      </div>
    </div>
  );
};
