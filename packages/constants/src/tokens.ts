import invariant from 'tiny-invariant';
import { CHAINS } from './chains';

export enum TOKENS {
  STAVAX = 'STAVAX',
}

export const TOKENS_BY_NETWORK: {
  [key in CHAINS]?: { [key in TOKENS]?: string };
} = {
  [CHAINS.Mainnet]: {
    [TOKENS.STAVAX]: '0x0000000000000000000000000000000000000000',
  },
  [CHAINS.Avalido]: {
    [TOKENS.STAVAX]: '0x5db9a7629912ebf95876228c24a848de0bfb43a9',
  },
};

export const getTokenAddress = (chainId: CHAINS, token: TOKENS): string => {
  const tokens = TOKENS_BY_NETWORK[chainId];
  invariant(tokens != null, 'Chain is not supported');

  const address = tokens[token];
  invariant(address != null, 'Token is not supported');

  return address;
};
