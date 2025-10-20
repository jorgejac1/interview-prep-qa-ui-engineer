import { render, screen, waitFor } from '@testing-library/react';
import { UserProfile } from './UserProfile';

describe('UserProfile', () => {
  it('should show loading', () => {
    render(<UserProfile userId={1} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display data', async () => {
    // TODO: Mock API and test success
  });

  it('should handle errors', async () => {
    // TODO: Test error state
  });
});
