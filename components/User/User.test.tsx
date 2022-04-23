import { render, screen } from '@testing-library/react';
import { User } from './User';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<User />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    );
  });
});
