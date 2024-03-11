import { render } from '@testing-library/react';
import OfferTag from './OfferTag';

describe('OfferTag component', () => {
    it('renders the offer correctly', () => {
        const offer = "10%";
        const { getByText } = render(<OfferTag offer={offer} />);
        const offerElement = getByText(`${offer} off`);
        expect(offerElement).toBeInTheDocument
    })
})