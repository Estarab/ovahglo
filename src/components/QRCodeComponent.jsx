import React, { useState, useEffect } from 'react';

const QRCodeComponent = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  // Name and phone number to be stored in the vCard
  const name = "AB Nation Tech";
  const phoneNumber = "+260978718328";

  useEffect(() => {
    const fetchQRCode = async () => {
      // vCard format to store name and phone number
      const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL:${phoneNumber}\nEND:VCARD`;
      const response = await fetch(`http://localhost:3000/api/generate-qr?text=${encodeURIComponent(vCardData)}`);
      const data = await response.json();
      setQrCodeUrl(data.qrCodeUrl);  // Set the base64 URL of the QR code
    };

    fetchQRCode();
  }, [name, phoneNumber]); // Trigger fetch when component mounts

  // Function to handle QR code download
  const handleDownload = () => {
    if (qrCodeUrl) {
      const a = document.createElement('a');
      a.href = qrCodeUrl; // Set the href to the QR code image (data URL)
      a.download = 'contact-qr-code.png'; // Set the download file name
      a.click(); // Trigger a click to start the download
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">QR Code for Contact</h2>
      <p className="text-center text-gray-600 mb-6">
        Scan this QR code to automatically save our contact details (company name and phone number) to your phone's contacts.
      </p>

      {qrCodeUrl && (
        <div className="text-center mb-6">
          <img src={qrCodeUrl} alt="Generated QR Code" className="max-w-xs mx-auto" />
          
          <button 
            onClick={handleDownload} 
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default QRCodeComponent;



// import React, { useState, useEffect } from 'react';

// const QRCodeComponent = () => {
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const [text, setText] = useState(''); // Initially empty, user can enter custom URL

//   const handleChange = (e) => {
//     setText(e.target.value); // Update text when user types in the input
//   };

//   useEffect(() => {
//     if (text) {
//       const fetchQRCode = async () => {
//         const response = await fetch(`http://localhost:3000/api/generate-qr?text=${encodeURIComponent(text)}`);
//         const data = await response.json();
//         setQrCodeUrl(data.qrCodeUrl);  // Set the base64 URL of the QR code
//       };

//       fetchQRCode();
//     }
//   }, [text]); // Trigger fetch when 'text' changes

//   // Function to handle QR code download
//   const handleDownload = () => {
//     if (qrCodeUrl) {
//       const a = document.createElement('a'); // Create a temporary <a> element
//       a.href = qrCodeUrl; // Set the href to the QR code image (data URL)
//       a.download = 'qr-code.png'; // Set the download file name
//       a.click(); // Trigger a click to start the download
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">QR Code Generator</h2>
//       <p className="text-center text-gray-600 mb-6">
//         A QR Code is a scannable image that can store information such as URLs, text, and more. It allows quick access to websites, apps, and other digital content. QR Codes are widely used in business for marketing, payments, and event check-ins.
//       </p>
      
//       <div className="mb-6">
//         <input 
//           type="text" 
//           value={text} 
//           onChange={handleChange} 
//           placeholder="Enter your custom URL or text"
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
      
//       {qrCodeUrl && (
//         <div className="text-center mb-6">
//           <img src={qrCodeUrl} alt="Generated QR Code" className="max-w-xs mx-auto" />
          
//           <button 
//             onClick={handleDownload} 
//             className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             Download QR Code
//           </button>
//         </div>
//       )}

//       <div className="mt-8">
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">Why QR Codes are Important?</h3>
//         <ul className="list-disc pl-6 space-y-2 text-gray-600">
//           <li><strong>Quick Access:</strong> Scanning a QR code gives immediate access to websites, promotions, or information.</li>
//           <li><strong>Convenience:</strong> QR codes can be scanned using any smartphone, eliminating the need to manually enter URLs.</li>
//           <li><strong>Trackable:</strong> Businesses can track how many people scanned a QR code, providing valuable insights.</li>
//           <li><strong>Versatile:</strong> QR codes can link to websites, payments, Wi-Fi networks, event tickets, and much more!</li>
//           <li><strong>Eco-Friendly:</strong> No need for printed materials; QR codes can replace physical brochures or flyers.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default QRCodeComponent;




// import React, { useState, useEffect } from 'react';

// const QRCodeComponent = () => {
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const [text, setText] = useState(''); // Initially empty, user can enter custom URL

//   const handleChange = (e) => {
//     setText(e.target.value); // Update text when user types in the input
//   };

//   useEffect(() => {
//     if (text) {
//       const fetchQRCode = async () => {
//         const response = await fetch(`http://localhost:3000/api/generate-qr?text=${encodeURIComponent(text)}`);
//         const data = await response.json();
//         setQrCodeUrl(data.qrCodeUrl);  // Set the base64 URL of the QR code
//       };

//       fetchQRCode();
//     }
//   }, [text]); // Trigger fetch when 'text' changes

//   // Function to handle QR code download
//   const handleDownload = () => {
//     if (qrCodeUrl) {
//       const a = document.createElement('a'); // Create a temporary <a> element
//       a.href = qrCodeUrl; // Set the href to the QR code image (data URL)
//       a.download = 'qr-code.png'; // Set the download file name
//       a.click(); // Trigger a click to start the download
//     }
//   };

//   return (
//     <div>
//       <h2>QR Code Generator</h2>
//       <input 
//         type="text" 
//         value={text} 
//         onChange={handleChange} 
//         placeholder="Enter your custom URL" 
//       />
      
//       {/* Display the QR code image */}
//       {qrCodeUrl && <img src={qrCodeUrl} alt="Generated QR Code" />}
      
//       {/* Button to download the QR code */}
//       {qrCodeUrl && <button onClick={handleDownload}>Download QR Code</button>}
//     </div>
//   );
// };

// export default QRCodeComponent;