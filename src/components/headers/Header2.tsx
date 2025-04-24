"use client";
import React, { useEffect, useState } from "react";
import AboveHeader from "./AboveHeader";
import MainHeader from "./MainHeader";

const Header2 = () => {
  const [isAboveHeaderVisible, setIsAboveHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Check initial scroll position
    const initialScrollY = window.scrollY;
    setIsAboveHeaderVisible(initialScrollY === 0);
    setLastScrollY(initialScrollY);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show above header when at the top
      if (currentScrollY === 0) {
        setIsAboveHeaderVisible(true);
        return;
      }

      // Hide above header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsAboveHeaderVisible(false);
      } else {
        setIsAboveHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <AboveHeader isVisible={isAboveHeaderVisible} />
      <MainHeader isAboveHeaderVisible={isAboveHeaderVisible} />
    </div>
  );
};

export default Header2;
