import { useWindowDimensions } from 'react-native';

export const calculateDimensions = () => {
  const {height, width} = useWindowDimensions();

  const calculateUnitsWidth = (numberOfUnits: number) => {
    const unity = 0.002551021;
    return width * Number((numberOfUnits * unity).toFixed(4));
  };
  const calculateUnitsHeight = (numberOfUnits: number) => {
    const unity = 0.001273333;
    return height * Number((numberOfUnits * unity).toFixed(4));
  };
  return {
    calculateUnitsWidth,
    calculateUnitsHeight,
  };
};