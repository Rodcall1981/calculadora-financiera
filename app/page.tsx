// app/page.tsx
'use client';

import React from 'react';
import Step1Form from '@/components/Step1Form';
import Step2Choice from '@/components/Step2Choice';
import Step3Input from '@/components/Step3Input';
import Step4Report from '@/components/Step4Report';
import Step5CTA from '@/components/Step5CTA';
import { FormData, CalculationMode, CalculationResult } from '@/lib/types';

export default function Home() {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState<FormData | null>(null);
  const [mode, setMode] = React.useState<CalculationMode | null>(null);
  const [inputValue, setInputValue] = React.useState<number | null>(null);
  const [result, setResult] = React.useState<CalculationResult | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleStep1Next = (data: FormData) => {
    setFormData(data);
    setStep(2);
  };

  const handleStep2Next = (selectedMode: CalculationMode) => {
    setMode(selectedMode);
    setStep(3);
  };

  const handleStep3Next = async (value: number) => {
    setInputValue(value);
    setLoading(true);

    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode,
          valor: value,
        }),
      });

      if (!response.ok) throw new Error('Calculation failed');

      const calculationResult = await response.json();
      setResult(calculationResult);

      // Save to database
      await fetch('/api/save-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData?.email,
          nombre: formData?.nombre,
          modo: mode,
          valor_ingresado: value,
          resultado: calculationResult,
        }),
      });

      setStep(4);
    } catch (error) {
      alert('Error al calcular. Intenta de nuevo.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStep4Next = () => {
    setStep(5);
  };

  const handleRestart = () => {
    setStep(1);
    setFormData(null);
    setMode(null);
    setInputValue(null);
    setResult(null);
  };

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div style={{ background: '#2c3e50', color: 'white', padding: '20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 600 }}>Calculadora Financiera</h1>
        </div>

        {loading && (
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <p>Calculando...</p>
          </div>
        )}

        {!loading && (
          <>
            {step === 1 && <Step1Form onNext={handleStep1Next} />}
            {step === 2 && (
              <Step2Choice
                onNext={handleStep2Next}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && mode && (
              <Step3Input
                mode={mode}
                onNext={handleStep3Next}
                onBack={() => setStep(2)}
              />
            )}
            {step === 4 && result && inputValue !== null && (
              <Step4Report
                mode={mode!}
                result={result}
                inputValue={inputValue}
                onNext={handleStep4Next}
                onBack={() => setStep(3)}
              />
            )}
            {step === 5 && formData && (
              <Step5CTA
                email={formData.email}
                nombre={formData.nombre}
                onRestart={handleRestart}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
