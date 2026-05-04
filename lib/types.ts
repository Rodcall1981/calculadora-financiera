// lib/types.ts

export type CalculationMode = 'A' | 'B';

export interface FormData {
  email: string;
  nombre: string;
}

export interface CalculationInputA {
  sueldo: number; // in pesos
}

export interface CalculationInputB {
  propiedad: number; // in UF
}

export interface CalculationResultA {
  conSubsidio: number; // in UF
  sinSubsidio: number; // in UF
}

export interface CalculationResultB {
  sueldoRequerido: number; // in pesos
}

export type CalculationResult = CalculationResultA | CalculationResultB;

export interface Lead {
  id?: string;
  email: string;
  nombre: string;
  modo: CalculationMode;
  valorIngresado: number;
  resultado: CalculationResult;
  fechaCreacion?: string;
  clickeadoWhatsApp?: boolean;
}
