// lib/googleSheets.ts
export async function fetchUFFromGoogleSheets(): Promise<number> {
  try {
    const response = await fetch('https://mindicador.cl/api/uf');

    if (!response.ok) {
      console.warn(`Failed to fetch UF from mindicador.cl (${response.statusText}), using default value`);
      return 40173.46;
    }

    const data = await response.json();

    if (!data.uf || !data.uf[0] || data.uf[0].valor === undefined) {
      console.warn('Invalid response from mindicador.cl, using default value');
      return 40173.46;
    }

    const ufValue = data.uf[0].valor;

    if (isNaN(ufValue)) {
      console.warn('Invalid UF value from mindicador.cl, using default value');
      return 40173.46;
    }

    return ufValue;
  } catch (error) {
    console.error('Error fetching UF:', error);
    return 40173.46;
  }
}
