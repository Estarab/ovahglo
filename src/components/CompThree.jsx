import React from 'react';
import plcImage from '../assets/product imgs/SIEMENS PLC AUTOMATION PRODUCTS.png'; // Example image for PLC products
import switchgearImage from '../assets/product imgs/SIEMENS LOW VOLTAGE SWITCHGEAR.jpeg'; // Example image for Low Voltage Switchgear
import drivesImage from '../assets/product imgs/SIEMENS (INNOMOTICS) VARIABLE SPEED DRIVES AND MOTORS.png'; // Example image for Variable Speed Drives
import instrumentationImage from '../assets/product imgs/SIEMENS SITRANS PROCESS INSTRUMENTATION.png'; // Example image for Process Instrumentation

const CompThree = () => {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-2">Products</h2>
        <p className="text-lg text-white mb-2">
          ISL is an official Siemens product channel partner. Below are some of the products we offer:
        </p>

        {/* Product Cards for Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Mobile-only Cards */}
          <div className="block lg:hidden">

            {/* Siemens PLC Automation Products Card */}
            <div className=" shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 mb-8">
              <img
                src={plcImage}
                alt="Siemens PLC"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white mb-3">Siemens PLC Automation Products</h3>
                <ul className="list-disc pl-5 text-left text-white">
                  <li>S7-1500 PLC Components</li>
                  <li>S7-1200 PLC Components</li>
                  <li>S7-300 Components</li>
                  <li>S7-400 Components</li>
                  <li>Accessories for all PLC System Families</li>
                  <li>Software</li>
                </ul>
              </div>
            </div>

            {/* Siemens Low Voltage Switchgear Card */}
            <div className=" shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 mb-8">
              <img
                src={switchgearImage}
                alt="Siemens Low Voltage Switchgear"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-blue-400 mb-3">SIEMENS LOW VOLTAGE SWITCHGEAR</h3>
                <ul className="list-disc pl-5 text-left text-gray-100">
                  <li>SIRIUS 3RT CONTACTORS AND 3RU/3RB OVERLOADS</li>
                  <li>SENTRON CIRCUIT BREAKERS AND DISCONNECORS</li>
                  <li>SIMOCODE MOTOR MANAGEMENT AND OTHER PROTECTION DEVICES</li>
                  <li>SIRIUS 3RW SOFT STARTERS</li>
                  <li>SENTRON POWER MONITORING AND MANAGEMENT DEVICES AND SOFTWARE</li>
                </ul>
              </div>
            </div>

            {/* Siemens Variable Speed Drives and Motors Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 mb-8">
              <img
                src={drivesImage}
                alt="Siemens Variable Speed Drives"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">SIEMENS VARIABLE SPEED DRIVES AND MOTORS</h3>
                <ul className="list-disc pl-5 text-left text-gray-700">
                  <li>G/S120 SERIES</li>
                  <li>G/S150 SERIES</li>
                  <li>SINAMICS DC/DC CONVERTERS</li>
                  <li>IEC STANDARD MOTORS</li>
                  <li>IEC SPECIAL MOTORS</li>
                  <li>SERVOMOTORS</li>
                </ul>
              </div>
            </div>

            {/* Siemens SITRANS Process Instrumentation Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 mb-8">
              <img
                src={instrumentationImage}
                alt="Siemens SITRANS Process Instrumentation"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">SIEMENS SITRANS PROCESS INSTRUMENTATION</h3>
                <ul className="list-disc pl-5 text-left text-gray-700">
                  <li>FLOW</li>
                  <li>PRESSURE</li>
                  <li>LEVEL</li>
                  <li>TEMPERATURE</li>
                </ul>
              </div>
            </div>
             <a href="/products">
    <div className="text-center py-2 px-4 text-lg bg-blue-400 text-white rounded cursor-pointer inline-block">
        See More Products
    </div>
</a>

          </div>

        </div>

        {/* Table for Larger Screens */}
        <div className="overflow-x-auto hidden lg:block mt-2">
          <table className="min-w-full table-auto border-separate border-spacing-2">
            <thead>
              <tr className="bg-blue-400 text-white">
                <th className="px-6 py-4 text-left">Products</th>
                <th className="px-6 py-4 text-left">Details</th>
                {/* <th className="px-6 py-4 text-left">Image</th> */}
              </tr>
            </thead>
            <tbody>
              {/* Siemens PLC Automation Products */}
              <tr className="border-b">
                
                <td className="px-6 py-4 border-b">
                  <img src={plcImage} alt="Siemens PLC" className="w-72 h-32 object-cover rounded-lg shadow-md" />
                  <p className="text-left font-semibold text-white ">SIEMENS PLC AUTOMATION PRODUCTS</p>
                </td>
                <td className="px-2 py-2 border-b">
                  <ul className="list-disc pl-2 text-left text-white ">
                    <li>S7-1500 PLC COMPONENTS</li>
                    <li>S7-1200 PLC COMPONENTS</li>
                    <li>S7-300 COMPONENTS</li>
                    <li>S7-400 COMPONENTS</li>
                    <li>ACCESSORIES FOR ALL PLC SYSTEM FAMILIES</li>
                    <li>SOFTWARE</li>
                  </ul>
                </td>
                {/* <td className="px-6 py-4">
                  <img src={plcImage} alt="Siemens PLC" className="w-32 h-32 object-cover rounded-lg shadow-md" />
                </td> */}
                {/* <td className="px-2 py-2 font-semibold">SIEMENS PLC AUTOMATION PRODUCTS</td> */}
              </tr>

              {/* Siemens Low Voltage Switchgear */}
              <tr className="border-b">
                
              <td className="px-6 py-4 border-b">
                  <img src={switchgearImage} alt="Siemens Low Voltage Switchgear" className="w-72 h-32 object-cover rounded-lg shadow-md" />
                  <p className="text-left font-semibold text-white">SIEMENS LOW VOLTAGE SWITCHGEAR</p>
                </td>
                <td className="px-6 py-4 border-b">
                  <ul className="list-disc pl-5 text-left text-white">
                    <li>SIRIUS 3RT CONTACTORS AND 3RU/3RB OVERLOADS</li>
                    <li>SENTRON CIRCUIT BREAKERS AND DISCONNECORS</li>
                    <li>SIMOCODE MOTOR MANAGEMENT AND OTHER PROTECTION DEVICES</li>
                    <li>SIRIUS 3RW SOFT STARTERS</li>
                    <li>SENTRON POWER MONITORING AND MANAGEMENT DEVICES AND SOFTWARE</li>
                  </ul>
                </td>
                
                
                
              </tr>

              {/* Siemens Variable Speed Drives and Motors */}
              <tr className="border-b">
                
                <td className="px-6 py-4 border-b">
                  <img src={drivesImage} alt="Siemens Variable Speed Drives" className="w-72 h-32 object-cover rounded-lg shadow-md" />
                  <p className=" text-white font-semibold text-left">VARIABLE SPEED DRIVES AND MOTORS</p>
                </td>
                <td className="px-6 py-4 border-b">
                  <ul className="list-disc pl-5 text-left text-white">
                    <li>G/S120 SERIES</li>
                    <li>G/S150 SERIES</li>
                    <li>SINAMICS DC/DC CONVERTERS</li>
                    <li>IEC STANDARD MOTORS</li>
                    <li>IEC SPECIAL MOTORS</li>
                    <li>SERVOMOTORS</li>
                  </ul>
                </td>
                
              </tr>

              {/* Siemens SITRANS Process Instrumentation */}
              <tr className="border-b">
              <td className="px-6 py-4 border-b">
                  <img src={instrumentationImage} alt="Siemens SITRANS Process Instrumentation" className="w-72 h-32 object-cover rounded-lg shadow-md" />
                  <p className=" text-white text-left  font-semibold">SITRANS PROCESS INSTRUMENTATION</p>
                </td>
               
                <td className="px-6 py-4 border-b">
                  <ul className="list-disc pl-5 text-left text-white">
                    <li>FLOW</li>
                    <li>PRESSURE</li>
                    <li>LEVEL</li>
                    <li>TEMPERATURE</li>
                  </ul>
                </td>
                
              </tr>
            </tbody>
          </table>
          {/* <a href="/products">
    <div className="text-center py-2 px-4 text-lg bg-blue-400 text-white rounded cursor-pointer inline-block">
        See More Products
    </div>
</a> */}

        </div>
      </div>
    </section>
  );
};

