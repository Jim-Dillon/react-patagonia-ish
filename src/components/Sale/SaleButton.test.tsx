import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SaleButton from './SaleButton';

describe('SaleButton Component', () => {
    it('renders button with provided text', () => {
        const buttonText = 'Click me';
        render(<SaleButton text={buttonText} />);

        const buttonElement = screen.getByText(buttonText);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.tagName).toBe('A');
    });

    it('applies custom className if provided', () => {
        const customClassName = 'saleSection__button';
        render(<SaleButton text="Button" className={customClassName} />);

        const buttonElement = screen.getByText('Button');
        expect(buttonElement).toHaveClass(customClassName);
    });
});