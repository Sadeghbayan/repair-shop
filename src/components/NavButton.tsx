import { Icon, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NavButtonProps = {
  icon: LucideIcon;
  href: string;
  label: string;
};

export function NavButton({ icon: Icon, href, label }: NavButtonProps) {
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      aria-label={label}
      title={label}
      className="rounded-full"
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon className="size-6" />
        </Link>
      ) : (
        <Icon className="size-6" />
      )}
    </Button>
  );
}
