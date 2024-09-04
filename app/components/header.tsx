"use client";
import React from "react";

import SideNav from "@/app/components/side-nav";

function Header() {
  return (
    <header className="h-screen bg-cover bg-no-repeat bg-center bg-[url('/bg-image-9.webp')]">
      <div className="h-24 border-b p-4 flex flex-wrap md:flex-row items-center justify-between">
        <span className="text-4xl md:text-6xl text-white">Artesanal</span>
      </div>
      <SideNav />
    </header>
  );
}

export default Header;
