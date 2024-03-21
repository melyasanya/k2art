import Link from "next/link";

interface NavbarProp {
  className?: string;
}

const sections = [
  { label: "About artist", link: "about_artist", id: "1" },
  { label: "Artworks", link: "artworks", id: "2" },
  { label: "Workshops", link: "workshops", id: "3" },
  { label: "Contact me", link: "contact_me", id: "4" },
];

export const Navbar: React.FC<NavbarProp> = ({ className }) => {
  return (
    <ul className={`flex gap-3 xl:gap-[40px] ${className}`}>
      {sections.map((el) => {
        return (
          <li key={el.id} className="text-[24px] mb-[12px]">
            <Link href={""}>{el.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
