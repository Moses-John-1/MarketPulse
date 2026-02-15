import { getWatchlist, removeFromWatchlist } from '../storage/watchlistStorage.js';

export function renderWatchlist() {
  const container = document.getElementById('watchlist');
  container.innerHTML = '';

  const list = getWatchlist();

  if (list.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = 'No stocks added yet.';
    container.appendChild(emptyMessage);
    return;
  }

  list.forEach(symbol => {
    const li = document.createElement('li');
    li.classList.add('fade-in');

   
    const symbolSpan = document.createElement('span');
    symbolSpan.textContent = symbol;

   
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('aria-label', `Remove ${symbol} from watchlist`);

    removeButton.addEventListener('click', () => {
      removeFromWatchlist(symbol);
      renderWatchlist();
    });

    li.appendChild(symbolSpan);
    li.appendChild(removeButton);

    container.appendChild(li);
  });
}