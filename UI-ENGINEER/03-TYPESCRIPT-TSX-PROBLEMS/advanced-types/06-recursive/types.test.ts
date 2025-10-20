import { YourType } from './types';

describe('Types', () => {
  it('should be type-safe', () => {
    const test: YourType<string> = null as any;
    expect(true).toBe(true);
  });
});
