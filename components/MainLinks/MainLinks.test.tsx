import { render, screen } from '@testing-library/react';
import { MainLinks } from './MainLinks';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<MainLinks />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    );
  });
});
