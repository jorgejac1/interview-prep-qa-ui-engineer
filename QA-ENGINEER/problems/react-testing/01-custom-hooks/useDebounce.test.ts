import { renderHook } from '@testing-library/react';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should return initial value', () => {
    // TODO: Test initial value
  });

  it('should debounce changes', () => {
    // TODO: Test debouncing with jest.advanceTimersByTime()
  });
});
