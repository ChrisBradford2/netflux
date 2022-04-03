import Image from "next/image";

function Header() {
  return (
    <header className="header">
      <h1 className="text-3xl font-bold underline">This is the header</h1>
      <Image
        className="object-contain"
        src="/Netflux.svg"
        width={200}
        height={100}
        alt="Logo"
      />
    </header>
  )
}

export default Header
