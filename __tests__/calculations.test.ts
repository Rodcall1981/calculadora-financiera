// __tests__/calculations.test.ts
import { calculateLoanCapacityA, calculateRequiredSalaryB } from '@/lib/calculations';

describe('calculateLoanCapacityA', () => {
  it('should calculate UF with subsidy when sueldo is 1500000', () => {
    const result = calculateLoanCapacityA(1500000);
    expect(result.conSubsidio).toBe(2000);
  });

  it('should calculate UF without subsidy when sueldo is 1500000', () => {
    const result = calculateLoanCapacityA(1500000);
    expect(result.sinSubsidio).toBeCloseTo(1764.7, 1);
  });

  it('should handle edge case with sueldo = 750', () => {
    const result = calculateLoanCapacityA(750);
    expect(result.conSubsidio).toBe(1);
  });

  it('should round to 1 decimal place', () => {
    const result = calculateLoanCapacityA(2000000);
    expect(result.sinSubsidio).toBeCloseTo(2352.9, 1);
  });
});

describe('calculateRequiredSalaryB', () => {
  it('should calculate required salary for 2000 UF property with UF at 37300', () => {
    const result = calculateRequiredSalaryB(2000, 37300);
    // Cuota = (1600 UF * tasa * (1 + tasa)^360) / ((1 + tasa)^360 - 1)
    // Expected around 1,293,198
    expect(result.sueldoRequerido).toBeCloseTo(1293198, -3);
  });

  it('should handle small property value', () => {
    const result = calculateRequiredSalaryB(100, 37300);
    expect(result.sueldoRequerido).toBeGreaterThan(0);
  });
});
