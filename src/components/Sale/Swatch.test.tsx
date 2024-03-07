import { render } from '@testing-library/react';
import Swatch from './Swatch';
// import ClothesCard from './ClothesCard';
import '@testing-library/jest-dom';

describe('Swatch component', () => {
  const testColor = 'blue';
  const onClickMock = jest.fn();

  const { getByTestId } = render(
    <Swatch color={testColor} onClick={onClickMock} />
  );

  const swatchElement = getByTestId('swatch');

  it('renders correctly with provided color', () => {
    expect(swatchElement).toBeInTheDocument();
    expect(swatchElement).toHaveClass(testColor);
  });

//   it('calls onClick function when clicked', () => {
//     fireEvent.click(swatchElement);
//     expect(onClickMock).toHaveBeenCalledTimes(1);

//     const onClick = swatchElement.onclick as Function;

//     onClick();

//     expect(ClothesCard.handleColorChange).toHaveBeenCalledTimes(1);
// });
});