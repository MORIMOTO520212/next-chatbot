import { Foods } from '@/types/Foods';
import { atom, useAtom } from 'jotai';

const foodsAtom = atom<Foods>([]);

export const useFoodsState = () => {
  const [foods, setFoods] = useAtom<Foods>(foodsAtom);
  return {
    foods,
    setFoods,
  };
};
