import { Coin } from '@/app/(home)/page';

export const coins: Coin[] = [
  {
    // ava
    logo: 'https://www.cryptocompare.com/media',
    symbol: 'AVA',
    name: 'Avalanche',
    price: 1_267.15,
    change: 18.43,
    isBookmarked: false,
  },
  {
    logo: '',
    symbol: 'BNC',
    name: 'Binance Coin',
    price: 867.0,
    change: -1.88,
    isBookmarked: true,
  },
  {
    logo: 'https://www.cryptocompare.com/media/19633/btc.png',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 2_267.54,
    change: 40.93,
    isBookmarked: false,
  },
  {
    logo: 'https://www.cryptocompare.com/media/19633/btc.png',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 1_867.15,
    change: 18.43,
    isBookmarked: false,
  },
];

export const timePeriods = [
  { label: '1일', value: '1d' },
  { label: '1주', value: '1w' },
  { label: '3달', value: '3m' },
  { label: '1년', value: '1y' },
];

export const orders = [
  { id: 1, date: '10월01일', type: 'buy', amount: '1.5 BTC', price: '$60,000' },
  { id: 2, date: '09월15일', type: 'sell', amount: '0.5 BTC', price: '$20,000' },
];
