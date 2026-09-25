"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import BookingInfoModal from "@/components/booking/BookingInfoModal";

export default function BookingPrompt() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#111111] px-5 py-3 text-sm font-medium text-white shadow-xl transition hover:bg-[#292929]"
      >
        <Info size={16} />
        Before You Book
      </button>

      <BookingInfoModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}