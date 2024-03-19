import { Container } from "../Container/Container";
import { Navbar } from "../Navbar/Navbar";

interface MobileMenuProps {
  isMenuOpen: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen }) => {
  return (
    <div
      className={`${
        isMenuOpen ? "translate-x-0 opacity-100" : " opacity-0 translate-x-full"
      } absolute block md:hidden top-0 left-0 w-full bg-black duration-300 pt-[76px] h-[100vh]`}
    >
      <Container className="py-6 flex flex-col justify-start h-full overflow-y-auto">
        <Navbar className="flex-col items-center text-white" />
      </Container>
    </div>
  );
};
