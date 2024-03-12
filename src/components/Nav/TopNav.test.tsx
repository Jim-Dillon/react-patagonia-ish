import { render, screen } from '@testing-library/react';
import TopNav from './TopNav';

describe('TopNav', () => {
  it('renders TopNav component without errors', () => {
    render(<TopNav />);
  });

  it('renders all necessary elements', () => {
    render(<TopNav />);
    expect(screen.getByAltText('storybook icon')).toBeInTheDocument();
    expect(screen.getByText('View all the React components in Storybook')).toBeInTheDocument();
    expect(screen.getByAltText('open icon')).toBeInTheDocument();
    expect(screen.getByAltText('patagonia logo')).toBeInTheDocument();
    // You can add more assertions for other necessary elements
  });

  it('renders HeadButton components with correct iconSVG and className', () => {
    render(<TopNav />);
    const burgerIcon = screen.getByTestId('burger-icon');
    const searchIcon = screen.getByTestId('search-icon');
    const userIcon = screen.getByTestId('user-icon');
    const heartIcon = screen.getByTestId('heart-icon');
    const basketIcon = screen.getByTestId('basket-icon');

    expect(burgerIcon).toBeInTheDocument();
    expect(burgerIcon).toHaveClass('burgerIcon');
    expect(burgerIcon.querySelector('svg')).toBeInTheDocument();

    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveClass('searchIcon');
    expect(searchIcon.querySelector('svg')).toBeInTheDocument();

    expect(userIcon).toBeInTheDocument();
    expect(userIcon).toHaveClass('userIcon');
    expect(userIcon.querySelector('svg')).toBeInTheDocument();

    expect(heartIcon).toBeInTheDocument();
    expect(heartIcon).toHaveClass('heartIcon');
    expect(heartIcon.querySelector('svg')).toBeInTheDocument();

    expect(basketIcon).toBeInTheDocument();
    expect(basketIcon).toHaveClass('basketIcon');
    expect(basketIcon.querySelector('svg')).toBeInTheDocument();
  });
});
