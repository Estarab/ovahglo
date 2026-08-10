import React, { useState, useEffect } from 'react';

const WhatsAppContactQRCode = () => {
    
        const [qrCodeUrl, setQrCodeUrl] = useState('');
      
        // Company WhatsApp number
        const companyPhoneNumber = "+260978718328";  // Replace with your company's WhatsApp number
        const message = "Hi"; // Pre-filled message
      
        useEffect(() => {
          const fetchQRCode = async () => {
            // WhatsApp URL to send a pre-filled "Hi" message
            const whatsappLink = `https://wa.me/${companyPhoneNumber}?text=${encodeURIComponent(message)}`;
      
            // Generate the QR code for the WhatsApp message link
            const response = await fetch(`http://localhost:3000/api/generate-qr?text=${encodeURIComponent(whatsappLink)}`);
            const data = await response.json();
            setQrCodeUrl(data.qrCodeUrl);  // Set the base64 URL of the QR code
          };
      
          fetchQRCode();
        }, [companyPhoneNumber, message]); // Trigger fetch when component mounts
      
        // Function to handle QR code download
        const handleDownload = () => {
          if (qrCodeUrl) {
            const a = document.createElement('a');
            a.href = qrCodeUrl; // Set the href to the QR code image (data URL)
            a.download = 'whatsapp-qr-code.png'; // Set the download file name
            a.click(); // Trigger a click to start the download
          }
        };
      
        return (
          <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">WhatsApp QR Code</h2>
            <p className="text-center text-gray-600 mb-6">
              Scan this QR code to automatically send a "Hi" message to our Whatsapp number.
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
 

export default WhatsAppContactQRCode;
