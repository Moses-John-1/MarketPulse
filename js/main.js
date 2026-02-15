import { fetchStockData } from './api/stockApi.js';
import { fetchCompanyData } from './api/companyApi.js';
import { renderStock } from './ui/renderStock.js';
import { renderCompany } from './ui/renderCompany.js';
import { renderWatchlist } from './ui/renderWatchlist.js';
import { showError, clearError } from './utils/errorHandler.js';

const form = document.getElementById('search-form');
const input = document.getElementById('ticker-input');
const loadingDiv = document.getElementById('loading');

document.addEventListener('DOMContentLoaded', () => {
  renderWatchlist();
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  clearError();

  const ticker = input.value.trim().toUpperCase();

  if (!ticker) {
    showError('Please enter a ticker symbol.');
    return;
  }

  try {
    setLoading(true);

    const stockData = await fetchStockData(ticker);
    const companyData = await fetchCompanyData(ticker);

    renderStock(stockData);
    renderCompany(companyData);

  } catch (error) {
    showError(error.message);
  } finally {
    setLoading(false);
  }
});

function setLoading(isLoading) {
  if (isLoading) {
    loadingDiv.classList.remove('hidden');
    loadingDiv.innerHTML = `<span class="spinner"></span> Loading...`;
  } else {
    loadingDiv.classList.add('hidden');
    loadingDiv.innerHTML = '';
  }
}