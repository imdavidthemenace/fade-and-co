import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { addMinutes, parseISO, isValid } from "date-fns";
import { BookingStatus } from "@prisma/client";

const bookingSchema = z.object({
  serviceId: z.string().min(1),
  barberId: z.string().min(1),
  date: z.string().min(1),
  time: z.string().regex(/^\d{2}:\d{2}$/),
  customerName: z.string().min(2).max(100),
  customerEmail: z.string().email(),
  customerPhone: z.string().min(7).max(30),
  notes: z.string().max(500).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = bookingSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid booking details",
          details: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const {
      serviceId,
      barberId,
      date,
      time,
      customerName,
      customerEmail,
      customerPhone,
      notes,
    } = result.data;

    // ----------------------------------------
    // 1. Get service
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
    // 2. Get barber
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
    // 3. Build appointment start time
    // ----------------------------------------

    const startTime = parseISO(`${date}T${time}:00`);

    if (!isValid(startTime)) {
      return NextResponse.json(
        { error: "Invalid appointment date or time" },
        { status: 400 }
      );
    }

    const endTime = addMinutes(startTime, service.duration);

    // ----------------------------------------
    // 4. Prevent bookings in the past
    // ----------------------------------------

    if (startTime <= new Date()) {
      return NextResponse.json(
        { error: "You cannot book a time in the past" },
        { status: 400 }
      );
    }

    // ----------------------------------------
    // 5. Check for conflicting booking
    // ----------------------------------------

    const conflictingBooking = await prisma.booking.findFirst({
      where: {
        barberId,
        status: {
          in: ["PENDING", "CONFIRMED"],
        },

        startTime: {
          lt: endTime,
        },

        endTime: {
          gt: startTime,
        },
      },
    });

    if (conflictingBooking) {
      return NextResponse.json(
        {
          error:
            "This time is no longer available. Please choose another time.",
        },
        { status: 409 }
      );
    }

    // ----------------------------------------
    // 6. Create booking
    // ----------------------------------------

    const booking = await prisma.booking.create({
      data: {
        serviceId,
        barberId,

        customerName,
        customerEmail,
        customerPhone,
        bookingDate: startTime,
        startTime,
        endTime,

        notes: notes || null,

       status: BookingStatus.CONFIRMED,
       
      },

      include: {
        service: true,
        barber: true,
      },
    });

    // ----------------------------------------
    // 7. Return booking
    // ----------------------------------------

    return NextResponse.json(
      {
        success: true,
        booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking creation error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while creating your booking.",
      },
      { status: 500 }
    );
  }
}
