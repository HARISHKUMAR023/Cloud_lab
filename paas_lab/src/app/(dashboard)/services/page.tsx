"use client"
import React, { useState } from 'react'
import { FaCheckCircle, FaExternalLinkAlt, FaRocket, FaServer, FaGlobe } from 'react-icons/fa';

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [siteName, setSiteName] = useState('');
  const [file, setFile] = useState(null);

  const handleDeployClick = () => {
    setShowModal(true);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSiteNameChange = (e) => {
    setSiteName(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Site Name:", siteName);
    console.log("Selected File:", file);
    setShowModal(false);
  };

  const sites = [
    { name: "My Portfolio", deploymentDate: "2024-08-30", url: "https://myportfolio.com" },
    { name: "Blog Site", deploymentDate: "2024-07-15", url: "https://myblog.com" },
    { name: "Company Website", deploymentDate: "2024-05-22", url: "https://mycompany.com" },
  ];

  return (
    <div className='relative'>
      <div className='bg-gradient-to-r from-rose-500 to-red-600 p-5 mt-5 mx-4 rounded-lg shadow-lg flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <FaRocket className='text-white text-3xl' />
          <div>
            <p className='text-white font-bold text-lg'>Deploy Your Site</p>
            <p className='text-white font-medium'>Fast, Secure, and Reliable</p>
          </div>
        </div>

        <div className='flex items-center space-x-6'>
          <div className='flex items-center space-x-2'>
            <FaServer className='text-white text-2xl' />
            <p className='text-white font-medium'>Unlimited Bandwidth</p>
          </div>
          <div className='flex items-center space-x-2'>
            <FaGlobe className='text-white text-2xl' />
            <p className='text-white font-medium'>Global Availability</p>
          </div>
          <button 
            className='bg-white text-red-600 hover:bg-rose-100 font-bold py-2 px-4 rounded-md shadow-md'
            onClick={handleDeployClick}
          >
            Deploy Now
          </button>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 mx-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Deployed Sites</h2>
        <div className="space-y-4">
          {sites.map((site, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-4 rounded-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {site.name}
                </h3>
                <p className="text-sm text-gray-600">Deployed on: {site.deploymentDate}</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-green-500 text-xl" title="Deployment Successful" />
                <a 
                  href={site.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 flex items-center"
                >
                  Visit Site <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white rounded-lg p-8 shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Deploy Your Site</h2>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Site Name</label>
              <input 
                type='text' 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                placeholder='Enter your site name'
                value={siteName}
                onChange={handleSiteNameChange}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Upload File</label>
              <input 
                type='file' 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                onChange={handleFileChange}
              />
            </div>
            <div className='flex justify-between'>
              <button 
                className='bg-rose-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button 
                className='bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline'
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
