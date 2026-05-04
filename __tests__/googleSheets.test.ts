// __tests__/googleSheets.test.ts
import { fetchUFFromGoogleSheets } from '@/lib/googleSheets';

describe('fetchUFFromGoogleSheets', () => {
  it('should return a positive number', async () => {
    const uf = await fetchUFFromGoogleSheets();
    expect(typeof uf).toBe('number');
    expect(uf).toBeGreaterThan(0);
  });

  it('should return a number between 30000 and 50000 (reasonable UF range)', async () => {
    const uf = await fetchUFFromGoogleSheets();
    expect(uf).toBeGreaterThan(30000);
    expect(uf).toBeLessThan(50000);
  });
});
