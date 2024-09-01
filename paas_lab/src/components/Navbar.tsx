"use client"
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import bg1 from '../../public/game3.jpg';
import bg2 from '../../public/game2.jpg';
import bg3 from '../../public/game4.jpg';
import bg4 from '../../public/game5.jpg';
import { IoColorPaletteSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";

interface NavbarProps {
  changeBackground: (image: StaticImageData) => void;
}

const Navbar: React.FC<NavbarProps> = ({ changeBackground }) => {
  const [thememodel, setthememodel] = useState(false);

  const toggleThemeModel = () => {
    setthememodel(prevState => !prevState);
  };

  return (
    <div className=' py-3 flex justify-between items-center shadow-lg'>
      <div className="flex text-white ml-2 p-2">
        <h4 className="text-xs">Dashboard /</h4>
        <h4 className="text-xs"> Overview</h4>
      </div>

      <div className="flex">
        <button className="text-primary text-2xl mx-5"><AiFillMessage />
        </button>
        <button className="text-primary text-2xl mx-5" onClick={toggleThemeModel}>
          <IoColorPaletteSharp />
        </button>
        <h1 className="bg-white text-black rounded-full p-2 px-4 mx-4">h</h1>
      </div>

      {thememodel && (
        <div className="fixed right-1 top-16 bg-[#071829f2] h-auto w-[450px] rounded-md flex flex-wrap">
          <Image src={bg1} alt="bg1" className="w-52 h-32 p-3 rounded cursor-pointer" onClick={() => { changeBackground(bg1); toggleThemeModel(); }} />
          <Image src={bg2} alt="bg2" className="w-52 h-32 p-3 rounded cursor-pointer" onClick={() => { changeBackground(bg2); toggleThemeModel(); }} />
          <Image src={bg3} alt="bg3" className="w-52 h-32 p-3 rounded cursor-pointer" onClick={() => { changeBackground(bg3); toggleThemeModel(); }} />
          <Image src={bg4} alt="bg4" className="w-52 h-32 p-3 rounded cursor-pointer" onClick={() => { changeBackground(bg4); toggleThemeModel(); }} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
