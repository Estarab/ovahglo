import React from "react";

const EyeIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 50C22 32 37 22 50 22C63 22 78 32 88 50C78 68 63 78 50 78C37 78 22 68 12 50Z"
      stroke="white"
      strokeWidth="7"
      strokeLinejoin="round"
    />

    <circle cx="50" cy="50" r="12" fill="white" />

    <path
      d="M50 10V20M50 80V90M10 50H20M80 50H90"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
    />

    <path
      d="M22 22L29 29M78 22L71 29M22 78L29 71M78 78L71 71"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

const TargetIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="30"
      stroke="white"
      strokeWidth="7"
    />

    <circle
      cx="50"
      cy="50"
      r="17"
      stroke="white"
      strokeWidth="7"
    />

    <circle
      cx="50"
      cy="50"
      r="5"
      fill="white"
    />

    <path
      d="M52 48L76 24"
      stroke="white"
      strokeWidth="7"
      strokeLinecap="round"
    />

    <path
      d="M68 24H78V34"
      stroke="white"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


/* -------------------------------------------------------
   TOP BRANDING / PRINTING ILLUSTRATION
------------------------------------------------------- */

// const BrandingIllustration = () => {
//   return (
//     // <div className="relative w-[600px] h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden mx-auto">
//     <div className="relative w-full max-w-[600px] h-[220px] sm:h-[280px] md:h-[340px] mx-auto overflow-hidden">

//       {/* Pink brush stroke */}
//       <div
//         className="
//           absolute
//           bottom-[20px]
//           left-[-10%]
//           w-[120%]
//           h-[75px]
//           bg-pink-600
//           rotate-[-3deg]
//           opacity-90
//           blur-[1px]
//         "
//         style={{
//           clipPath:
//             "polygon(0 40%, 8% 20%, 18% 48%, 28% 18%, 40% 50%, 52% 15%, 65% 55%, 76% 25%, 88% 50%, 100% 20%, 100% 75%, 90% 90%, 75% 70%, 60% 95%, 45% 70%, 30% 92%, 15% 70%, 0 85%)",
//         }}
//       />

//       {/* Monitor */}
//       <div
//         className="
//           absolute
//           left-[15%]
//           top-[20px]
//           w-[58%]
//           h-[190px]
//           sm:h-[220px]
//           md:h-[270px]
//           rounded-xl
//           border-[5px]
//           border-slate-400
//           bg-slate-950
//           shadow-2xl
//           z-10
//         "
//       >
//         {/* Monitor screen */}
//         <div className="absolute inset-[10px] rounded-md overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-700">

//           <div className="absolute inset-0 opacity-70">
//             <div className="absolute w-[70%] h-[30px] bg-pink-500 rotate-[25deg] top-[35%] left-[10%] blur-md" />
//             <div className="absolute w-[60%] h-[35px] bg-purple-500 rotate-[-20deg] top-[45%] left-[25%] blur-md" />
//             <div className="absolute w-[45%] h-[25px] bg-blue-500 rotate-[30deg] top-[55%] left-[40%] blur-md" />
//           </div>

//           {/* Logo */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
//               <div className="absolute inset-[12px] rounded-full border-[10px] border-white" />

//               <div
//                 className="
//                   absolute
//                   left-1/2
//                   top-1/2
//                   w-[90px]
//                   md:w-[120px]
//                   h-[10px]
//                   bg-white
//                   rotate-[-48deg]
//                   -translate-x-1/2
//                   -translate-y-1/2
//                 "
//               />
//             </div>
//           </div>
//         </div>

//         {/* Monitor stand */}
//         <div className="absolute left-1/2 -bottom-[45px] -translate-x-1/2">
//           <div className="w-7 h-12 bg-slate-700 mx-auto" />
//           <div className="w-28 sm:w-36 md:w-44 h-4 bg-slate-800 rounded-full shadow-xl" />
//         </div>
//       </div>


//       {/* Gift box */}
//       <div className="absolute left-[5%] bottom-[65px] z-20">
//         <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36">

