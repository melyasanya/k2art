import MenuBtn from "../../../public/icons/burger.svg";
import CloseBtn from "../../../public/icons/close.svg";
import { useEffect, useState } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  useEffect(() => {
    const closeESC = (e: any) => {
      if (e.code === "Escape") {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", closeESC);
    return () => {
      document.removeEventListener("keydown", closeESC);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="cursor-pointer p-[10px] xl:pt-0  z-20"
      >
        {isMenuOpen ? (
          <CloseBtn
            width={30}
            height={30}
            className="duration-300 text-white"
          />
        ) : (
          <MenuBtn width={30} height={30} className="duration-300" />
        )}
      </button>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </>
  );
};