export default CompThree;



// import React from 'react';
// import plcImage from '../assets/hero1.jpg'; // Example image for PLC products
// import switchgearImage from '../assets/hero1.jpg'; // Example image for Low Voltage Switchgear
// import drivesImage from '../assets/hero1.jpg'; // Example image for Variable Speed Drives
// import instrumentationImage from '../assets/hero1.jpg'; // Example image for Process Instrumentation

// const CompThree = () => {
//   return (
//     <section className="py-12 px-6 bg-white">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-blue-400 mb-6">Products</h2>
//         <p className="text-lg text-gray-800 mb-8">
//           ISL is an official Siemens product channel partner. Below are some of the products we offer:
//         </p>

//         {/* Product Cards for Mobile */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">

//           {/* Siemens PLC Automation Products Card */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
//             <img
//               src={plcImage}
//               alt="Siemens PLC"
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-blue-400 mb-3">SIEMENS PLC AUTOMATION PRODUCTS</h3>
//               <ul className="list-disc pl-5 text-left text-gray-700">
//                 <li>S7-1500 PLC COMPONENTS</li>
//                 <li>S7-1200 PLC COMPONENTS</li>
//                 <li>S7-300 COMPONENTS</li>
//                 <li>S7-400 COMPONENTS</li>
//                 <li>ACCESSORIES FOR ALL PLC SYSTEM FAMILIES</li>
//                 <li>SOFTWARE</li>
//               </ul>
//             </div>
//           </div>

