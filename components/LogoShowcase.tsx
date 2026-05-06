// Temporary component to showcase all logo versions
import React from 'react';

export default function LogoShowcase() {
  const versions = [
    { name: 'Version 1', src: '/logo-version-1.svg' },
    { name: 'Version 2', src: '/logo-version-2.svg' },
    { name: 'Version 3', src: '/logo-version-3.svg' },
    { name: 'Version 4', src: '/logo-version-4.svg' },
  ];

  return (
    <div style={{ padding: '40px 20px', background: '#f0f9ff', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#1a3a52', marginBottom: '40px' }}>
        Logo Versions - Select circular version for footer
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {versions.map((v) => (
          <div
            key={v.name}
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: '#1a3a52', marginBottom: '20px' }}>{v.name}</h3>
            <div
              style={{
                height: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#1a3a52',
                borderRadius: '8px',
                marginBottom: '20px',
              }}
            >
              <img
                src={v.src}
                alt={v.name}
                style={{
                  height: '200px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
            <p style={{ fontSize: '12px', color: '#64748b' }}>
              {v.src}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <p style={{ color: '#64748b', fontSize: '14px' }}>
          Open browser DevTools to copy the src of the circular version
        </p>
      </div>
    </div>
  );
}
