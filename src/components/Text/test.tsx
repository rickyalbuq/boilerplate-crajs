import React from 'react';
import { render, screen } from '@testing-library/react';

import Text from '.';

describe('<Text />', () => {
  it('should render the heading', () => {
    const { container } = render(<Text />);

    expect(screen.getByRole('heading', { name: /Text/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
