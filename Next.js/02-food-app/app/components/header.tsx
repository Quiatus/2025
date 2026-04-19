import Image from "next/image";

export default function Header() {
  return (
    <>
      <Image src="/logo.png" alt="image" width={500} height={486} />
      <h1>Welcome to this NextJS Course!</h1>
    </>
  )
}
