import { atom, useAtom } from 'jotai';

const dataUrlAtom = atom<string[]>([]);

export const useDataUrlState = () => {
  const [dataUrl, setDataUrl] = useAtom<string[]>(dataUrlAtom);
  return {
    dataUrl,
    setDataUrl,
  };
};
