import { render, screen } from '@testing-library/react';
import PermitBackupUIApp from './App';

test('renders learn react link', () => {
  render(<PermitBackupUIApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
