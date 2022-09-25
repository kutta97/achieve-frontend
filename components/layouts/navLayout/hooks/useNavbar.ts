import { useState } from 'react';

export const useNavbar = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const changeSelectedItem = (index: number) => {
    setSelectedItem(index);
  };

  return { selectedItem, changeSelectedItem };
};
