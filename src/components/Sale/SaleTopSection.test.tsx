import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SaleTopSection from './SaleTopSection';

describe('SaleTopSection', () => {
    it('renders SaleTopSection component without errors', () => {
        render(<SaleTopSection />);
    });

    it('renders filter section correctly', () => {
        render(<SaleTopSection />);
        expect(screen.getByText('Filter & Sort')).toBeInTheDocument();
        expect(screen.getByAltText('filter icon')).toBeInTheDocument();
    });

    it('renders Sale buttons with correct text', () => {
        render(<SaleTopSection />);
        expect(screen.getByText("Women's")).toBeInTheDocument();
        expect(screen.getByText("Men's")).toBeInTheDocument();
        expect(screen.getByText("Kids' & Baby")).toBeInTheDocument();
        expect(screen.getByText("Packs & Gear")).toBeInTheDocument();
        expect(screen.getByText("Snow Gear")).toBeInTheDocument();
      });
})