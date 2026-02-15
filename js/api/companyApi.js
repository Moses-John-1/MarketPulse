const API_KEY = 'HZQ8T03LLVRV9UT5';
const BASE_URL = 'https://www.alphavantage.co/query';

export async function fetchCompanyData(symbol) {
  const url = `${BASE_URL}?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Company API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.Name) {
      throw new Error('Company profile not found');
    }

    return {
      name: data.Name,
      industry: data.Industry,
      description: data.Description,
      website: data.OfficialSite
    };

  } catch (error) {
    throw new Error('Unable to retrieve company information');
  }
}