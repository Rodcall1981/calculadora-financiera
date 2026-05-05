// app/api/calculate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { calculateLoanCapacityA, calculateRequiredSalaryB } from '@/lib/calculations';
import { fetchUFFromGoogleSheets } from '@/lib/googleSheets';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { mode, valor } = body;

    if (!mode || !valor) {
      return NextResponse.json(
        { error: 'Missing mode or valor' },
        { status: 400 }
      );
    }

    const ufActual = await fetchUFFromGoogleSheets();

    if (mode === 'A') {
      const result = calculateLoanCapacityA(valor, ufActual);
      return NextResponse.json(result);
    } else if (mode === 'B') {
      const result = calculateRequiredSalaryB(valor, ufActual);
      return NextResponse.json(result);
    }

    return NextResponse.json(
      { error: 'Invalid mode' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Calculate error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
