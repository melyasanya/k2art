import { useMediaQuery } from "react-responsive";
import MenuBtn from "../../../public/icons/burger.svg";

export const Menu = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    isMobile && (
      <div className="">
        <button>
          <MenuBtn width={20} height={20} />
        </button>
      </div>
    )
  );
};
