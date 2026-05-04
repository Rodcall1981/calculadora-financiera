// components/Step1Form.tsx
import { FormData } from '@/lib/types';
import React from 'react';

interface Step1FormProps {
  onNext: (data: FormData) => void;
}

export default function Step1Form({ onNext }: Step1FormProps) {
  const [email, setEmail] = React.useState('');
  const [nombre, setNombre] = React.useState('');
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = 'Email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }

    if (!nombre) {
      newErrors.nombre = 'Nombre es requerido';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext({ email, nombre });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '30px 20px' }}>
      <h2 style={{ fontSize: '18px', marginBottom: '20px', color: '#333' }}>
        Cuéntame quién eres
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
          Tu correo electrónico
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          style={{
            width: '100%',
            padding: '12px',
            border: `1px solid ${errors.email ? '#d32f2f' : '#ddd'}`,
            borderRadius: '6px',
          }}
        />
        {errors.email && <p style={{ color: '#d32f2f', fontSize: '12px' }}>{errors.email}</p>}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
          Nombre completo
        </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Juan Pérez"
          style={{
            width: '100%',
            padding: '12px',
            border: `1px solid ${errors.nombre ? '#d32f2f' : '#ddd'}`,
            borderRadius: '6px',
          }}
        />
        {errors.nombre && <p style={{ color: '#d32f2f', fontSize: '12px' }}>{errors.nombre}</p>}
      </div>

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
        Siguiente
      </button>
    </form>
  );
}
