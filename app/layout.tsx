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
      <body>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