//           {/* Siemens Low Voltage Switchgear Card */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
//             <img
//               src={switchgearImage}
//               alt="Siemens Low Voltage Switchgear"
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-blue-400 mb-3">SIEMENS LOW VOLTAGE SWITCHGEAR</h3>
//               <ul className="list-disc pl-5 text-left text-gray-700">
//                 <li>SIRIUS 3RT CONTACTORS AND 3RU/3RB OVERLOADS</li>
//                 <li>SENTRON CIRCUIT BREAKERS AND DISCONNECORS</li>
//                 <li>SIMOCODE MOTOR MANAGEMENT AND OTHER PROTECTION DEVICES</li>
//                 <li>SIRIUS 3RW SOFT STARTERS</li>
//                 <li>SENTRON POWER MONITORING AND MANAGEMENT DEVICES AND SOFTWARE</li>
//               </ul>
//             </div>
//           </div>

//           {/* Siemens Variable Speed Drives and Motors Card */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
//             <img
//               src={drivesImage}
//               alt="Siemens Variable Speed Drives"
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-blue-400 mb-3">SIEMENS VARIABLE SPEED DRIVES AND MOTORS</h3>
//               <ul className="list-disc pl-5 text-left text-gray-700">
//                 <li>G/S120 SERIES</li>
//                 <li>G/S150 SERIES</li>
//                 <li>SINAMICS DC/DC CONVERTERS</li>
//                 <li>IEC STANDARD MOTORS</li>
//                 <li>IEC SPECIAL MOTORS</li>
//                 <li>SERVOMOTORS</li>
//               </ul>
//             </div>
//           </div>

//           {/* Siemens SITRANS Process Instrumentation Card */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
//             <img
//               src={instrumentationImage}
//               alt="Siemens SITRANS Process Instrumentation"
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-blue-400 mb-3">SIEMENS SITRANS PROCESS INSTRUMENTATION</h3>
//               <ul className="list-disc pl-5 text-left text-gray-700">
//                 <li>FLOW</li>
//                 <li>PRESSURE</li>
//                 <li>LEVEL</li>
//                 <li>TEMPERATURE</li>
//               </ul>
//             </div>
//           </div>

//         </div>

