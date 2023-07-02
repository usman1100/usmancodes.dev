import Link from "next/link";

export default function Header() {
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <header
      className="
    bg-black text-white
    lg:text-4xl
    py-5
    flex
    "
    >
      <div className="mx-auto space-x-10">
        {links.map((link, index) => (
          <Link href={link.url} key={index}>
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
