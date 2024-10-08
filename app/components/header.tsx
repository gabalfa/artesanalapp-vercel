"use client";
import React from "react";

import SideNav from "@/app/components/side-nav";

function Header() {
  return (
    <section className=" h-screen bg-cover bg-no-repeat bg-center bg-[url('/home-image.png')]">
      <div className="h-24 border-b p-8 flex flex-wrap md:flex-row items-center justify-between"></div>
      <SideNav />

      <div className="flex items-center justify-center w-full md:h-full p-8">
        <p className="text-6xl md:text-8xl md:w-1/2 text-white mx-auto self-center">
          Bienvenida al destino para los amantes de la artesanía
        </p>
        <p className="text-6xl w-1/2 text-white mx-auto self-center"></p>
      </div>
    </section>
  );
}

export default Header;
