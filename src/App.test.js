import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('shows the hero introduction and theme toggle', async () => {
  render(<App />);

  expect(await screen.findByText(/hi, i\'m/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
});

test('navigates to the About page from the navbar', async () => {
  render(<App />);
  const user = userEvent.setup();

  await user.click(screen.getByRole('link', { name: /about/i }));

  expect(await screen.findByText(/about me/i)).toBeInTheDocument();
});
