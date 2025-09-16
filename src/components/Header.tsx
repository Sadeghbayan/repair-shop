import { HomeIcon, File, UsersRound } from "lucide-react";
import Link from "next/link";
import { NavButton } from "@/components/NavButton";

export function Header() {
  return (
    <header className="animate-slide bg-background h-16 p-2  border-b sticky top-0 z-50 z-20">
      <div className="flex items-center h-12 justify-between w-full">
        <div className="flex items-center gap-2">
          <Link
            href="/home"
            className="hover:opacity-80 transition-opacity justify-center gap-2 items-center flex"
          >
            <HomeIcon className="size-6" />
            <h1 className="text-lg font-bold hidden sm:block m-0 mt-1">
              Doppio&apos;s Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <NavButton icon={File} href="/tickets" label="Tickets" />
          <NavButton icon={UsersRound} href="/customers" label="Customers" />
        </div>
      </div>
    </header>
  );
}
