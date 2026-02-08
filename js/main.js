import { fetchStockData } from './api/stockApi.js';
import { fetchCompanyData } from './api/companyApi.js';
import { renderStock } from './ui/renderStock.js';
import { renderCompany } from './ui/renderCompany.js';
import { renderWatchlist } from './ui/renderWatchlist.js';
import { showError, clearError } from './utils/errorHandler.js';

const form = document.getElementById('search-form');
const input = document.getElementById('ticker-input');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearError();

  const ticker = input.value.trim().toUpperCase();
  if (!ticker) {
    showError('Please enter a ticker symbol');
    return;
  }

  try {
    const stockData = await fetchStockData(ticker);
    const companyData = await fetchCompanyData(ticker);

    renderStock(stockData);
    renderCompany(companyData);
  } catch (error) {
    showError(error.message);
  }
});

renderWatchlist();