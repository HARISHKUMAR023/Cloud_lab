import React from 'react';
import Link from 'next/link';
import { RiDashboard3Fill } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { BsCpuFill } from "react-icons/bs";
import { FiSettings, FiLayers } from "react-icons/fi"; // Additional icons
import { MdOutlineWebAsset } from "react-icons/md";
import { HiServerStack } from "react-icons/hi2";
import { TiCloudStorage } from "react-icons/ti";


const Menuitems = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: <RiDashboard3Fill />
  },
  {
    id: 2,
    name: "Services",
    href: "/services",
    icon: <FaServer />
  },
  {
    id: 3,
    name: "Compute",
    href: "/compute",
    icon: <BsCpuFill />
  },
  {
    id: 4,
    name: "Settings",
    href: "/settings",
    icon: <FiSettings />
  },
  {
    id: 5,
    name: "Layers",
    href: "/layers",
    icon: <FiLayers />
  },
];

const Services = [
  {
    id: 1,
    title: "Compute",
    servicesList: [
      {
        id: 1,
        icone:<BsCpuFill />,
        name: " VM Compute",
        href: "/statichosting"
      },
      {
        id: 2,
        icone:<TiCloudStorage />,   
        name: "Storage Compute",
        href: "/dynamichosting"
      }
    ]
  },
  {
    id: 2,
    title: "Services",
    servicesList: [
      {
        id: 1,
        icone:<MdOutlineWebAsset />,
        name: "Static Hosting",
        href: "/services"
      },
      {
        id: 2,
        icone:<HiServerStack />,   
        name: "Dynamic Hosting",
        href: "/dynamichosting"
      }
    ]
  },
  {
    id: 3,
    title: "NoSQL DataBases",
    servicesList: [
      {
        id: 1,
        icone:<MdOutlineWebAsset />,
        name: "Mongodb",
        href: "/statichosting"
      },
      {
        id: 2,
        icone:<HiServerStack />,   
        name: "Redies",
        href: "/dynamichosting"
      }
    ]
  },
  {
    id: 4,
    title: "SQl Databases",
    servicesList: [
      {
        id: 1,
        icone:<MdOutlineWebAsset />,
        name: "Mysql",
        href: "/statichosting"
      },
      {
        id: 2,
        icone:<HiServerStack />,   
        name: "Postgress SQL",
        href: "/dynamichosting"
      }
    ]
  }
];

const Menu = () => {
  return (
    <div className="flex flex-col  h-full p-6 shadow-2xl rounded-lg text-slate-800 overflow-y-scroll">
      <nav className="space-y-3">
        {Menuitems.map((item) => (
          <Link key={item.id} href={item.href}>
            <div className="flex items-center p-3 rounded-md  transition-all duration-300  cursor-pointer">
              <span className="text-2xl">{item.icon}</span>
              <span className="ml-3 text-sm font-bold">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>

      <div className="mt-8">
        {Services.map((service) => (
          <div key={service.id}>
            <p className="uppercase tracking-wide text-gray-400 text-sm font-bold mb-3">
              {service.title}
            </p>
            {service.servicesList.map((item) => (
              <Link key={item.id} href={item.href}>
                <div className="flex items-center pl-6 py-2 rounded-md  transition-all duration-300  cursor-pointer">
                <span className="text-2xl">{item.icone}</span>
                  <span className="text-sm">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
