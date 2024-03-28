import { Container } from "../Container/Container";
import { Navbar } from "../Navbar/Navbar";
import { SocialMedia } from "../SocialMedia/SocialMedia";

interface MobileMenuProps {
  isMenuOpen: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen }) => {
  return (
    <div
      className={`${
        isMenuOpen ? "translate-x-0 opacity-100" : " opacity-0 translate-x-full"
      } absolute block md:hidden top-0 left-0 w-full bg-black duration-300 pt-[76px] h-[100vh] z-10`}
    >
      <Container className="flex flex-col justify-center h-full overflow-y-auto items-center">
        <Navbar className="flex-col items-center text-white" />
        <SocialMedia className="w-[40px] h-[40px] fill-white mr-[12px]" />
      </Container>
    </div>
  );
};
