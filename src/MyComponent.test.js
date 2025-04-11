import { render, screen, waitFor } from '@testing-library/react';
import MyComponent from './MyComponent';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Hello, World!' }),
  })
);

test('fetches and displays data', async () => {
  render(<MyComponent />);

  // Check that the loading message appears
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  // Wait for the data to load and check if it's displayed
  await waitFor(() => expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument());
});

test('shows no data if no data returned', async () => {
  // Mock fetch to return no data
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(null),
    })
  );

  render(<MyComponent />);

  await waitFor(() => expect(screen.getByText(/No data available/i)).toBeInTheDocument());
});
