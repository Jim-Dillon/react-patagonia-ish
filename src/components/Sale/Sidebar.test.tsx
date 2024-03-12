import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    it('renders Sidebar component with correct elements', () => {
        render(<Sidebar />);

        // Sidebar Buttons
        expect(screen.getByText('Size')).toBeInTheDocument();
        expect(screen.getByText('Price')).toBeInTheDocument();
        expect(screen.getByText('Colour')).toBeInTheDocument();
        expect(screen.getByText('Features')).toBeInTheDocument();
        expect(screen.getByText('Materials & Our Footprint')).toBeInTheDocument();

        // Assert sidebar tags within Colour sidebar button
        expect(screen.getByText('L (2)')).toBeInTheDocument();
        expect(screen.getByText('M (2)')).toBeInTheDocument();
        expect(screen.getByText('£200 - £249 (2)')).toBeInTheDocument();
        expect(screen.getByText('£300 - £349 (2)')).toBeInTheDocument();
    });
});