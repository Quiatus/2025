import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <img src="/logo.png" alt="A server surrounded by magic sparkles." /> */}
      <Image src="/logo.png" alt="image" width={500} height={486} />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
