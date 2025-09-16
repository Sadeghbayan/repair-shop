import Link from "next/link";
import { Metadata } from "next";
import { ArrowRightIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Could not find requested resource",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="text-sm mb-4">Could not find requested resource</p>
      <Link
        href="/"
        className="text-sm hover:underline flex items-center gap-2 text-blue-500"
      >
        <ArrowRightIcon className="size-4" /> Return Home
      </Link>
    </div>
  );
}
