import React from "react";

// ==========================================
// POS IMAGES FROM ASSETS FOLDER
// Change the filenames if your files have
// different names.
// ==========================================

import posTerminal from "../assets/pos/fullset.png";
import receiptPrinter from "../assets/pos/printer.png";
import barcodeScanner from "../assets/pos/barcodescanner.png";
import cashDrawer from "../assets/pos/drawer.png";
import customerDisplay from "../assets/pos/customerdisplay.png";
import posPackage from "../assets/pos/pos terminal.png";
import handheldpos from "../assets/pos/handheld.jpeg";

// Feature images
import salesImage from "../assets/pos/handheld.jpeg";
import inventoryImage from "../assets/pos/handheld.jpeg";
import customersImage from "../assets/pos/handheld.jpeg";
import reportsImage from "../assets/pos/handheld.jpeg";
import offlineImage from "../assets/pos/handheld.jpeg";
import securityImage from "../assets/pos/handheld.jpeg";

// Business type images
import retailImage from "../assets/pos/handheld.jpeg";
import supermarketImage from "../assets/pos/handheld.jpeg";
import restaurantImage from "../assets/pos/handheld.jpeg";
import pharmacyImage from "../assets/pos/handheld.jpeg";
import butcheryImage from "../assets/pos/handheld.jpeg";
import salonImage from "../assets/pos/handheld.jpeg";
import schoolImage from "../assets/pos/handheld.jpeg";


