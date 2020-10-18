import React from 'react';
import {render} from '@testing-library/react';
import Hello from './Hello';

describe('<Hello />', () => {
  it('renders correct text', () => {
    const { getByText } = render(<Hello name="Larry" />);
    expect(getByText('Hello Larry')).toBeTruthy();
  });
});
