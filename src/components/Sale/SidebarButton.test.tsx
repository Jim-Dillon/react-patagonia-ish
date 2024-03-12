import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SidebarButton from './SidebarButton';

describe('SidebarButton', () => {
    it('renders button with text', () => {
        const buttonText = 'Test Button';
        render(<SidebarButton text={buttonText} />);

        expect(screen.getByText(buttonText)).toBeInTheDocument();
    });

    it('toggles arrow icon when clicked', () => {
        render(<SidebarButton text='Test Button' />);
        const button = screen.getByText('Test Button');
        const arrowIcon = button.querySelector('img');

        fireEvent.click(button);

        expect(arrowIcon).toHaveStyle('transform: translateY(-10%) rotate(180deg)');

        fireEvent.click(button);

        expect(arrowIcon).toHaveStyle('transform: none');
    })

    it('renders children when button is clicked', () => {
        const ChildComponent = () => <div>Child Component</div>;
        render(
            <SidebarButton text="Test Button">
                <ChildComponent />
            </SidebarButton>
        );

        const button = screen.getByText('Test Button');
        fireEvent.click(button);

        expect(screen.getByText('Child Component')).toBeInTheDocument();
    });
});