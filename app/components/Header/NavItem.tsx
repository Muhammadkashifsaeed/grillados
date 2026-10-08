import { Link } from "@/i18n/routing";
import React from "react";
import { usePathname } from "@/i18n/routing";

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon?: React.ReactNode;
  label: string;
  dropdown?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ href, icon, label, dropdown, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname.startsWith(href) && href !== '/');

  return (
    <Link
      href={href}
      className={`group flex items-center gap-1 lg:gap-1.5 transition-all duration-300 font-bold text-xs md:text-sm lg:text-[11px] xl:text-xs 2xl:text-sm tracking-wide uppercase whitespace-nowrap px-1.5 md:px-2 py-1 rounded-md ${
        isActive ? 'text-[#E9A33C] drop-shadow-[0_0_8px_rgba(233,163,60,0.8)]' : 'text-white hover:text-[#E9A33C] hover:drop-shadow-[0_0_8px_rgba(233,163,60,0.5)]'
      }`}
      {...props}
    >
      {icon && <span className="flex items-center justify-center opacity-100 text-current">{icon}</span>}
      <span className="text-current">{label}</span>
      {dropdown && <span className="ml-0.5 opacity-90 text-current">▼</span>}
    </Link>
  );
};
