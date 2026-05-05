export const metadata = {
  title: 'Calculadora Financiera Inmobiliaria',
  description: 'Calcula tu capacidad de préstamo o sueldo requerido',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
