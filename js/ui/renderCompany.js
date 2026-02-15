
export function renderCompany(companyData) {
  const container = document.getElementById('company-result');
  container.innerHTML = '';

  const card = document.createElement('div');
  card.classList.add('fade-in');

  card.innerHTML = `
    <h3>${companyData.name}</h3>
    <p><strong>Industry:</strong> ${companyData.industry}</p>
    <p>${companyData.description}</p>
    <p>
      <a href="${companyData.website}" target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </p>
  `;

  container.appendChild(card);
}