//           <div className="absolute bottom-0 w-full h-[75%] bg-gradient-to-br from-slate-700 to-slate-950 rounded-md shadow-2xl border border-slate-500" />

//           {/* Ribbon */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-full bg-pink-600" />
//           <div className="absolute top-0 left-0 w-full h-5 bg-pink-600" />

//           {/* Bow */}
//           <div className="absolute -top-7 left-1/2 -translate-x-1/2">
//             <div className="flex items-center">
//               <div className="w-12 h-8 bg-pink-500 rounded-full rotate-[25deg]" />
//               <div className="w-7 h-7 rounded-full bg-pink-700 z-10" />
//               <div className="w-12 h-8 bg-pink-500 rounded-full rotate-[-25deg]" />
//             </div>
//           </div>

//           {/* Logo */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-white text-4xl font-thin">Ø</div>
//           </div>
//         </div>
//       </div>


//       {/* Mug */}
//       <div className="absolute left-[25%] bottom-[55px] z-20">
//         <div className="relative w-20 h-16 sm:w-24 sm:h-20 bg-slate-800 rounded-b-3xl border-2 border-slate-500 shadow-xl">
//           <div className="absolute -right-7 top-3 w-8 h-10 border-[7px] border-slate-700 rounded-r-full" />
//           <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-thin">
//             Ø
//           </div>
//         </div>
//       </div>


//       {/* Phone */}
//       <div
//         className="
//           absolute
//           right-[24%]
//           bottom-[65px]
//           z-30
//           w-14
//           h-28
//           sm:w-16
//           sm:h-32
//           md:w-20
//           md:h-40
//           rounded-xl
//           bg-slate-950
//           border-4
//           border-slate-500
//           shadow-2xl
//         "
//       >
//         <div className="absolute inset-[5px] rounded-md bg-gradient-to-br from-indigo-950 to-pink-600 flex items-center justify-center">
//           <span className="text-white text-3xl font-thin">Ø</span>
//         </div>
//       </div>


//       {/* Printer */}
//       <div
//         className="
//           absolute
//           right-[5%]
//           top-[80px]
//           z-20
//           w-[28%]
//           h-[125px]
//           sm:h-[150px]
//           md:h-[190px]
//           bg-gradient-to-br
//           from-slate-500
//           to-slate-950
//           rounded-xl
//           shadow-2xl
//           border
//           border-slate-400
//         "
//       >
//         <div className="absolute top-8 left-3 right-3 h-20 bg-slate-900 rounded-md" />

//         <div className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[55%] h-16 bg-white rotate-[-8deg] shadow-lg">
//           <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-80" />
//         </div>

//         <div className="absolute bottom-2 right-3 flex gap-1">
//           <span className="w-2 h-2 rounded-full bg-green-400" />
//           <span className="w-2 h-2 rounded-full bg-yellow-400" />
//         </div>
//       </div>


//       {/* Printing samples */}
//       <div className="absolute bottom-[30px] right-[30%] z-20 hidden sm:block">
//         <div className="w-32 h-20 bg-white rotate-[12deg] shadow-xl">
//           <div className="grid grid-cols-5 gap-1 p-2">
//             {Array.from({ length: 20 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="h-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

const BrandingIllustration = () => {
  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <img
        src="/images/ovahgloentrance.png"
        alt="Branding and technology services"
        className="
          block
          w-full
          h-auto
          object-contain
          max-h-[250px]
          sm:max-h-[300px]
          md:max-h-[340px]
        "
      />
    </div>
  );
};

/* -------------------------------------------------------
   VISION
------------------------------------------------------- */

