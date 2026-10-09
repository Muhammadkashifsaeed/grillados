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
      className={`group relative flex items-center gap-1.25 transition-all duration-300 font-bold text-[11px] lg:text-[11px] xl:text-[12px] 2xl:text-xs tracking-wide uppercase whitespace-nowrap px-2 lg:px-2 xl:px-2.5 py-1 rounded-full shrink-0 ${
        isActive 
          ? 'text-[#FAC716] bg-gradient-to-r from-[#FAC716]/25 via-[#FAC716]/15 to-transparent shadow-[0_0_20px_rgba(250,199,22,0.3)] border border-[#FAC716]/50' 
          : 'text-white/90 hover:text-[#FAC716] hover:bg-white/10 border border-transparent hover:border-white/10'
      }`}
      {...props}
    >
      {/* Active Top/Bottom Glow Accent */}
      {isActive && (
        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#FAC716] rounded-full shadow-[0_0_8px_#FAC716]" />
      )}

      {icon && (
        <span className={`flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${isActive ? 'text-[#FAC716] drop-shadow-[0_0_8px_rgba(250,199,22,0.8)]' : 'text-[#FAC716]/80 group-hover:text-[#FAC716]'}`}>
          {icon}
        </span>
      )}
      <span className="text-current transition-colors duration-300">{label}</span>
      {dropdown && (
        <span className="ml-0.5 text-[9px] transition-transform duration-300 group-hover:translate-y-0.5 text-[#FAC716]">▼</span>
      )}
    </Link>
  );
};


