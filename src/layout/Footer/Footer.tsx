"use client";
import { Contacts } from "@/components/Contacts/Contacts";
import { Container } from "@/components/Container/Container";
import { Logo } from "@/components/Logo/Logo";
import { Navbar } from "@/components/Navbar/Navbar";
import { SocialMedia } from "@/components/SocialMedia/SocialMedia";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
  const mobile = useMediaQuery({ maxWidth: 767 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <footer className="bg-bgColor">
      <Container className="py-[20px] ">
        <div className="flex items-center justify-between mb-6 md:mb-10">
          <Logo />
          {!isMobile && <Navbar />}
        </div>

        <div className="flex items-center justify-between">
          <Contacts />
          {!isMobile && (
            <SocialMedia className="w-[32px] h-[32px] xl:w-[44px] xl:h-[44px]" />
          )}
        </div>
      </Container>
    </footer>
  );
};
