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

    window.open('https://chat.whatsapp.com/[AQUI_VA_EL_ID_DEL_GRUPO]', '_blank');
  };

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1
        style={{
          fontSize: '28px',
          marginBottom: '28px',
          color: '#FF2E00',
          fontFamily: "'Space Mono', monospace",
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        ¡Felicidades, agente!
      </h1>

      <div
        style={{
          background: 'linear-gradient(135deg, #fff4e6 0%, #ffe8cc 100%)',
          padding: '32px 24px',
          borderRadius: '12px',
          marginBottom: '20px',
          textAlign: 'center',
          border: '2px solid #FFA500',
          animation: 'fadeIn 0.6s ease-out',
        }}
      >
        <p
          style={{
            fontSize: '16px',
            color: '#FF2E00',
            marginBottom: '12px',
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
          }}
        >
          ¡Tu misión está lista! Únete al grupo exclusivo de inversores.
        </p>
        <p style={{ fontSize: '14px', marginBottom: '20px', color: '#FF6B35' }}>
          Acceso inmediato a estrategias, proyectos y asesoría de la comunidad Misión 007
        </p>
        <button
          onClick={handleWhatsAppClick}
          style={{
            width: '100%',
            padding: '14px 40px',
            background: 'linear-gradient(135deg, #FFA500 0%, #FF2E00 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(255, 46, 0, 0.2)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 46, 0, 0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 46, 0, 0.2)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          🎯 Unirse a Misión 007
        </button>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={onRestart}
          style={{
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #fff9f5 0%, #fffbf8 100%)',
            color: '#FF2E00',
            border: '2px solid #FFA500',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: "'Space Mono', monospace",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#FF2E00';
            e.currentTarget.style.background = 'linear-gradient(135deg, #ffe8cc 0%, #fff4e6 100%)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#FFA500';
            e.currentTarget.style.background = 'linear-gradient(135deg, #fff9f5 0%, #fffbf8 100%)';
          }}
        >
          Calcular de nuevo
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
