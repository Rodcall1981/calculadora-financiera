// lib/calculations.ts
import { CalculationResultA, CalculationResultB } from './types';

function calculatePMT(tasaMensual: number, nPeriodos: number, monto: number): number {
  return (monto * tasaMensual * Math.pow(1 + tasaMensual, nPeriodos)) /
    (Math.pow(1 + tasaMensual, nPeriodos) - 1);
}

export function calculateLoanCapacityA(sueldo: number, ufActual: number): CalculationResultA {
  // Calcular dinámicamente basado en tasas y UF actual
  const tasaMensualSinSubsidio = 5.08 / 100 / 12;
  const tasaMensualConSubsidio = 4.07 / 100 / 12;
  const nPeriodos = 360;
  const porcentajeFinanciamiento = 0.8;
  const cargaMensual = 0.25;

  // Cuota para 1 UF de préstamo (0.8 UF financiado)
  const cuotaUFSinSubsidio = calculatePMT(tasaMensualSinSubsidio, nPeriodos, porcentajeFinanciamiento);
  const cuotaUFConSubsidio = calculatePMT(tasaMensualConSubsidio, nPeriodos, porcentajeFinanciamiento);

  // Divisor = (cuota en UF * UF valor) / carga mensual / UF
  const divisorSinSubsidio = (cuotaUFSinSubsidio * ufActual) / cargaMensual;
  const divisorConSubsidio = (cuotaUFConSubsidio * ufActual) / cargaMensual;

  const conSubsidio = Math.round((sueldo / divisorConSubsidio) * 10) / 10;
  const sinSubsidio = Math.round((sueldo / divisorSinSubsidio) * 10) / 10;

  return {
    conSubsidio,
    sinSubsidio,
  };
}

export function calculateRequiredSalaryB(
  propiedadUF: number,
  ufActual: number
): CalculationResultB {
  const tasaMensual = 5.08 / 100 / 12;
  const nPeriodos = 360;
  const montoUF = 0.8 * propiedadUF;

  const cuotaUF = calculatePMT(tasaMensual, nPeriodos, montoUF);
  const cuotaPesos = cuotaUF * ufActual;
  const sueldoRequerido = cuotaPesos / 0.25;

  return {
    sueldoRequerido: Math.round(sueldoRequerido),
  };
}
