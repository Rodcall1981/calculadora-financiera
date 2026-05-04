// app/api/save-lead.ts
import { NextRequest, NextResponse } from 'next/server';
import { saveLead } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, nombre, modo, valor_ingresado, resultado } = body;

    if (!email || !nombre || !modo || !valor_ingresado || !resultado) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await saveLead({
      email,
      nombre,
      modo,
      valor_ingresado,
      resultado,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Save lead error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
