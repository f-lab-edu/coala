'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps, ReactNode } from 'react';

type Props = ComponentProps<typeof Link> & { icon: ReactNode };

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
