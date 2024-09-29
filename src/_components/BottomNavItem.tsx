'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

export function NavItem({ href, icon, label }: NavItemProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? 'active' : ''}>
      {icon}
      <span className="btm-nav-label">{label}</span>
    </Link>
  );
}
