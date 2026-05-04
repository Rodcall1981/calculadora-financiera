// components/Step2Choice.tsx
import { CalculationMode } from '@/lib/types';

interface Step2ChoiceProps {
  onNext: (mode: CalculationMode) => void;
  onBack: () => void;
}

export default function Step2Choice({ onNext, onBack }: Step2ChoiceProps) {
  return (
    <div style={{ padding: '30px 20px' }}>
      <button
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
        ¿Qué quieres calcular?
      </h2>

      <button
        onClick={() => onNext('A')}
        style={{
          display: 'block',
          width: '100%',
          padding: '20px',
          marginBottom: '15px',
          border: '2px solid #ddd',
          borderRadius: '8px',
          background: 'white',
          textAlign: 'left',
          cursor: 'pointer',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#2c3e50';
          e.currentTarget.style.background = '#f9f9f9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#ddd';
          e.currentTarget.style.background = 'white';
        }}
      >
        <strong style={{ display: 'block', fontSize: '16px', marginBottom: '5px', color: '#2c3e50' }}>
          💰 ¿Cuánto me prestan según mi sueldo?
        </strong>
        <span style={{ fontSize: '12px', color: '#666' }}>
          Ingresa tu sueldo y descubre cuántas UF puedes pedir prestado
        </span>
      </button>

      <button
        onClick={() => onNext('B')}
        style={{
          display: 'block',
          width: '100%',
          padding: '20px',
          marginBottom: '15px',
          border: '2px solid #ddd',
          borderRadius: '8px',
          background: 'white',
          textAlign: 'left',
          cursor: 'pointer',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#2c3e50';
          e.currentTarget.style.background = '#f9f9f9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#ddd';
          e.currentTarget.style.background = 'white';
        }}
      >
        <strong style={{ display: 'block', fontSize: '16px', marginBottom: '5px', color: '#2c3e50' }}>
          🏠 ¿Cuánto sueldo necesito para una propiedad?
        </strong>
        <span style={{ fontSize: '12px', color: '#666' }}>
          Elige el valor de la propiedad que te interesa y sabremos cuánto sueldo necesitas
        </span>
      </button>
    </div>
  );
}
