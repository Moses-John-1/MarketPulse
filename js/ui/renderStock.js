import { addToWatchlist } from '../storage/watchlistStorage.js';
import { renderWatchlist } from './renderWatchlist.js';

export function renderStock(stockData) {
  const container = document.getElementById('stock-result');
  container.innerHTML = '';

  const card = document.createElement('div');
  card.classList.add('fade-in');

  const priceColor = stockData.change >= 0 ? 'green' : 'red';

  card.innerHTML = `
    <h3>${stockData.symbol}</h3>
    <p><strong>Price:</strong> $${stockData.price.toFixed(2)}</p>
    <p style="color:${priceColor}">
      <strong>Change:</strong> ${stockData.change.toFixed(2)} (${stockData.changePercent})
    </p>
  `;

  // Create button properly (not via innerHTML id)
  const addButton = document.createElement('button');
  addButton.textContent = 'Add to Watchlist';

  addButton.addEventListener('click', () => {
    addToWatchlist(stockData.symbol);
    renderWatchlist();
  });

  card.appendChild(addButton);
  container.appendChild(card);
}