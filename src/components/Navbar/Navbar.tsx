import Link from "next/link";

interface NavbarProp {
  className?: string;
}

export const Navbar: React.FC<NavbarProp> = ({ className }) => {
  return (
    <ul className={`flex gap-3 xl:gap-[40px] ${className}`}>
      <li>
        <Link href={""}>About artist</Link>
      </li>
      <li>
        <Link href={""}>Artworks</Link>
      </li>
      <li>
        <Link href={""}>Workshops</Link>
      </li>
      <li>
        <Link href={""}>Contact me</Link>
      </li>
    </ul>
  );
};