const OvahgloPOS = () => {
  // ==========================================
  // FEATURES
  // ==========================================

  const features = [
    {
      image: salesImage,
      title: "Fast & Easy Sales",
      description:
        "Process sales quickly with an easy-to-use POS interface."
    },
    {
      image: inventoryImage,
      title: "Inventory Management",
      description:
        "Track products, stock levels and movements with ease."
    },
    {
      image: customersImage,
      title: "Customer Management",
      description:
        "Keep track of your customers and their purchase history."
    },
    {
      image: reportsImage,
      title: "Sales Reports & Analytics",
      description:
        "Monitor your business performance with detailed reports."
    },
    {
      image: offlineImage,
      title: "Works Offline",
      description:
        "Continue selling even when there is no internet connection."
    },
    {
      image: securityImage,
      title: "Backup & Data Security",
      description:
        "Keep your business information safe and backed up."
    }
  ];

  // ==========================================
  // POS PACKAGES
  // ==========================================

  const packages = [
    {
  name: "HANDHELD POS PACKAGE",
  description: "Perfect for Mobile & On-the-Go Businesses",
  price: "K7,000",
  image: handheldpos,
  popular: false,
  features: [
    "Handheld Touch Screen POS",
    "Built-in Thermal Receipt Printer",
    "Built-in Barcode Scanner",
    "Ovahglo POS Software",
    "Works Offline",
    "Inventory Management",
    "Sales & Business Reports",
    "Setup & Training"
  ]
},
    // {
    //   name: "BASIC PACKAGE",
    //   description: "Perfect for Small Businesses",
    //   price: "K5,500",
    //   image: posPackage,
    //   popular: false,
    //   features: [
    //     "Touch Screen POS Terminal",
    //     "Thermal Receipt Printer",
    //     "Cash Drawer",
    //     "Barcode Scanner",
    //     "Ovahglo POS Software",
    //     "Setup & Training"
    //   ]
    // },

    // {
    //   name: "STANDARD PACKAGE",
    //   description: "Ideal for Growing Businesses",
    //   price: "K7,500",
    //   image: posPackage,
    //   popular: true,
    //   features: [
    //     "Touch Screen POS Terminal",
    //     "Thermal Receipt Printer",
    //     "Cash Drawer",
    //     "Barcode Scanner",
    //     "Customer Display",
    //     "Ovahglo POS Software",
    //     "Setup, Installation & Training"
    //   ]
    // },

    // {
    //   name: "PREMIUM PACKAGE",
    //   description: "Complete Solution for High Volume Businesses",
    //   price: "K9,500",
    //   image: posPackage,
    //   popular: false,
    //   features: [
    //     "Touch Screen POS Terminal",
    //     "Thermal Receipt Printer",
    //     "Cash Drawer",
    //     "Barcode Scanner",
    //     "Customer Display",
    //     "Backup Power (UPS)",
    //     "Ovahglo POS Software",
    //     "Setup, Installation & Training",
    //     "After-Sales Support"
    //   ]
    // }
  ];

  // ==========================================
  // BUSINESS TYPES
  // ==========================================

  const businesses = [
    {
      image: retailImage,
      title: "Retail Shops"
    },
    {
      image: supermarketImage,
      title: "Supermarkets"
    },
    {
      image: restaurantImage,
      title: "Restaurants"
    },
    {
      image: pharmacyImage,
      title: "Pharmacies"
    },
    {
      image: butcheryImage,
      title: "Butcheries"
    },
    {
      image: salonImage,
      title: "Salons"
    },
    {
      image: schoolImage,
      title: "Schools"
    }
  ];

  // ==========================================
  // HARDWARE
  // ==========================================

  const hardware = [
    {
      image: posPackage,
      title: "POS Terminal"
    },
    {
      image: receiptPrinter,
      title: "Receipt Printer"
    },
    {
      image: barcodeScanner,
      title: "Barcode Scanner"
    },
    {
      image: cashDrawer,
      title: "Cash Drawer"
    },
    {
      image: customerDisplay,
      title: "Customer Display"
    }
  ];

  return (
    <section className="bg-slate-900 text-white min-h-screen">

      {/* ======================================
          HERO SECTION
      ======================================= */}

      {/* <div className="relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-pink-950">

        
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

           

            <div>

              <div className="inline-block mb-5">
                <span className="bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold tracking-wider">
                  SMARTER SALES. BETTER BUSINESS.
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Ovahglo
                <span className="text-pink-500"> POS</span>
              </h1>

              <p className="text-xl md:text-2xl font-semibold mt-4 text-gray-200">
                Complete Point of Sale Solutions
                <span className="text-pink-500">
                  {" "}for Every Business
                </span>
              </p>

              <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-xl">
                An all-in-one Point of Sale system designed to help
                businesses sell faster, manage smarter and grow bigger.
              </p>

             

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span>Reliable</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span>Affordable</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span>Easy to Use</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span>Works Offline</span>
                </div>

              </div>

            </div>


          

            <div className="relative">

              <div className="absolute inset-0 bg-pink-600/20 blur-3xl"></div>

              <img
                src={posTerminal}
                alt="Ovahglo POS System"
                className="relative w-full max-w-xl mx-auto object-contain drop-shadow-2xl"
              />

             

            </div>

          </div>

        </div>
      </div> */}


      {/* ======================================
          HARDWARE SECTION
      ======================================= */}

      {/* <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold">
            Complete <span className="text-pink-500">POS Package</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Everything you need to run your business efficiently.
          </p>

        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {hardware.map((item, index) => (

            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center hover:border-pink-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="h-32 flex items-center justify-center">

                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-28 max-w-full object-contain"
                />

              </div>

              <h3 className="font-bold mt-4">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </div> */}


      <div className="relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-pink-950">

  
  <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 relative z-10">

    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      

      <div>

        

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">

          Our Handheld
          <span className="text-pink-500"> POS</span>

        </h1>


        {/* Catching Caption */}

        <h2 className="text-2xl md:text-3xl font-extrabold mt-4 leading-tight">

          Your Business.
          <span className="text-pink-500"> In Your Hands.</span>

        </h2>


        {/* Description */}

        <p className="text-gray-300 text-lg md:text-xl mt-5 leading-relaxed max-w-xl">

          Take your sales wherever your business takes you. 
          Ovahglo Handheld POS gives you the power to sell, 
          manage stock and track your business directly from 
          your palm.

        </p>


        {/* Catching Highlight */}

        <div className="mt-6">

          <p className="text-xl md:text-2xl font-extrabold text-white">

            Sell Faster.
            <span className="text-pink-500"> Move Smarter.</span>

          </p>

          <p className="text-lg font-semibold text-gray-300 mt-1">

            No Internet? No Problem.

          </p>

        </div>


        {/* Benefits */}

        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>

            <span className="font-semibold">
              Works Offline
            </span>

          </div>


          <div className="flex items-center gap-3">

            <div className="w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>

            <span className="font-semibold">
              Portable & Lightweight
            </span>

          </div>


          <div className="flex items-center gap-3">

            <div className="w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>

            <span className="font-semibold">
              Fast & Easy to Use
            </span>

          </div>


          <div className="flex items-center gap-3">

            <div className="w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>

            <span className="font-semibold">
              Real-Time Sales
            </span>

          </div>


          <div className="flex items-center gap-3">

            <div className="w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>

            <span className="font-semibold">
              Inventory Management
            </span>

          </div>


          <div className="flex items-center gap-3">

            <div className="w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>

            <span className="font-semibold">
              Secure & Reliable
            </span>

          </div>

        </div>


        {/* CTA */}

        <div className="flex flex-wrap gap-4 mt-8">

          <a
            href="/pos"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-7 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Get Your POS
          </a>

          <a
            href="/pos"
            className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold px-7 py-3 rounded-lg transition duration-300"
          >
            See More
          </a>

        </div>

      </div>


      {/* =========================
          RIGHT SIDE
      ========================== */}

      <div className="relative flex justify-center items-center">

        {/* Glow */}

        <div className="absolute inset-0 bg-pink-600/20 blur-3xl rounded-full"></div>


        {/* Handheld POS Image */}

        <img
          src={handheldpos}
          alt="Ovahglo Handheld POS"
          className="relative w-full max-w-md lg:max-w-lg mx-auto object-contain drop-shadow-2xl"
        />


       

      </div>

    </div>

  </div>

</div>


      

     


      {/* ======================================
          WHY OVahGLO POS
      ======================================= */}

      <div className="bg-gradient-to-r from-pink-600 to-pink-500 py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>

              <h3 className="text-2xl font-extrabold">
                ONE-TIME
              </h3>

              <p className="text-sm">
                No Monthly Fees
              </p>

            </div>


            <div>

              <h3 className="text-2xl font-extrabold">
                FREE
              </h3>

              <p className="text-sm">
                Training & Installation
              </p>

            </div>


            <div>

              <h3 className="text-2xl font-extrabold">
                Offline
              </h3>

              <p className="text-sm">
                Works Offline
              </p>

            </div>


            <div>

              <h3 className="text-2xl font-extrabold">
                SUPPORT
              </h3>

              <p className="text-sm">
                After-Sales Support
              </p>

            </div>

          </div>

        </div>

      </div>


     

      


      {/* ======================================
          CALL TO ACTION
      ======================================= */}

      <div className="bg-black border-t border-pink-500">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

            <div>

              <h2 className="text-3xl font-extrabold">
                Upgrade Your Business
              </h2>

              <p className="text-pink-500 text-xl font-bold">
                With Ovahglo POS!
              </p>

            </div>


            <div className="flex flex-col sm:flex-row gap-5 items-center">

              <a
                href="tel:+260977219990"
                className="bg-pink-500 hover:bg-pink-600 px-7 py-3 rounded-lg font-bold transition"
              >
                Call +260 955 774 867
              </a>

              <a
                href="/contact"
                className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-7 py-3 rounded-lg font-bold transition"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* ======================================
          FOOTER
      ======================================= */}

      

    </section>
  );
};

export default OvahgloPOS;