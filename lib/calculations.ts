// lib/calculations.ts
import { CalculationResultA, CalculationResultB } from './types';

export function calculateLoanCapacityA(sueldo: number): CalculationResultA {
  const conSubsidio = Math.round((sueldo / 750) * 10) / 10;
  const sinSubsidio = Math.round((sueldo / 850) * 10) / 10;

  return {
    conSubsidio,
    sinSubsidio,
  };
}

export function calculateRequiredSalaryB(
  propiedadUF: number,
  ufActual: number
): CalculationResultB {
  // Cuota a 30 años: PAGO(5.08%/12, 360, -(80% * propiedad))
  const tasaMensual = 5.08 / 100 / 12;
  const nPeriodos = 360;
  const montoUF = 0.8 * propiedadUF;

  // Implementación de función PAGO (PMT en Excel)
  // PMT = monto * (tasa * (1 + tasa)^n) / ((1 + tasa)^n - 1)
  const cuotaUF =
    (montoUF * tasaMensual * Math.pow(1 + tasaMensual, nPeriodos)) /
    (Math.pow(1 + tasaMensual, nPeriodos) - 1);

  // Cuota en pesos = cuota UF * valor UF
  const cuotaPesos = cuotaUF * ufActual;

  // Sueldo requerido = cuota en pesos / 25%
  const sueldoRequerido = cuotaPesos / 0.25;

  return {
    sueldoRequerido: Math.round(sueldoRequerido),
  };
}
