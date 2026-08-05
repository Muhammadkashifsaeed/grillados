import Link from "next/link";
import React from "react";
import { usePathname } from "@/i18n/routing";

interface NavItemProps {
  href: string;
  icon?: React.ReactNode;
  label: string;
  dropdown?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ href, icon, label, dropdown }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname.startsWith(href) && href !== '/');

  return (
    <Link
      href={href}
      className={`flex items-center gap-1 lg:gap-1.5 transition-all duration-300 font-bold text-[9px] md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm tracking-wide uppercase whitespace-nowrap px-1.5 md:px-2 py-1 rounded-md ${
        isActive ? 'text-[#f7b41c] bg-white/5' : 'text-white hover:text-[#f7b41c] hover:bg-white/5'
      }`}
    >
      {icon && <span className="flex items-center justify-center opacity-90">{icon}</span>}
      <span>{label}</span>
      {dropdown && <span className="ml-0.5 text-[10px] opacity-70">▼</span>}
    </Link>
  );
};