const VisionCard = () => {
  return (
    <div
      className="
        w-full
        rounded-2xl
        border
        border-slate-600
        bg-slate-900/40
        p-6
        sm:p-8
        md:p-10
      "
    >
      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          sm:items-start
          gap-6
          md:gap-10
        "
      >

        {/* Icon */}
        <div
          className="
            flex-shrink-0
            w-24
            h-24
            sm:w-28
            sm:h-28
            md:w-32
            md:h-32
            rounded-full
            bg-gradient-to-br
            from-pink-500
            to-pink-800
            flex
            items-center
            justify-center
            shadow-xl
          "
        >
          <EyeIcon />
        </div>


        {/* Content */}
        <div className="flex-1 w-full">

          <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-500 tracking-tight">
            VISION
          </h2>

          <div className="flex items-center gap-2 mt-3 mb-5">
            <div className="h-[2px] flex-1 bg-pink-500" />
            <div className="w-2 h-2 bg-pink-500 rounded-full" />
          </div>

          <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
            Leaders in Technology Solutions, Branding, Signage and Printing
            Driven by a Passion for Excellence and Innovation.
          </p>

        </div>
      </div>
    </div>
  );
};


/* -------------------------------------------------------
   MISSION
------------------------------------------------------- */

const MissionCard = () => {
  return (
    <div
      className="
        w-full
        rounded-2xl
        border
        border-slate-600
        bg-slate-900/40
        p-6
        sm:p-8
        md:p-10
      "
    >
      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          sm:items-start
          gap-6
          md:gap-10
        "
      >

        {/* Icon */}
        <div
          className="
            flex-shrink-0
            w-24
            h-24
            sm:w-28
            sm:h-28
            md:w-32
            md:h-32
            rounded-full
            bg-gradient-to-br
            from-lime-400
            to-green-700
            flex
            items-center
            justify-center
            shadow-xl
          "
        >
          <TargetIcon />
        </div>


        {/* Content */}
        <div className="flex-1 w-full">

          <h2 className="text-4xl sm:text-5xl font-extrabold text-lime-400 tracking-tight">
            MISSION
          </h2>

          <div className="flex items-center gap-2 mt-3 mb-5">
            <div className="h-[2px] flex-1 bg-lime-400" />
            <div className="w-2 h-2 bg-lime-400 rounded-full" />
          </div>

          <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
            We provide unique, high-quality technology solutions, branding,
            signage and printing. We endeavor to exceed customer expectations
            through creativity, innovation, reliability, and professional
            service.
          </p>

        </div>
      </div>
    </div>
  );
};


/* -------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------- */

