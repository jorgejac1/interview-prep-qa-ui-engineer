import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('should render', () => {
    render(<SearchBar onSearch={() => {}} />);
  });

  it('should debounce search', () => {
    // TODO: Test with fake timers
  });
});
