// components/Step3Input.tsx
import { CalculationMode } from '@/lib/types';
import React from 'react';

interface Step3InputProps {
  mode: CalculationMode;
  onNext: (value: number) => void;
  onBack: () => void;
}

export default function Step3Input({ mode, onNext, onBack }: Step3InputProps) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const numValue = parseFloat(value);

    if (!value) {
      setError('Por favor ingresa un valor');
      return;
    }

    if (isNaN(numValue)) {
      setError('Solo números permitidos');
      return;
    }

    if (numValue <= 0) {
      setError('Ingresa un número mayor a 0');
      return;
    }

    onNext(numValue);
  };

  const isModeA = mode === 'A';
  const label = isModeA ? 'Tu sueldo líquido mensual (en pesos)' : 'Valor de la propiedad (en UF)';
  const placeholder = isModeA ? '1500000' : '2000';
  const hint = isModeA
    ? 'Ingresa el monto que recibes cada mes en tu cuenta'
    : 'Ejemplo: si la propiedad cuesta 2000 UF, ingresa 2000';

  return (
    <form onSubmit={handleSubmit} style={{ padding: '30px 20px' }}>
      <button
        type="button"
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#2c3e50',
          textDecoration: 'underline',
          marginBottom: '15px',
        }}
      >
        ← Volver
      </button>

      <h2 style={{ fontSize: '18px', marginBottom: '20px', color: '#333' }}>
        {isModeA ? '¿Cuál es tu sueldo líquido?' : '¿Cuál es el valor de la propiedad?'}
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
          {label}
        </label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '12px',
            border: `1px solid ${error ? '#d32f2f' : '#ddd'}`,
            borderRadius: '6px',
          }}
        />
        {error && <p style={{ color: '#d32f2f', fontSize: '12px' }}>{error}</p>}
      </div>

      <p style={{ fontSize: '12px', color: '#999', marginBottom: '20px' }}>{hint}</p>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '12px',
          background: '#2c3e50',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Ver resultado
      </button>
    </form>
  );
}
