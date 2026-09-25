import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  addMinutes,
  format,
  isBefore,
  parseISO,
} from "date-fns";
import { BookingStatus } from "@prisma/client";

const SHOP_OPEN = 9;
const SHOP_CLOSE = 19;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const barberId = searchParams.get("barberId");
    const serviceId = searchParams.get("serviceId");
    const date = searchParams.get("date");

    if (!barberId || !serviceId || !date) {
      return NextResponse.json(
        {
          error: "barberId, serviceId and date are required",
        },
        { status: 400 }
      );
    }

    // ----------------------------------------
    // Get barber
    // ----------------------------------------

    const barber = await prisma.barber.findUnique({
      where: {
        id: barberId,
      },
    });

    if (!barber) {
      return NextResponse.json(
        { error: "Barber not found" },
        { status: 404 }
      );
    }

    // ----------------------------------------
    // Get service
    // ----------------------------------------

    const service = await prisma.service.findUnique({
      where: {
        id: serviceId,
      },
    });

    if (!service) {
      return NextResponse.json(
        { error: "Service not found" },
        { status: 404 }
      );
    }

    // ----------------------------------------
    // Get existing bookings for the selected day
    // ----------------------------------------

    const dayStart = parseISO(`${date}T00:00:00`);
    const dayEnd = parseISO(`${date}T23:59:59`);

    const bookings = await prisma.booking.findMany({
  where: {
    barberId,

        status: {
          in: [
            BookingStatus.PENDING,
            BookingStatus.CONFIRMED,
          ],
        },

    startTime: {
      gte: dayStart,
      lte: dayEnd,
    },
  },

  select: {
    startTime: true,
    endTime: true,
  },

  orderBy: {
    startTime: "asc",
  },
});

    // ----------------------------------------
    // Generate possible times
    // ----------------------------------------

    const availableTimes: string[] = [];

    let currentTime = parseISO(
      `${date}T${String(SHOP_OPEN).padStart(2, "0")}:00:00`
    );

    const closingTime = parseISO(
      `${date}T${String(SHOP_CLOSE).padStart(2, "0")}:00:00`
    );

    while (true) {
      const appointmentEnd = addMinutes(
        currentTime,
        service.duration
      );

      // Appointment cannot run beyond closing
      if (appointmentEnd > closingTime) {
        break;
      }

      // Don't show times in the past
      if (isBefore(new Date(), currentTime)) {
        const hasConflict = bookings.some((booking) => {
          return (
            currentTime < booking.endTime &&
            appointmentEnd > booking.startTime
          );
        });

        if (!hasConflict) {
          availableTimes.push(
            format(currentTime, "HH:mm")
          );
        }
      }

      // 30-minute booking intervals
      currentTime = addMinutes(currentTime, 30);
    }

    return NextResponse.json({
      date,
      barberId,
      serviceId,
      duration: service.duration,
      availableTimes,
    });
  } catch (error) {
    console.error("Availability error:", error);

    return NextResponse.json(
      {
        error: "Unable to calculate availability",
      },
      { status: 500 }
    );
  }
}
