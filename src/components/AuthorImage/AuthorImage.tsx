import Image from "next/image";
import authorImage from "../../../public/images/depositphotos_274313380-stock-illustration-person-gray-photo-placeholder-woman.jpg";

export const AuthorImage = () => {
  return (
    <div className=" relative">
      <div className="w-[84px] h-[135px] md:w-[120px] md:h-[193px] rounded-bl-[63px] md:rounded-bl-[90px] bg-black translate-y-[7px] translate-x-[-7px] md:translate-x-[-10px] md:translate-y-[10px] rotate-[-3deg]"></div>
      <Image
        src={authorImage}
        alt="image"
        className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-bl-[70px] md:rounded-bl-[100px] absolute top-0 left-0"
      />
    </div>
  );
};