const CompTwo = () => {
  return (
    <section className="w-full overflow-hidden bg-[#111b2b] text-white">

      {/* =========================
          TOP SECTION
      ========================== */}

     <div
  className="
    max-w-[1500px]
    mx-auto
    px-5
    sm:px-8
    md:px-12
    pt-8
    md:pt-12
    pb-10
    md:pb-14
  "
>

  {/* =========================
      IMAGE + ABOUT SECTION
  ========================== */}

 <div
  className="
    grid
    grid-cols-1
    lg:grid-cols-[400px_1fr]
    gap-4
    lg:gap-6
    items-center
  "
>

    {/* =========================
        IMAGE - LEFT
    ========================== */}

    <div
  className="
    w-full
    flex
    justify-center
    lg:justify-end
  "
>
  <img
    src="/images/ovahgloentrance.png"
    alt="Branding and technology services"
    className="
      block
      w-full
      max-w-[300px]
      h-auto
      object-contain
    "
  />
</div>


    {/* =========================
        ABOUT TEXT - RIGHT
    ========================== */}

    <div className="w-full">

      <p
        className="
          text-xl
          sm:text-2xl
          md:text-3xl
          leading-relaxed
          font-light
          text-white
        "
      >

        We are a locally established,{" "}

        <span className="font-bold text-pink-500">
          creative-focused branding and technology company
        </span>{" "}

        that specializes in the development and production of corporate
        gifts, commercial printing, signage, and large format printing.
        We also provide technology solutions such as website and mobile
        application development, Point of Sale (POS) systems, school and
        business management systems, and many more.

      </p>

    </div>

  </div>

</div>


      {/* =========================
          VISION + MISSION
      ========================== */}

      {/* <div className="hidden lg:block max-w-[1400px] mx-auto px-12 pb-14">
       */}
       <div className="block w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 pb-14">

  <div className="
    rounded-2xl
    border
    border-slate-600
    bg-slate-900/30
    overflow-hidden
  ">

    {/* <div className="grid grid-cols-2"> */}
    <div className="grid grid-cols-1 lg:grid-cols-2">

      {/* VISION */}
      {/* <div className="p-12 border-r border-slate-600"> */}
      <div className="p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-600">

        {/* <div className="flex items-center gap-8"> */}
        <div className="flex flex-col items-center text-center gap-5 lg:flex-row lg:items-center lg:text-left lg:gap-8">

          <div className="
            flex-shrink-0
            w-36
            h-36
            rounded-full
            bg-gradient-to-br
            from-pink-400
            to-pink-700
            flex
            items-center
            justify-center
            shadow-2xl
          ">
            <EyeIcon />
          </div>

          <div className="flex-1">

            <h2 className="
              text-6xl
              font-extrabold
              text-pink-500
            ">
              VISION
            </h2>

            <div className="flex items-center mt-4 mb-6">

              <div className="h-[2px] flex-1 bg-pink-500" />

              <span className="
                w-2
                h-2
                rounded-full
                bg-pink-500
              " />

            </div>

            <p className="
              text-xl
              text-white/90
              leading-relaxed
            ">
              Leaders in Technology Solutions,
              Branding, Signage and Printing
              Driven by a Passion for Excellence
              and Innovation.
            </p>

          </div>

        </div>

      </div>


      {/* MISSION */}
      {/* <div className="p-12"> */}
      <div className="p-6 sm:p-8 lg:p-12">

        {/* <div className="flex items-center gap-8"> */}
        <div className="flex flex-col items-center text-center gap-5 lg:flex-row lg:items-center lg:text-left lg:gap-8">

          <div className="
            flex-shrink-0
            w-36
            h-36
            rounded-full
            bg-gradient-to-br
            from-lime-400
            to-green-700
            flex
            items-center
            justify-center
            shadow-2xl
          ">
            <TargetIcon />
          </div>

          <div className="flex-1">

            <h2 className="
              text-6xl
              font-extrabold
              text-lime-400
            ">
              MISSION
            </h2>

            <div className="flex items-center mt-4 mb-6">

              <div className="h-[2px] flex-1 bg-lime-400" />

              <span className="
                w-2
                h-2
                rounded-full
                bg-lime-400
              " />

            </div>

            <p className="
              text-xl
              text-white/90
              leading-relaxed
            ">
              We provide unique, high-quality
              technology solutions, branding,
              signage and printing. We endeavor
              to exceed customer expectations
              through creativity, innovation,
              reliability, and professional service.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

    </section>
  );
};

export default CompTwo;



// import React from 'react';

// const CompTwo = () => {
//   return (
//     <section className="w-full bg-slate-700 overflow-hidden">
//       <picture className="block w-full">
        
//         {/* Mobile image */}
//         <source
//           media="(max-width: 767px)"
//           srcSet="/images/mobileabout.png"
//         />

//         {/* Desktop image */}
//         <img
//           src="/images/desktopabout.png"
//           alt="Ovahglo - Branding and Technology Company"
//           className="block w-full h-auto max-w-full"
//         />

//       </picture>
//     </section>
//   );
// };

// export default CompTwo;

// import React, { useState } from 'react';
// import {
//   FaTools,
//   FaBuilding,
//   FaIndustry,
//   FaHandsHelping,
//   FaCogs,
//   FaMoneyBillWave
// } from 'react-icons/fa';

// const CompTwo = () => {
//   const [showMore, setShowMore] = useState(false);

//   const fullText = `We are a locally established, creative-focused branding and technology company that specializes in the development and production of corporate gifts, commercial printing, signage, and large format printing. We also provide technology solutions such as website and mobile application development, Point of Sale (POS) systems, school and business management systems, and many more customized software solutions. With a strong commitment to quality, creativity, and customer satisfaction, we ensure that every project is professionally executed and delivered on time, every time. Our goal is to combine creativity and technology to help businesses build strong brands, improve their operations, and grow in the digital age.`;

//   const previewText = fullText.split(' ').slice(0, 50).join(' ');

//   return (
//     <section className="text-white bg-slate-700 py-12 px-6">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Section Title */}
//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           WHO WE ARE
//         </h2>

