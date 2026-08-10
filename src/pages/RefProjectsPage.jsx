import React from 'react';
import { Link } from 'react-router-dom'; // For routing

// Import logos from assets
import mopaniLogo from '../assets/logos/NEW-MOPANI-LOGO-2024-JPEG-2.jpg';
import konkolaLogo from '../assets/logos/konkola.png';
import lubambeLogo from '../assets/logos/Lubambe_Logo_-_Limited__1_-removebg-preview.png';
// import kansanshiLogo from '../assets/logos/40166.jpg';
import kalumbilaLogo from '../assets/logos/40166.jpg';
import chilangaLogo from '../assets/logos/Chilanga-Cement-Huaxin-Logos-Group-Color-1536x264.webp';
import zambiaSugarLogo from '../assets/logos/zambia-sugar-logo@2x-2.png';
import zambiaBreweriesLogo from '../assets/logos/ZB-Logo.png';
import cocaColaLogo from '../assets/logos/cocacola.jpg';
import batLogo from '../assets/logos/bat-logo-black.svg';
import zescoLogo from '../assets/logos/zesco.png';
import handymansLimeLogo from '../assets/logos/40166.jpg';
import scawLimitedLogo from '../assets/logos/scaw.png';

const RefProjectsPage = () => {
  const clients = [
    {
      name: "Mopani Copper Mines",
      services: ["PLC Automation", "Instrumentation", "Drives", "Training", "Maintenance Services"],
      logo: mopaniLogo,
    },
    {
      name: "Konkola Copper Mines",
      services: ["PLC Automation", "Instrumentation", "Drives"],
      logo: konkolaLogo,
    },
    {
      name: "Lubambe Copper Mines",
      services: ["Drives", "Training", "Maintenance Services"],
      logo: lubambeLogo,
    },
    {
      name: "Kansanshi",
      services: ["Drives", "Maintenance Services", "Training"],
      // logo: kansanshiLogo,
    },
    {
      name: "Kalumbila",
      services: ["Training Services"],
      // logo: kalumbilaLogo,
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
      // logo: handymansLimeLogo,
    },
    {
      name: "SCAW Limited",
      services: ["Drives", "Maintenance"],
      logo: scawLimitedLogo,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-semibold text-center mb-6">Reference Projects And Customers</h2>
      <p className="text-xl font-semibold text-center mb-6">All Our Integrated Systems Use Quality Products and Components Primarily From The Following
Key Manufacturers And Suppliers:

</p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left"></th>
              <th className="px-4 py-2 text-left">Client</th>
              <th className="px-4 py-2 text-left">Services</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">
                  <img src={client.logo} alt={client.name} className="w-16 h-16 object-contain" />
                </td>
                <td className="px-4 py-2">{client.name}</td>
                <td className="px-4 py-2">
                  {client.services.join(', ')} {/* Display all services */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RefProjectsPage;
