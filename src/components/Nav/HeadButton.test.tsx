import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeadButton from './HeadButton';

describe('HeadButton', () => {
    it('renders HeadButton component without errors', () => {
      render(<HeadButton />);
    });
  
    it('applies className prop correctly', () => {
      const className = 'test-class';
      const { container } = render(<HeadButton className={className} />);
      const buttonElement = container.firstChild;
      expect(buttonElement).toHaveClass(className);
    });
  
    it('renders iconSVG prop correctly', () => {
      const IconComponent = () => <svg />;
      const { container } = render(<HeadButton iconSVG={<IconComponent />} />);
      const iconElement = container.querySelector('svg');
      expect(iconElement).toBeInTheDocument();
    });
  });