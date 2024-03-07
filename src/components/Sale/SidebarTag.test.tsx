import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SidebarTag from './SidebarTag'; 

test('renders the SidebarTag component', () => {
  const tagName = 'TestTag';
  render(
    <SidebarTag tag={tagName} />
  );
  const tagElement: HTMLElement = screen.getByText(tagName);
  expect(tagElement).toBeInTheDocument();
});

