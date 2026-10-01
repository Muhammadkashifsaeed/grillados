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
      className={`flex items-center gap-1 lg:gap-1.5 transition-all duration-300 font-bold text-xs md:text-sm lg:text- xl:text-xs 2xl:text-sm tracking-wide uppercase whitespace-nowrap px-1.5 md:px-2 py-1 rounded-md ${
        isActive ? 'text-[#DAAF18]' : 'text-white hover:text-[#DAAF18] group-hover:text-[#DAAF18]'
      }`}
      {...props}
    >
      {icon && <span className="flex items-center justify-center opacity-90">{icon}</span>}
      <span>{label}</span>
      {dropdown && <span className="ml-0.5 text- opacity-70">▼</span>}
    </Link>
  );
};