//         {/* Description */}
//         <div className="text-lg font-semibold mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//           <p>
//             {showMore ? fullText : `${previewText}...`}
//           </p>

//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="mt-3 text-pink-500 font-bold hover:text-blue-600 transition duration-300"
//           >
//             {showMore ? 'Read Less' : 'Read More'}
//           </button>
//         </div>

//         {/* Vision */}
//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           VISION
//         </h2>

//         <p className="text-lg font-semibold mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//           Leaders in Technology Solutions, Branding, Signage and Printing
//           Driven by a Passion for Excellence and Innovation.
//         </p>

//         {/* Mission */}
//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           MISSION
//         </h2>

//         <p className="text-lg font-semibold mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//           We provide unique, high-quality technology solutions, branding, signage and printing. We endeavor to exceed customer expectations
//           through creativity, innovation, reliability, and professional service.
//         </p>

//       </div>
//     </section>
//   );
// };

// export default CompTwo;



// import React from 'react';
// import { FaTools, FaBuilding, FaIndustry, FaHandsHelping, FaCogs,FaMoneyBillWave } from 'react-icons/fa'; // Icons import


// const CompTwo = () => {
//   return (
//     <section className="text-white bg-slate-700 py-12 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Section Title */}
//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           WHO WE ARE
//         </h2>

//         {/* Description */}
//         {/* <p className="text-lg font-semibold mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//         We are a locally established, creative focused brannding and technology company that specializes in the development and production of corporate gits, commercial printing, signage, and large format printing. We also provide technology solutions such as website and mobile application development, Point of Sale (POS) systems, school and business management systems, and many more customized software solutions. With a strong commitment to quality, creativity, and customer satisfaction, we ensure that every project is professionally executed and delivered on time, every time. Our goal is to combine creativity and technology to help businesses build strong brands, improve their operations, and grow in the digital age.
//         </p> */}
        

//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           VISION
//         </h2>
//          <p className="text-lg font-semibold mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//        Leaders in Branding, Signage, and Printing Services Driven by a Passion for Excellence
//         </p>

//         <h2 className="text-3xl text-pink-500 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           MISION
//         </h2>
//          <p className="text-lg font-semibold mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//        We Provide unique, high quality branding , signage and printing services. We endeavor to exceed customer expectations.
//         </p>
//         {/* <h2 className="text-3xl text-pink-500 font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
//           WHAT WE DO
//         </h2> */}

        

//         {/* What We Do (Cards Section) */}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"> */}
//           {/* Card 1 */}
//           {/* <div className="bg-slate-600 text-white p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-3s">
//             <div className="flex items-center justify-center mb-4">
//               <FaTools className="text-5xl text-blue-500" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Systems Integrator</h3>
//             <p>We design, build, and install automation and low voltage systems.</p>
//           </div> */}

//           {/* Card 2 */}
//           {/* <div className="bg-slate-600 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-4s">
//             <div className="flex items-center justify-center mb-4">
//               <FaBuilding className="text-5xl text-green-500" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Motor Control Centres</h3>
//             <p>We build motor control centres with conventional and unconventional controls.</p>
//           </div> */}

//           {/* Card 3 */}
//           {/* <div className="bg-slate-600 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-5s">
//             <div className="flex items-center justify-center mb-4">
//               <FaIndustry className="text-5xl text-yellow-500" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Siemens Industry Products</h3>
//             <p>We supply and support (backed up with Siemens training) a wide range of Siemens industry products.</p>
//           </div> */}

//           {/* Card 4 */}
//           {/* <div className="bg-slate-600 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-6s">
//             <div className="flex items-center justify-center mb-4">
//               <FaHandsHelping className="text-5xl text-red-500" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Product Channel Partner</h3>
//             <p>We are a certified Siemens product channel partner.</p>
//           </div> */}

//           {/* Card 5 */}
//           {/* <div className="bg-slate-600 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-7s">
//             <div className="flex items-center justify-center mb-4">
//               <FaCogs className="text-5xl text-purple-500" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Customer Training</h3>
//             <p>We are a Siemens SITRAIN® training partner. We conduct customer training on and off-site in various Siemens (SITRAIN®) automation and drives courses.</p>
//           </div>
//         </div> */}

      

