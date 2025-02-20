import { IconPhotoFilled } from '@tabler/icons-react';
import { ChangeEventHandler } from 'react';

type Props = {
  type: 1 | 2; // 1: 画像入力, 2: 食材決定
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const FooterButton = ({ type, onChange }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full border border-t border-[#ececec] bg-white">
      <div className="flex">
        <label className="w-75 mb-4 mt-7 flex h-11 flex-1 cursor-pointer items-center justify-center gap-4 rounded-full bg-[#ef797b] text-center text-sm font-medium text-white">
          <input
            className="hidden"
            type="file"
            name="file"
            onChange={onChange}
          />
          {type == 1 ? <IconPhotoFilled color="#fff" /> : null}
          画像で食材を入力
        </label>
      </div>
    </div>
  );
};
