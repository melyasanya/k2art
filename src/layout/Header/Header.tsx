"use client";
import { Container } from "@/components/Container/Container";
import { Logo } from "@/components/Logo/Logo";
import { Menu } from "@/components/Menu/Menu";
import { Navbar } from "@/components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    domLoaded && (
      <header className="bg-bgColor h-16 flex items-center md:h-28">
        <Container className="flex justify-between items-center">
          <Logo />
          {isMobile ? <Menu /> : <Navbar />}
        </Container>
      </header>
    )
  );
};
