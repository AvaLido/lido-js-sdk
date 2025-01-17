import invariant from 'tiny-invariant';

export enum CHAINS {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Kovan = 42,
  Kintsugi = 1337702,
  Kiln = 1337802,
  Moonbeam = 1284,
  Moonriver = 1285,
  Moonbase = 1287,
  Avalido = 43112,
  Fuji = 43113,
}

export const CHAINS_IDS = [
  CHAINS.Mainnet,
  CHAINS.Ropsten,
  CHAINS.Rinkeby,
  CHAINS.Goerli,
  CHAINS.Kovan,
  CHAINS.Avalido,
  CHAINS.Fuji,
];

export const CHAINS_COLORS: {
  [key in CHAINS]?: string;
} = {
  [CHAINS.Mainnet]: '#29b6af',
  [CHAINS.Ropsten]: '#ff4a8d',
  [CHAINS.Rinkeby]: '#f6c343',
  [CHAINS.Goerli]: '#3099f2',
  [CHAINS.Kovan]: '#9064ff',
  [CHAINS.Avalido]: '#ff0069',
  [CHAINS.Fuji]: '#ff0069',
};

export const getChainColor = (chainId: CHAINS): string => {
  const color = CHAINS_COLORS[chainId];
  invariant(color != null, 'Chain is not supported');

  return color;
};
