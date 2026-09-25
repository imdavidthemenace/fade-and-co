"use client";

import { X, Clock, CalendarCheck } from "lucide-react";
import Link from "next/link";

type BookingInfoModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function BookingInfoModal({
  open,
  onClose,
}: BookingInfoModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4">

      <div className="relative w-full max-w-lg bg-[#F4F0E8] p-7 shadow-2xl md:p-10">

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-[#555] hover:text-[#111]"
        >
          <X size={22} />
        </button>

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
          Before You Book
        </p>

        <h2 className="mt-4 font-serif text-3xl text-[#111111]">
          A few things to know
        </h2>

        <div className="mt-7 space-y-5">

          <div className="flex gap-4">
            <Clock className="mt-1 shrink-0 text-[#B08D57]" />

            <div>
              <h3 className="font-medium text-[#111111]">
                Please arrive a few minutes early
              </h3>

              <p className="mt-1 text-sm leading-6 text-[#777]">
                This gives your barber enough time to prepare
                for your appointment.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CalendarCheck className="mt-1 shrink-0 text-[#B08D57]" />

            <div>
              <h3 className="font-medium text-[#111111]">
                Your appointment is confirmed online
              </h3>

              <p className="mt-1 text-sm leading-6 text-[#777]">
                Once booked, you can add the appointment directly
                to your calendar.
              </p>
            </div>
          </div>

        </div>

        <Link
          href="/booking"
          onClick={onClose}
          className="mt-8 block bg-[#111111] px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white"
        >
          Continue to Booking
        </Link>

      </div>

    </div>
  );
}