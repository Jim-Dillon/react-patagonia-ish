import { render } from '@testing-library/react';
import SidebarTag from './SidebarTag'; 

test('renders the SidebarTag component', () => {
  render(<SidebarTag tag="TestTag" />);
});
