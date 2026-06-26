import { ReactNode } from "react"

interface NewsDetailLayoutProps {
  children: ReactNode
}

export default function NewsDetailLayout({ children, modal }: NewsDetailLayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  )
}