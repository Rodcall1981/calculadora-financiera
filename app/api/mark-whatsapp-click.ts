// app/api/mark-whatsapp-click.ts
import { NextRequest, NextResponse } from 'next/server';
import { markWhatsAppClick } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Missing email' },
        { status: 400 }
      );
    }

    await markWhatsAppClick(email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mark WhatsApp click error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
