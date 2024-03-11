import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FooterButton from './FooterButton';

describe('FooterButton Component', () => {
    it('renders the button with correct text', () => {
        const buttonText = 'Customer Service';
        const { getByText } = render(<FooterButton text={buttonText} />);
        const buttonElement = getByText(buttonText);
        expect(buttonElement).toBeInTheDocument;
    });

    it('renders the button with correct class', () => {
        const buttonText = 'Customer Service';
        const { getByText } = render(<FooterButton text={buttonText} />);
        const buttonElement = getByText(buttonText);
        expect(buttonElement).toHaveClass('footer__HelpButton');
    });
});    