"use client"
import { useState } from "react";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import bg1 from '../../../public/game2.jpg';
import bg2 from '../../../public/game3.jpg';
import bg3 from '../../../public/game4.jpg';
import bg4 from '../../../public/game5.jpg';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [backgroundImage, setBackgroundImage] = useState<StaticImageData>(bg2);

  const changeBackground = (image: StaticImageData) => {
    setBackgroundImage(image);
  };

  return (
    // gaming backgroundImage
    // <div className="h-screen flex bg-main" style={{ backgroundImage: `url(${backgroundImage.src})` }}>

    <div className="max-h-screen flex bg-slate-100  overflow-hidden" >
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[18%]  shadow-xl  pb-24 ">
        <div className="">
        <h1 className="mx-6 text-slate-800 font-bold text-xl pt-4">CyberMade</h1>
        <h1 className="mx-6 text-gray-500 text-sm pb-4">Shadow Academy</h1>
        </div>


        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll flex flex-col">
        <Navbar changeBackground={changeBackground} />
        {children}
      </div>
    </div>
  );
}