//         {/* Our Values Section */}
//         {/* <div className="mt-8">
//           <h3 className="text-2xl font-semibold text-blue-400 mb-2 animate__animated animate__fadeIn animate__delay-8s">
//             Our Values
//           </h3>
//           <ul className="list-disc text-left space-y-4 text-lg animate__animated animate__fadeIn animate__delay-9s">
//             <div className="flex items-center justify-center ">
//             <FaMoneyBillWave className="text-3xl text-blue-400" />
//             <p>Giving customers value for money in all that we do, and continuing product and systems support.</p>
//             </div>
//             <div className="flex items-center justify-center">
//             <FaHandsHelping className="text-3xl text-blue-400" />
//             <p>Being socially responsible: helping out various tertiary education institutions by product donations and taking on students for vacation work.</p>
//             </div>
           
          
//           </ul>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default CompTwo;




// import React from 'react';
// import { FaTools, FaBuilding, FaIndustry, FaHandsHelping, FaCogs } from 'react-icons/fa'; // Icons import
// import image1 from '../assets/Website Header Images/Indeni.jpg';
// import image2 from '../assets/other imgs/widerange.jpg';
// import image3 from '../assets/other imgs/Classic PLC under Assembly.jpg';
// import image4 from '../assets/other imgs/widerange.jpg';
// import image5 from '../assets/other imgs/Workshop.jpg';

// const CompTwo = () => {
//   return (
//     <section className="text-white bg-slate-700 py-12 px-6 ">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Section Title */}
//         <h2 className="text-3xl text-blue-700 font-bold  mb-2 animate__animated animate__fadeIn animate__delay-1s">
//           About Us
//         </h2>
        
//         {/* Description */}
//         <p className="text-lg mb-6 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
//           Intelligent Systems Limited (ISL) is an Electrical and Systems Engineering company. We specialize in the fields of industrial automation, motor drives, process instrumentation, and low voltage systems, products, and engineering.
//         </p>

//         {/* What We Do (Cards Section) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//           {/* Card 1 */}
//           <div className="bg-slate-600 text-white p-0 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-3s">
//             <img src={image1} alt="System Integrator" className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Systems Integrator</h3>
//             <p>We design, build, and install automation and low voltage systems.</p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-slate-600 text-white p-0 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-4s">
//             <img src={image2} alt="Motor Control Centres" className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Motor Control Centres</h3>
//             <p>We build motor control centres (mcc) equiped with conventional controls as well as Variable frquency drives
// .</p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-slate-600 text-white p-0 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-5s">
//             <img src={image3} alt="Siemens Products" className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Siemens Industry Products</h3>
//             <p>We supply and support (backed up with siemens training) a wide range of siemens industry Products</p>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-slate-600 text-white p-0 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-6s">
//             <img src={image4} alt="Training & Support" className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Product Channel Partner</h3>
//             <p>We are a certified siemens product channel partner.</p>
//           </div>

//           {/* Card 5 */}
//           <div className="bg-slate-600 text-white p-0 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-slate-700 animate__animated animate__fadeIn animate__delay-7s">
//             <img src={image5} alt="Customer Support" className="w-full h-40 object-cover rounded-t-lg mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Customer Training</h3>
//             <p>We are a siemens sitrain® training partner. We conduct customer training on and off site in Various siemens (sitrain®) automation and drives courses.
// </p>
//           </div>
//         </div>

//         {/* Our Values Section */}
//         <div className="mt-8">
//           <h3 className="text-2xl font-semibold text-blue-400 mb-4 animate__animated animate__fadeIn animate__delay-8s">
//             Our Values
//           </h3>
//           <ul className="list-disc text-left space-y-4  text-lg animate__animated animate__fadeIn animate__delay-9s">
//             <li>Giving customers value for money in all that we do, and continuing product and systems support.</li>
//             <li>Being socially responsible: helping out various tertiary education institutions by product Donations and taking on student on vacational 
// .</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompTwo;
