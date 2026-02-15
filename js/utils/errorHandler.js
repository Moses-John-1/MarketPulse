export function showError(message) {
  const errorDiv = document.getElementById('error-message');
  errorDiv.textContent = message;
}

export function clearError() {
  const errorDiv = document.getElementById('error-message');
  errorDiv.textContent = '';
}