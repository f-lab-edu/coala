'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type Props = Omit<ComponentPropsWithoutRef<typeof Link>, 'children'> & { icon: ReactNode; children: string };

export function NavLink({ href, icon, children }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? 'active' : ''}>
      {icon}
      <span className="btm-nav-label">{children}</span>
    </Link>
  );
}
