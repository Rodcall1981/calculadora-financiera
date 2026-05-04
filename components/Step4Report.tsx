// components/Step4Report.tsx
import { CalculationMode, CalculationResult } from '@/lib/types';

interface Step4ReportProps {
  mode: CalculationMode;
  result: CalculationResult;
  onNext: () => void;
  onBack: () => void;
}

export default function Step4Report({ mode, result, onNext, onBack }: Step4ReportProps) {
  const isModeA = mode === 'A';

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
        {isModeA ? 'Con tu sueldo puedes pedir prestado:' : 'Para esa propiedad necesitas:'}
      </h2>

      {isModeA ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
          <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase' }}>
              Con subsidio a la tasa
            </div>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#2c3e50' }}>
              {result.conSubsidio?.toLocaleString('es-CL')} UF
            </div>
          </div>
          <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase' }}>
              Sin subsidio a la tasa
            </div>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#2c3e50' }}>
              {result.sinSubsidio?.toLocaleString('es-CL')} UF
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid #27ae60' }}>
          <div style={{ fontSize: '12px', color: '#999', marginBottom: '5px', textTransform: 'uppercase' }}>
            Sueldo líquido mínimo
          </div>
          <div style={{ fontSize: '28px', fontWeight: 700, color: '#27ae60', marginBottom: '10px' }}>
            ${result.sueldoRequerido?.toLocaleString('es-CL')}
          </div>
          <div style={{ fontSize: '12px', color: '#666' }}>mensual para calificar</div>
        </div>
      )}

      <p style={{ fontSize: '12px', color: '#666', textAlign: 'center', marginTop: '20px' }}>
        ℹ️ {isModeA ? 'Estos montos son aproximados basados en tu sueldo líquido' : 'Este monto es aproximado y considera cuota a 30 años'}
      </p>

      <button
        onClick={onNext}
        style={{
          width: '100%',
          padding: '12px',
          background: '#2c3e50',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 600,
          cursor: 'pointer',
          marginTop: '30px',
        }}
      >
        Siguiente
      </button>
    </div>
  );
}
