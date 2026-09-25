import Link from "next/link";
import { ArrowRight } from "lucide-react";

type GoldButtonProps = {
  href: string;
  children: React.ReactNode;
  showArrow?: boolean;
};

export default function GoldButton({
  href,
  children,
  showArrow = true,
}: GoldButtonProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 bg-[#B08D57] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#967445]"
    >
      {children}

      {showArrow && (
        <ArrowRight
          size={17}
          className="transition-transform group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}