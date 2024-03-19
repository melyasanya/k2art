import { useMediaQuery } from "react-responsive";

import { useEffect, useState } from "react";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Contacts = () => {
  const mobile = useMediaQuery({ maxWidth: 767 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <ul>
      <li>
        <p>
          Phone: <a href="">+380501111111</a>
        </p>
      </li>
      <li>
        <p>
          Email: <a href="">aaaaaa@gmail.com</a>
        </p>
      </li>
      <li>{isMobile && <SocialMedia className="w-[15px] h-[15px]" />}</li>
    </ul>
  );
};
