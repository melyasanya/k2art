"use client";
import Link from "next/link";

export const AuthorDescr = () => {
  const handleWorksBtnClick = () => {
    console.log("hi");
  };

  return (
    <div className="w-[300px] md:w-[400px] xl:w-[600px]">
      <h1>
        Hi, I am Katya Korolyuk <br /> An artist
      </h1>
      <p className="text-[9px] md:text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum
        nostrum ea cumque perspiciatis soluta officia ducimus, inventore
        necessitatibus laboriosam eius provident excepturi, consectetur vel a
        blanditiis veritatis eligendi. Aperiam!
      </p>
      <div className="flex justify-start gap-[40px] mt-[20px]">
        <button className="border-2 border-black" onClick={handleWorksBtnClick}>
          <Link href={""}>To my works</Link>
        </button>
        <button className="border-2 border-black">
          <Link href={""}>Contact me</Link>
        </button>
      </div>
    </div>
  );
};
