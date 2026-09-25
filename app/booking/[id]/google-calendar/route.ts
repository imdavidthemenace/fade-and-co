import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createGoogleCalendarUrl } from "@/lib/calendar";

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

    const googleCalendarUrl =
      createGoogleCalendarUrl({
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

    return NextResponse.redirect(
      googleCalendarUrl
    );
  } catch (error) {
    console.error(
      "Google Calendar error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to create Google Calendar event.",
      },
      {
        status: 500,
      }
    );
  }
}