// lib/googleSheets.ts
export async function fetchUFFromGoogleSheets(): Promise<number> {
  try {
    // Call a Google Sheets API endpoint that contains =GOOGLEFINANCE("currency:CLFCLP")
    // For now, we'll use a public Google Sheets endpoint
    // Replace SHEET_ID and RANGE with your actual sheet details

    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const RANGE = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A1'; // Cell containing the UF value
    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

    if (!SHEET_ID || !API_KEY) {
      throw new Error('Missing GOOGLE_SHEET_ID or GOOGLE_SHEETS_API_KEY environment variables');
    }

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch UF from Google Sheets: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.values || !data.values[0] || !data.values[0][0]) {
      throw new Error('No value found in Google Sheets cell');
    }

    const ufValue = parseFloat(data.values[0][0]);

    if (isNaN(ufValue)) {
      throw new Error('Invalid UF value from Google Sheets');
    }

    return ufValue;
  } catch (error) {
    console.error('Error fetching UF:', error);
    throw error;
  }
}
