import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </main>
  );
}
