import { CHAINS } from '../src/chains';
import { getTokenAddress, TOKENS } from '../src/tokens';

describe('getTokenAddress', () => {
  test('should work if chain is correct', () => {
    expect(typeof getTokenAddress(CHAINS.Avalido, TOKENS.STAVAX)).toBe(
      'string',
    );
  });
  test('should throw if chain is incorrect', () => {
    expect(() => getTokenAddress(-1, TOKENS.STAVAX)).toThrowError();
    expect(() => getTokenAddress('' as any, TOKENS.STAVAX)).toThrowError();
  });
  test('should throw if token is incorrect', () => {
    expect(() => getTokenAddress(CHAINS.Avalido, 'weth' as any)).toThrowError();
    expect(() => getTokenAddress(CHAINS.Avalido, '' as any)).toThrowError();
  });
});
