const API_KEY = 'YHZQ8T03LLVRV9UT5';
const BASE_URL = 'https://www.alphavantage.co/query';

export async function fetchStockData(symbol) {
  const url = `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch stock data');
  }

  const data = await response.json();

  if (!data['Global Quote'] || Object.keys(data['Global Quote']).length === 0) {
    throw new Error('Invalid ticker symbol or no stock data found');
  }

  const quote = data['Global Quote'];

  return {
    symbol: quote['01. symbol'],
    price: parseFloat(quote['05. price']),
    change: parseFloat(quote['09. change']),
    changePercent: quote['10. change percent']
  };
}