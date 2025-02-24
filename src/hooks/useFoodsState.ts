import { Foods } from '@/types/Foods';
import { atom, useAtom } from 'jotai';

const foodsAtom = atom<Foods>([]);
const selectedFoodsAtom = atom<string[]>([]);

export const useFoodsState = () => {
  const [foods, setFoods] = useAtom<Foods>(foodsAtom);
  const [selectedFoods, setSelectedFoods] =
    useAtom<string[]>(selectedFoodsAtom);
  return {
    foods,
    setFoods,
    selectedFoods,
    setSelectedFoods,
  };
};
