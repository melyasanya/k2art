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
      <Container className="flex py-[20px] items-start justify-between">
        <div className="flex flex-col gap-5">
          <Logo />
          <Contacts />
        </div>
        {!isMobile && (
          <div className="flex flex-col items-end gap-5">
            <Navbar />
            <SocialMedia className="w-[32px] h-[32px]" />
          </div>
        )}
      </Container>
    </footer>
  );
};
