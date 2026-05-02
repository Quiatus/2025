'use client'

import Link from "next/link";
import styles from './nav-link.module.css'
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode
}

export default function NavLink({href, children}: Props) {
  const path = usePathname()
  return (
    <Link href={href} className={path.startsWith(href) ? styles.active : undefined}>{children}</Link>
  )
}
