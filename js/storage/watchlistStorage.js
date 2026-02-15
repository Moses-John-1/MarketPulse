const STORAGE_KEY = 'marketpulse_watchlist';

export function getWatchlist() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveWatchlist(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function addToWatchlist(symbol) {
  const list = getWatchlist();

  if (!list.includes(symbol)) {
    list.push(symbol);
    saveWatchlist(list);
    alert(`${symbol} added to watchlist`);
  } else {
    alert('Stock already in watchlist');
  }
}

export function removeFromWatchlist(symbol) {
  const list = getWatchlist().filter(item => item !== symbol);
  saveWatchlist(list);
}