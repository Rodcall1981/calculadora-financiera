// components/Step5CTA.tsx
import React from 'react';

interface Step5CTAProps {
  email: string;
  nombre: string;
  onRestart: () => void;
}

export default function Step5CTA({ email, nombre, onRestart }: Step5CTAProps) {
  const handleWhatsAppClick = async () => {
    try {
      await fetch('/api/mark-whatsapp-click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch (error) {
      console.error('Error marking WhatsApp click:', error);
    }

    const message = encodeURIComponent(
      'Hola, según la calculadora tengo capacidad de compra. Quiero conocer qué proyectos podrían ser para mí.'
    );
    const whatsappNumber = '56912345678';
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div style={{ padding: '30px 20px' }}>
      <h1 style={{ fontSize: '20px', marginBottom: '20px', color: '#2c3e50', textAlign: 'center' }}>
        ¿Quieres Ir Más Allá?
      </h1>

      <div
        style={{
          background: '#e8f5e9',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center',
          border: '2px dashed #27ae60',
        }}
      >
        <p style={{ fontSize: '14px', color: '#333', marginBottom: '15px' }}>
          <strong>¿Quieres conocer qué proyectos podrías comprar con esto?</strong>
        </p>
        <p style={{ fontSize: '12px', marginBottom: '10px', color: '#666' }}>
          Conecta con nuestro equipo y te mostraremos opciones reales de inversión
        </p>
        <button
          onClick={handleWhatsAppClick}
          style={{
            width: '100%',
            padding: '12px',
            background: '#25d366',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          💬 Agendar en WhatsApp
        </button>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={onRestart}
          style={{
            padding: '12px 20px',
            background: '#ecf0f1',
            color: '#333',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Calcular de nuevo
        </button>
      </div>
    </div>
  );
}
