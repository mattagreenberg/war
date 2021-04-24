import * as React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import ThemeToggle from '../../../client/components/ThemeToggle.jsx';
import { ThemeProvider } from '../../../client/context/themeContext';

expect.extend(toHaveNoViolations);

let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

it('renders the ThemeToggle component', () => {
  const { getByTitle } = render((
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  ), container);

  getByTitle('themeToggle');
  getByTitle('themeIcon');
});

it('should have no accessibility violations', async () => {
  const { container } = render((
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  ), container);

   const result = await axe(container);
   expect(result).toHaveNoViolations();
});

it('should change theme icons on click', async () => {
  const { getByText, getByTitle } = render((
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  ), container);

  // initial icon
  expect(getByText('🌙'))

  // switch icon to sun on click
  fireEvent.click(getByTitle('themeToggle'));
  waitFor(() => expect(getByText('🌞')));

  // switch icon back to moon on second click
  fireEvent.click(getByTitle('themeToggle'));
  waitFor(() => expect(getByText('🌙')));
});