import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
    it('renders correctly', () => {
        const { getByText, getByPlaceholderText } = render(<Footer />);

        expect(getByText('NewsletterSignup')).toBeInTheDocument();
        expect(getByText('Get Help')).toBeInTheDocument();
        expect(getByText('Information')).toBeInTheDocument();
        expect(getByText('Sign Me Up')).toBeInTheDocument();
        expect(getByPlaceholderText('E-Mail')).toBeInTheDocument();

        expect(document.querySelector('a[href="/gb/en/privacy-policy.html"]')).toBeInTheDocument();

        expect(document.querySelector('img[src="/src/assets/british_flag.svg"]')).toBeInTheDocument();
    });
});