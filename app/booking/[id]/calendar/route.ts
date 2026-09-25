import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createICSContent } from "@/lib/calendar";

export async function GET(
  request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { id } = await context.params;

    const booking = await prisma.booking.findUnique({
      where: {
        id,
      },

      include: {
        service: true,
        barber: true,
      },
    });

    if (!booking) {
      return NextResponse.json(
        {
          error: "Booking not found",
        },
        {
          status: 404,
        }
      );
    }

    const icsContent = createICSContent({
      customerName: booking.customerName,

      customerEmail: booking.customerEmail,

      service: {
        name: booking.service.name,
        duration: booking.service.duration,
      },

      barber: {
        name: booking.barber.name,
      },

      startTime: booking.startTime,
      endTime: booking.endTime,

      notes: booking.notes,
    });

    return new NextResponse(icsContent, {
      status: 200,

      headers: {
        "Content-Type": "text/calendar; charset=utf-8",

        "Content-Disposition": `attachment; filename="fade-and-co-${booking.id}.ics"`,

        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error(
      "Calendar generation error:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to generate calendar event.",
      },
      {
        status: 500,
      }
    );
  }
}