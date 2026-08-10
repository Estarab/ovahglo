import React from 'react';
import { Link } from 'react-router-dom'; // For routing to another page

// Import logos from assets
import zanacoLogo from '../assets/logos/zanaco.png'; 
import seedcoLogo from '../assets/logos/seedco-logo.png';
import lubambeLogo from '../assets/logos/Lubambe_Logo_-_Limited__1_-removebg-preview.png';
import kansanshiLogo from '../assets/projects/logo.jpeg';
import kalumbilaLogo from '../assets/projects/logo.jpeg';
import chilangaLogo from '../assets/projects/logo.jpeg';
import zambiaSugarLogo from '../assets/projects/logo.jpeg';
import zambiaBreweriesLogo from '../assets/projects/logo.jpeg';
import cocaColaLogo from '../assets/projects/logo.jpeg';
import batLogo from '../assets/projects/logo.jpeg';
import zescoLogo from '../assets/projects/logo.jpeg';
import handymansLimeLogo from '../assets/projects/logo.jpeg';
import scawLimitedLogo from '../assets/projects/logo.jpeg';

const RefProjectComp = () => {
  const clients = [
    {
      name: "ZANACO",
      services: ["Branding", "Printing"],
       logo: zanacoLogo,
    },
    {
      name: "SEED CO",
      services: ["Branding", "Printing"],
      logo: seedcoLogo,
    },
    {
      name: "Lubambe Copper Mines",
      services: ["Drives", "Training", "Maintenance Services"],
      logo: lubambeLogo,
    },
    {
      name: "Kansanshi",
      services: ["Drives", "Maintenance Services", "Training"],
      logo: kansanshiLogo,
    },
    {
      name: "Kalumbila",
      services: ["Training Services"],
      logo: kalumbilaLogo,
    },
    {
      name: "Chilanga Cement (Previously Lafarge)",
      services: ["PLC Automation", "Instrumentation", "Drives", "Training", "Maintenance and Installation Services"],
      logo: chilangaLogo,
    },
    {
      name: "Zambia Sugar",
      services: ["Maintenance Services", "Training"],
      logo: zambiaSugarLogo,
    },
    {
      name: "Zambia Breweries",
      services: ["PLC and SCADA Automation", "Maintenance Services"],
      logo: zambiaBreweriesLogo,
    },
    {
      name: "Coca Cola Beverages Africa",
      services: ["Maintenance Services", "Motors"],
      logo: cocaColaLogo,
    },
    {
      name: "British American Tobacco",
      services: ["Automation Products", "Training"],
      logo: batLogo,
    },
    {
      name: "Zesco",
      services: ["PLC Automation", "Instrumentation", "Training", "Maintenance Services"],
      logo: zescoLogo,
    },
    {
      name: "Handyman's Lime",
      services: ["Maintenance Services", "Drives", "Switchgear", "Automation Products"],
      logo: handymansLimeLogo,
    },
    {
      name: "SCAW Limited",
      services: ["Drives", "Maintenance"],
      logo: scawLimitedLogo,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h2 className="text-4xl font-semibold text-center mb-6">Reference Projects And Customers</h2>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-slate-700 shadow-lg rounded-lg">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left"></th>
              <th className="px-4 py-2 text-left">Client</th>
              <th className="px-4 py-2 text-left">Services</th>
              {/* <th className="px-4 py-2 text-left">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {clients.slice(0, 2).map((client, index) => (
              <tr key={index} className="border-b hover:bg-slate-900">
                <td className="px-4 py-2">
                  <img src={client.logo} alt={client.name} className="w-16 h-16 object-contain" />
                </td>
                <td className="px-4 py-2">{client.name}</td>
                <td className="px-4 py-2">
                  {client.services.slice(0, 2).join(', ')} {/* Show only the first two services */}
                </td>
                {/* <td className="px-4 py-2">
                  <Link to={`/client/${client.name}`} className="text-blue-500 hover:text-blue-700 font-medium">See More</Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* See More Button */}
      <div className="text-center mt-4">
        {/* <Link to="/ref-projects" className="text-white bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600">See All </Link> */}
        <Link to="#" className="text-white bg-pink-500 px-6 py-2 rounded-full hover:bg-blue-600">See All </Link>
      </div>
    </div>
  );
};

export default RefProjectComp;
