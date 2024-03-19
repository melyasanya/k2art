import TelegramIcon from "../../../public/icons/telegram.svg";
import InstagramIcon from "../../../public/icons/instagram.svg";
import WhatsappIcon from "../../../public/icons/whatsapp.svg";

interface SocialMediaProps {
  className: string;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ className }) => {
  return (
    <ul className="flex mt-3">
      <li>
        <a href="">
          <TelegramIcon className={`fill-black ${className}`} />
        </a>
      </li>
      <li>
        <a href="">
          <InstagramIcon className={`fill-black ${className}`} />
        </a>
      </li>
      <li>
        <a href="">
          <WhatsappIcon className={`fill-black ${className}`} />
        </a>
      </li>
    </ul>
  );
};
