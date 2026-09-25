import { formatInTimeZone } from "date-fns-tz";

const SHOP_NAME = "Fade & Co.";
const SHOP_LOCATION =
  "78 Bree Street, Cape Town, 8001, South Africa";

const TIMEZONE = "Africa/Johannesburg";

type CalendarBooking = {
  customerName: string;
  customerEmail: string;
  service: {
    name: string;
    duration: number;
  };
  barber: {
    name: string;
  };
  startTime: string | Date;
  endTime: string | Date;
  notes?: string | null;
};

function toGoogleDate(date: Date) {
  return formatInTimeZone(
    date,
    TIMEZONE,
    "yyyyMMdd'T'HHmmss"
  );
}

function toICSDate(date: Date) {
  return formatInTimeZone(
    date,
    TIMEZONE,
    "yyyyMMdd'T'HHmmss"
  );
}

function escapeICS(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

export function createGoogleCalendarUrl(
  booking: CalendarBooking
) {
  const start = new Date(booking.startTime);
  const end = new Date(booking.endTime);

  const title = `${SHOP_NAME} — ${booking.service.name}`;

  const details = [
    `Customer: ${booking.customerName}`,
    `Service: ${booking.service.name}`,
    `Barber: ${booking.barber.name}`,
    `Duration: ${booking.service.duration} minutes`,
    booking.notes ? `Notes: ${booking.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${toGoogleDate(start)}/${toGoogleDate(end)}`,
    details,
    location: SHOP_LOCATION,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function createICSContent(
  booking: CalendarBooking
) {
  const start = new Date(booking.startTime);
  const end = new Date(booking.endTime);

  const uid = `booking-${Date.now()}@fadeandco.co.za`;

  const description = [
    `Customer: ${booking.customerName}`,
    `Service: ${booking.service.name}`,
    `Barber: ${booking.barber.name}`,
    booking.notes ? `Notes: ${booking.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Fade & Co.//Booking System//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",

    "BEGIN:VEVENT",

    `UID:${uid}`,

    `DTSTAMP:${formatInTimeZone(
      new Date(),
      "UTC",
      "yyyyMMdd'T'HHmmss'Z'"
    )}`,

    `DTSTART;TZID=${TIMEZONE}:${toICSDate(start)}`,
    `DTEND;TZID=${TIMEZONE}:${toICSDate(end)}`,

    `SUMMARY:${escapeICS(
      `${SHOP_NAME} — ${booking.service.name}`
    )}`,

    `DESCRIPTION:${escapeICS(description)}`,

    `LOCATION:${escapeICS(SHOP_LOCATION)}`,

    `STATUS:CONFIRMED`,

    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}