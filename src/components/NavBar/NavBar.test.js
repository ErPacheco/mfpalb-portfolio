import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '.';
import { Router, MemoryRouter } from 'react-router-dom';

describe('NavBar', () => {
  it('should render Navigation Bar', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText('About me')).toBeInTheDocument();
  });
});