//         {/* Table for Larger Screens */}
//         <div className="overflow-x-auto hidden lg:block mt-12">
//           <table className="min-w-full table-auto border-separate border-spacing-4">
//             <thead>
//               <tr className="bg-blue-400 text-white">
//                 <th className="px-6 py-4 text-left">Category</th>
//                 <th className="px-6 py-4 text-left">Products</th>
//                 <th className="px-6 py-4 text-left">Image</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Siemens PLC Automation Products */}
//               <tr className="border-b">
//                 <td className="px-6 py-4 font-semibold">SIEMENS PLC AUTOMATION PRODUCTS</td>
//                 <td className="px-6 py-4">
//                   <ul className="list-disc pl-5 text-left text-gray-700">
//                     <li>S7-1500 PLC COMPONENTS</li>
//                     <li>S7-1200 PLC COMPONENTS</li>
//                     <li>S7-300 COMPONENTS</li>
//                     <li>S7-400 COMPONENTS</li>
//                     <li>ACCESSORIES FOR ALL PLC SYSTEM FAMILIES</li>
//                     <li>SOFTWARE</li>
//                   </ul>
//                 </td>
//                 <td className="px-6 py-4">
//                   <img src={plcImage} alt="Siemens PLC" className="w-32 h-32 object-cover rounded-lg shadow-md" />
//                 </td>
//               </tr>

//               {/* Siemens Low Voltage Switchgear */}
//               <tr className="border-b">
//                 <td className="px-6 py-4 font-semibold">SIEMENS LOW VOLTAGE SWITCHGEAR</td>
//                 <td className="px-6 py-4">
//                   <ul className="list-disc pl-5 text-left text-gray-700">
//                     <li>SIRIUS 3RT CONTACTORS AND 3RU/3RB OVERLOADS</li>
//                     <li>SENTRON CIRCUIT BREAKERS AND DISCONNECORS</li>
//                     <li>SIMOCODE MOTOR MANAGEMENT AND OTHER PROTECTION DEVICES</li>
//                     <li>SIRIUS 3RW SOFT STARTERS</li>
//                     <li>SENTRON POWER MONITORING AND MANAGEMENT DEVICES AND SOFTWARE</li>
//                   </ul>
//                 </td>
//                 <td className="px-6 py-4">
//                   <img src={switchgearImage} alt="Siemens Low Voltage Switchgear" className="w-32 h-32 object-cover rounded-lg shadow-md" />
//                 </td>
//               </tr>

//               {/* Siemens Variable Speed Drives and Motors */}
//               <tr className="border-b">
//                 <td className="px-6 py-4 font-semibold">SIEMENS VARIABLE SPEED DRIVES AND MOTORS</td>
//                 <td className="px-6 py-4">
//                   <ul className="list-disc pl-5 text-left text-gray-700">
//                     <li>G/S120 SERIES</li>
//                     <li>G/S150 SERIES</li>
//                     <li>SINAMICS DC/DC CONVERTERS</li>
//                     <li>IEC STANDARD MOTORS</li>
//                     <li>IEC SPECIAL MOTORS</li>
//                     <li>SERVOMOTORS</li>
//                   </ul>
//                 </td>
//                 <td className="px-6 py-4">
//                   <img src={drivesImage} alt="Siemens Variable Speed Drives" className="w-32 h-32 object-cover rounded-lg shadow-md" />
//                 </td>
//               </tr>

//               {/* Siemens SITRANS Process Instrumentation */}
//               <tr className="border-b">
//                 <td className="px-6 py-4 font-semibold">SIEMENS SITRANS PROCESS INSTRUMENTATION</td>
//                 <td className="px-6 py-4">
//                   <ul className="list-disc pl-5 text-left text-gray-700">
//                     <li>FLOW</li>
//                     <li>PRESSURE</li>
//                     <li>LEVEL</li>
//                     <li>TEMPERATURE</li>
//                   </ul>
//                 </td>
//                 <td className="px-6 py-4">
//                   <img src={instrumentationImage} alt="Siemens SITRANS Process Instrumentation" className="w-32 h-32 object-cover rounded-lg shadow-md" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompThree;
