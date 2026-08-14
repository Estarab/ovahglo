import React from "react";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const services = [
    {
      icon: "🌐",
      title: "Business Websites",
      description:
        "Professional websites designed to establish your business online and attract more customers.",
    },
    {
      icon: "🛒",
      title: "E-Commerce Websites",
      description:
        "Complete online stores where customers can browse products, place orders and make payments.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Websites that work beautifully on phones, tablets, laptops and desktop computers.",
    },
    {
      icon: "⚙️",
      title: "Web Applications",
      description:
        "Custom web applications built around your business processes and specific requirements.",
    },
    {
      icon: "🔐",
      title: "Secure & Reliable",
      description:
        "Modern development practices focused on security, reliability and performance.",
    },
    {
      icon: "🚀",
      title: "Website Optimization",
      description:
        "Fast-loading and optimized websites designed to provide a smooth customer experience.",
    },
  ];

  const packages = [
    {
      id: "starter",
      name: "STARTER WEBSITE",
      shortName: "Starter Website",
      description: "Perfect for individuals and small businesses",
      price: 3500,
      features: [
        "Professional Business Website",
        "Up to 5 Pages",
        "Mobile Responsive Design",
        "Contact Form",
        "Social Media Integration",
        "Basic SEO Setup",
        "Google Maps Integration",
        "Domain & Hosting Setup",
        "Website Training",
      ],
    },
    {
      id: "business",
      name: "BUSINESS WEBSITE",
      shortName: "Business Website",
      description: "Ideal for growing businesses",
      price: 5000,
      popular: true,
      features: [
        "Professional Custom Design",
        "Up to 10 Pages",
        "Mobile Responsive Design",
        "Advanced Contact Forms",
        "WhatsApp Integration",
        "Social Media Integration",
        "Google Maps Integration",
        "SEO Optimization",
        "Speed Optimization",
        "Domain & Hosting Setup",
        "Website Training",
        "After-Sales Support",
      ],
    },
    {
      id: "ecommerce",
      name: "E-COMMERCE WEBSITE",
      shortName: "E-Commerce Website",
      description: "Complete online selling solution",
      price: 6500,
      features: [
        "Complete Online Store",
        "Product Management",
        "Shopping Cart",
        "Customer Accounts",
        "Online Ordering",
        "Payment Gateway Integration",
        "Order Management",
        "Inventory Management",
        "WhatsApp Integration",
        "Mobile Responsive Design",
        "SEO Optimization",
        "Domain & Hosting Setup",
        "Training & Support",
      ],
    },
  ];

  const websiteTypes = [
    { icon: "🏢", title: "Business Websites" },
    { icon: "🛍️", title: "Online Stores" },
    { icon: "🍽️", title: "Restaurant Websites" },
    { icon: "🏥", title: "Hospital Websites" },
    { icon: "🎓", title: "School Websites" },
    { icon: "💼", title: "Corporate Websites" },
    { icon: "👨‍💼", title: "Portfolio Websites" },
    { icon: "🏨", title: "Hotel Websites" },
  ];

  return (
    <section className="bg-slate-900 text-white min-h-screen">

      {/* HERO */}

      <div className="relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-pink-950">

        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="inline-block bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                WE BUILD. YOU GROW.
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Ovahglo
                <span className="text-pink-500"> Web</span>
              </h1>

              <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
                Development Services
              </h2>

              <p className="text-xl md:text-2xl font-semibold mt-5 text-gray-200">
                Professional Websites
                <span className="text-pink-500">
                  {" "}That Grow Your Business
                </span>
              </p>

              <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-xl">
                We design and develop modern, responsive websites and web
                applications that help businesses establish a strong online
                presence, reach more customers and grow.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                {[
                  "Professional Design",
                  "Mobile Responsive",
                  "Fast & Reliable",
                  "Secure & Scalable",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-pink-500 rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="#packages"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-7 py-3 rounded-lg shadow-lg transition hover:scale-105"
                >
                  View Packages
                </a>

                <Link
                  to="/contact"
                  className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold px-7 py-3 rounded-lg transition"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            {/* WEBSITE MOCKUP */}

            <div className="relative">

              <div className="absolute inset-0 bg-pink-600/20 blur-3xl rounded-full" />

              <div className="relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">

                <div className="bg-slate-950 px-5 py-4 flex items-center gap-2">

                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />

                  <div className="ml-4 flex-1 bg-slate-800 rounded-md px-4 py-2 text-xs text-gray-400">
                    www.yourbusiness.com
                  </div>

                </div>

                <div className="p-8 md:p-10 bg-gradient-to-br from-slate-900 to-pink-950">

                  <div className="flex justify-between items-center mb-12">

                    <div className="text-xl font-extrabold">
                      YOUR<span className="text-pink-500">BRAND</span>
                    </div>

                    <div className="hidden sm:flex gap-4 text-xs text-gray-400">
                      <span>Home</span>
                      <span>About</span>
                      <span>Services</span>
                      <span>Contact</span>
                    </div>

                  </div>

                  <div className="max-w-sm">

                    <div className="h-3 bg-pink-500 rounded-full w-20 mb-5" />

                    <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
                      Grow Your Business
                      <span className="text-pink-500"> Online.</span>
                    </h3>

                    <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                      A modern digital presence designed to connect your
                      business with more customers.
                    </p>

                    <div className="mt-6 flex gap-3">

                      <div className="bg-pink-500 px-5 py-2 rounded-md text-xs font-bold">
                        Get Started
                      </div>

                      <div className="border border-slate-600 px-5 py-2 rounded-md text-xs">
                        Learn More
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* SERVICES */}

      <div className="bg-slate-800 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="inline-block bg-pink-500/10 border border-pink-500/30 text-pink-400 px-5 py-2 rounded-full text-sm font-bold">
              OUR SERVICES
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-5">
              Everything You Need to
              <span className="text-pink-500"> Go Online</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              From simple business websites to complete web applications,
              we build digital solutions around your business.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (

              <div
                key={service.title}
                className="bg-slate-900 border border-slate-700 rounded-xl p-7 hover:border-pink-500 transition-all duration-300 hover:-translate-y-2"
              >

                <div className="w-14 h-14 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center text-2xl mb-5">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* PACKAGES */}

      <div id="packages" className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <span className="inline-block bg-white text-black px-6 py-2 rounded-full font-bold">
            WEBSITE PACKAGES
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-5">
            Choose Your
            <span className="text-pink-500"> Website Package</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Select a package to start your website project.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {packages.map((pkg) => (

            <div
              key={pkg.id}
              className={`relative bg-black border rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? "border-pink-500 scale-[1.02]"
                  : "border-slate-700"
              }`}
            >

              {/* {pkg.popular && (
                <div className="absolute top-5 right-0 bg-pink-500 text-white px-5 py-2 text-xs font-bold rounded-l-full z-10">
                  MOST POPULAR
                </div>
              )} */}

              <div className="bg-gradient-to-r from-pink-600 to-pink-500 p-6">

                <h3 className="text-2xl font-extrabold text-center">
                  {pkg.name}
                </h3>

              </div>

              <div className="p-7">

                <p className="text-center text-gray-300 mb-7">
                  {pkg.description}
                </p>

                <div className="text-center mb-7">

                  <span className="text-gray-400 text-sm">
                    Starting from
                  </span>

                  <div className="text-4xl font-extrabold text-pink-500">
                    K{pkg.price.toLocaleString()}
                  </div>

                </div>

                <ul className="space-y-3 mb-8">

                  {pkg.features.map((feature) => (

                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >

                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>

                      <span className="text-sm text-gray-200">
                        {feature}
                      </span>

                    </li>

                  ))}

                </ul>

                {/* IMPORTANT:
                    Selected package is passed to the next page */}

                <Link
                  to={`/web-development/order?package=${pkg.id}`}
                  className="block text-center bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition hover:scale-[1.02]"
                >
                  Choose Package
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* WEBSITE TYPES */}

      <div className="bg-slate-800 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">

            <h2 className="text-3xl md:text-4xl font-bold">
              Websites For
              <span className="text-pink-500"> Every Business</span>
            </h2>

            <p className="text-gray-400 mt-3">
              Whatever your industry, we can build a solution around your
              needs.
            </p>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">

            {websiteTypes.map((website) => (

              <div
                key={website.title}
                className="text-center group"
              >

                <div className="w-20 h-20 mx-auto bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center text-3xl group-hover:border-pink-500 group-hover:bg-pink-500/10 transition-all">
                  {website.icon}
                </div>

                <p className="text-sm font-semibold mt-3">
                  {website.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* PROCESS */}

      <div className="bg-gradient-to-r from-pink-600 to-pink-500 py-14">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">

            <h2 className="text-3xl md:text-4xl font-extrabold">
              How We Build Your Website
            </h2>

            <p className="text-white/80 mt-3">
              From your idea to a complete online presence.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

            {[
              ["01", "Consultation", "We discuss your business, goals and requirements."],
              ["02", "Design", "We create the look and experience for your website."],
              ["03", "Development", "We turn the design into a functional website."],
              ["04", "Launch", "We test, deploy and help you get started."],
            ].map(([number, title, description]) => (

              <div key={number} className="text-center">

                <div className="w-14 h-14 mx-auto bg-black rounded-full flex items-center justify-center text-xl font-extrabold">
                  {number}
                </div>

                <h3 className="font-extrabold mt-4">
                  {title}
                </h3>

                <p className="text-sm text-white/80 mt-2">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* CTA */}

      <div className="bg-black border-t border-pink-500">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

            <div>

              <span className="text-pink-500 font-bold uppercase text-sm tracking-wider">
                Ready to Go Online?
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                Let's Build Your Website
              </h2>

              <p className="text-gray-400 mt-2 max-w-xl">
                Turn your business idea into a professional online presence.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="tel:+260977219990"
                className="bg-pink-500 hover:bg-pink-600 px-7 py-3 rounded-lg font-bold transition"
              >
                Call +260 977 219 990
              </a>

              <Link
                to="/contact"
                className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-7 py-3 rounded-lg font-bold transition"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* FOOTER */}

      <div className="bg-slate-950 py-6 text-center">

        <p className="text-gray-400 text-sm">
          Ovahglo Web Development • Avondale, Lusaka, Zambia
        </p>

        <p className="text-pink-500 font-bold mt-1">
          WE BUILD YOUR DIGITAL FUTURE
        </p>

      </div>

    </section>
  );
};

export default WebDevelopment;



// import React from "react";

// const OvahgloWebDevelopment = () => {
//   // ==========================================
//   // WEB DEVELOPMENT SERVICES
//   // ==========================================

//   const services = [
//     {
//       icon: "🌐",
//       title: "Business Websites",
//       description:
//         "Professional, responsive websites designed to establish your business online and attract more customers."
//     },
//     {
//       icon: "🛒",
//       title: "E-Commerce Websites",
//       description:
//         "Powerful online stores that allow your customers to browse products, place orders and make payments online."
//     },
//     {
//       icon: "📱",
//       title: "Responsive Design",
//       description:
//         "Websites that look and work perfectly on phones, tablets, laptops and desktop computers."
//     },
//     {
//       icon: "⚙️",
//       title: "Web Applications",
//       description:
//         "Custom web applications built around the specific processes and requirements of your business."
//     },
//     {
//       icon: "🔐",
//       title: "Secure & Reliable",
//       description:
//         "Modern development practices focused on security, reliability, performance and data protection."
//     },
//     {
//       icon: "🚀",
//       title: "Website Optimization",
//       description:
//         "Fast-loading and optimized websites designed to provide a smooth experience for your customers."
//     }
//   ];

//   // ==========================================
//   // WEBSITE PACKAGES
//   // ==========================================

//   const packages = [
//     {
//       name: "STARTER WEBSITE",
//       description: "Perfect for individuals and small businesses",
//       price: "K3,500",
//       popular: false,
//       features: [
//         "Professional Business Website",
//         "Up to 5 Pages",
//         "Mobile Responsive Design",
//         "Contact Form",
//         "Social Media Integration",
//         "Basic SEO Setup",
//         "Google Maps Integration",
//         "Domain & Hosting Setup",
//         "Website Training"
//       ]
//     },
//     {
//       name: "BUSINESS WEBSITE",
//       description: "Ideal for growing businesses",
//       price: "K5,000",
//       popular: true,
//       features: [
//         "Professional Custom Design",
//         "Up to 10 Pages",
//         "Mobile Responsive Design",
//         "Advanced Contact Forms",
//         "WhatsApp Integration",
//         "Social Media Integration",
//         "Google Maps Integration",
//         "SEO Optimization",
//         "Speed Optimization",
//         "Domain & Hosting Setup",
//         "Website Training",
//         "After-Sales Support"
//       ]
//     },
//     {
//       name: "E-COMMERCE WEBSITE",
//       description: "Complete online selling solution",
//       price: "K6,500",
//       popular: false,
//       features: [
//         "Complete Online Store",
//         "Product Management",
//         "Shopping Cart",
//         "Customer Accounts",
//         "Online Ordering",
//         "Payment Gateway Integration",
//         "Order Management",
//         "Inventory Management",
//         "WhatsApp Integration",
//         "Mobile Responsive Design",
//         "SEO Optimization",
//         "Domain & Hosting Setup",
//         "Training & Support"
//       ]
//     }
//   ];

//   // ==========================================
//   // TYPES OF WEBSITES
//   // ==========================================

//   const websiteTypes = [
//     {
//       icon: "🏢",
//       title: "Business Websites"
//     },
//     {
//       icon: "🛍️",
//       title: "Online Stores"
//     },
//     {
//       icon: "🍽️",
//       title: "Restaurant Websites"
//     },
//     {
//       icon: "🏥",
//       title: "Hospital Websites"
//     },
//     {
//       icon: "🎓",
//       title: "School Websites"
//     },
//     {
//       icon: "💼",
//       title: "Corporate Websites"
//     },
//     {
//       icon: "👨‍💼",
//       title: "Portfolio Websites"
//     },
//     {
//       icon: "🏨",
//       title: "Hotel Websites"
//     }
//   ];

//   // ==========================================
//   // DEVELOPMENT TECHNOLOGIES
//   // ==========================================

//   const technologies = [
//     {
//       title: "Modern Frontend",
//       description:
//         "Responsive and interactive interfaces built using modern web development technologies."
//     },
//     {
//       title: "Powerful Backend",
//       description:
//         "Reliable backend systems for managing users, products, orders, data and business operations."
//     },
//     {
//       title: "Database Integration",
//       description:
//         "Secure database solutions for storing and managing your business information."
//     },
//     {
//       title: "Payment Integration",
//       description:
//         "Integration with supported online payment solutions for convenient customer payments."
//     },
//     {
//       title: "API Integration",
//       description:
//         "Connect your website to third-party services, platforms and business systems."
//     },
//     {
//       title: "Admin Dashboard",
//       description:
//         "Custom dashboards that give you control over your website and business operations."
//     }
//   ];

//   return (
//     <section className="bg-slate-900 text-white min-h-screen">

//       {/* ======================================
//           HERO SECTION
//       ======================================= */}

//       <div className="relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-pink-950">

//         {/* Decorative Background */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>

//         <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">

//           <div className="grid lg:grid-cols-2 gap-12 items-center">

//             {/* LEFT SIDE */}

//             <div>

//               <div className="inline-block mb-5">
//                 <span className="bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold tracking-wider">
//                   WE BUILD. YOU GROW.
//                 </span>
//               </div>

//               <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//                 Ovahglo
//                 <span className="text-pink-500"> Web</span>
//               </h1>

//               <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
//                 Development Services
//               </h2>

//               <p className="text-xl md:text-2xl font-semibold mt-5 text-gray-200">
//                 Professional Websites
//                 <span className="text-pink-500">
//                   {" "}That Grow Your Business
//                 </span>
//               </p>

//               <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-xl">
//                 We design and develop modern, responsive and professional
//                 websites that help businesses establish a strong online
//                 presence, reach more customers and grow.
//               </p>

//               {/* Benefits */}

//               <div className="grid grid-cols-2 gap-4 mt-8">

//                 <div className="flex items-center gap-3">
//                   <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
//                   <span>Professional Design</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
//                   <span>Mobile Responsive</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
//                   <span>Fast & Reliable</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
//                   <span>Secure & Scalable</span>
//                 </div>

//               </div>

//               {/* CTA */}

//               <div className="flex flex-wrap gap-4 mt-8">

//                 <a
//                   href="/contact"
//                   className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-7 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
//                 >
//                   Get Your Website
//                 </a>

//                 <a
//                   href="/contact"
//                   className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold px-7 py-3 rounded-lg transition duration-300"
//                 >
//                   Request a Quote
//                 </a>

//               </div>

//             </div>

//             {/* RIGHT SIDE */}

//             <div className="relative flex justify-center">

//               <div className="absolute inset-0 bg-pink-600/20 blur-3xl rounded-full"></div>

//               <div className="relative w-full max-w-xl">

//                 {/* Browser Mockup */}

//                 <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">

//                   {/* Browser Header */}

//                   <div className="bg-slate-950 px-5 py-4 flex items-center gap-2">

//                     <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                     <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                     <div className="w-3 h-3 bg-green-400 rounded-full"></div>

//                     <div className="ml-4 flex-1 bg-slate-800 rounded-md px-4 py-2 text-xs text-gray-400">
//                       www.yourbusiness.com
//                     </div>

//                   </div>

//                   {/* Website Preview */}

//                   <div className="p-8 md:p-10 bg-gradient-to-br from-slate-900 to-pink-950">

//                     <div className="flex justify-between items-center mb-12">

//                       <div className="text-xl font-extrabold">
//                         YOUR<span className="text-pink-500">BRAND</span>
//                       </div>

//                       <div className="hidden sm:flex gap-4 text-xs text-gray-400">
//                         <span>Home</span>
//                         <span>About</span>
//                         <span>Services</span>
//                         <span>Contact</span>
//                       </div>

//                     </div>

//                     <div className="max-w-sm">

//                       <div className="h-3 bg-pink-500 rounded-full w-20 mb-5"></div>

//                       <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
//                         Grow Your Business
//                         <span className="text-pink-500"> Online.</span>
//                       </h3>

//                       <p className="text-gray-400 mt-4 text-sm leading-relaxed">
//                         A modern digital presence designed to connect your
//                         business with more customers.
//                       </p>

//                       <div className="mt-6 flex gap-3">

//                         <div className="bg-pink-500 px-5 py-2 rounded-md text-xs font-bold">
//                           Get Started
//                         </div>

//                         <div className="border border-slate-600 px-5 py-2 rounded-md text-xs">
//                           Learn More
//                         </div>

//                       </div>

//                     </div>

//                     <div className="grid grid-cols-3 gap-3 mt-10">

//                       <div className="h-20 bg-slate-800/80 rounded-lg"></div>
//                       <div className="h-20 bg-pink-500/20 rounded-lg"></div>
//                       <div className="h-20 bg-slate-800/80 rounded-lg"></div>

//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>
//       </div>


//       {/* ======================================
//           SERVICES SECTION
//       ======================================= */}

//       <div className="bg-slate-800 py-16">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-12">

//             <span className="inline-block bg-pink-500/10 border border-pink-500/30 text-pink-400 px-5 py-2 rounded-full text-sm font-bold">
//               OUR SERVICES
//             </span>

//             <h2 className="text-3xl md:text-4xl font-bold mt-5">
//               Everything You Need to
//               <span className="text-pink-500"> Go Online</span>
//             </h2>

//             <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
//               From simple business websites to complete web applications,
//               we build digital solutions around your business needs.
//             </p>

//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//             {services.map((service, index) => (

//               <div
//                 key={index}
//                 className="bg-slate-900 border border-slate-700 rounded-xl p-7 hover:border-pink-500 transition-all duration-300 hover:-translate-y-2"
//               >

//                 <div className="w-14 h-14 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center text-2xl mb-5">
//                   {service.icon}
//                 </div>

//                 <h3 className="text-xl font-bold mb-3">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-400 leading-relaxed">
//                   {service.description}
//                 </p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </div>


//       {/* ======================================
//           CUSTOM DEVELOPMENT SECTION
//       ======================================= */}

//       <div className="relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-pink-950">

//         <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

//         <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative z-10">

//           <div className="grid lg:grid-cols-2 gap-12 items-center">

//             {/* LEFT */}

//             <div>

//               <span className="inline-block bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-5">
//                 CUSTOM DEVELOPMENT
//               </span>

//               <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
//                 Your Business Is
//                 <span className="text-pink-500"> Unique.</span>
//               </h2>

//               <h3 className="text-2xl md:text-3xl font-extrabold mt-4">
//                 Your Website Should Be Too.
//               </h3>

//               <p className="text-gray-300 text-lg mt-5 leading-relaxed">
//                 We don't believe every business should use the same website.
//                 Our custom development approach allows us to create websites
//                 and web applications specifically around your goals,
//                 customers and business processes.
//               </p>

//               <div className="mt-8 space-y-5">

//                 <div className="flex gap-4">

//                   <div className="w-10 h-10 flex-shrink-0 bg-pink-500 rounded-lg flex items-center justify-center font-bold">
//                     01
//                   </div>

//                   <div>
//                     <h4 className="font-bold text-lg">
//                       Understand Your Business
//                     </h4>

//                     <p className="text-gray-400 mt-1">
//                       We first understand what your business needs and what
//                       you want your website to achieve.
//                     </p>
//                   </div>

//                 </div>

//                 <div className="flex gap-4">

//                   <div className="w-10 h-10 flex-shrink-0 bg-pink-500 rounded-lg flex items-center justify-center font-bold">
//                     02
//                   </div>

//                   <div>
//                     <h4 className="font-bold text-lg">
//                       Design the Experience
//                     </h4>

//                     <p className="text-gray-400 mt-1">
//                       We create a modern user experience designed around
//                       your customers.
//                     </p>
//                   </div>

//                 </div>

//                 <div className="flex gap-4">

//                   <div className="w-10 h-10 flex-shrink-0 bg-pink-500 rounded-lg flex items-center justify-center font-bold">
//                     03
//                   </div>

//                   <div>
//                     <h4 className="font-bold text-lg">
//                       Build & Launch
//                     </h4>

//                     <p className="text-gray-400 mt-1">
//                       We develop, test and deploy your website so you can
//                       start reaching customers online.
//                     </p>
//                   </div>

//                 </div>

//               </div>

//             </div>


//             {/* RIGHT */}

//             <div className="relative">

//               <div className="absolute inset-0 bg-pink-600/20 blur-3xl"></div>

//               <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-7 shadow-2xl">

//                 <div className="flex items-center justify-between border-b border-slate-700 pb-5">

//                   <div>
//                     <p className="text-xs text-gray-500 uppercase font-bold">
//                       Development
//                     </p>

//                     <h3 className="text-2xl font-extrabold mt-1">
//                       Custom Web Solution
//                     </h3>
//                   </div>

//                   <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-2xl">
//                     &lt;/&gt;
//                   </div>

//                 </div>

//                 <div className="grid grid-cols-2 gap-4 mt-6">

//                   {[
//                     "Responsive Design",
//                     "Admin Dashboard",
//                     "Database",
//                     "API Integration",
//                     "Online Payments",
//                     "User Accounts"
//                   ].map((item, index) => (

//                     <div
//                       key={index}
//                       className="bg-slate-800 rounded-xl p-4 border border-slate-700"
//                     >

//                       <div className="w-2 h-2 bg-pink-500 rounded-full mb-3"></div>

//                       <p className="text-sm font-semibold">
//                         {item}
//                       </p>

//                     </div>

//                   ))}

//                 </div>

//                 <div className="mt-6 bg-gradient-to-r from-pink-600 to-pink-500 rounded-xl p-5">

//                   <p className="text-sm font-semibold">
//                     Built around your business.
//                   </p>

//                   <p className="text-xl font-extrabold mt-1">
//                     Designed to grow with you.
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* ======================================
//           WHY CHOOSE US
//       ======================================= */}

//       <div className="max-w-7xl mx-auto px-6 py-16">

//         <div className="text-center mb-12">

//           <span className="inline-block bg-white text-black px-6 py-2 rounded-full font-bold">
//             WHY OVahGLO
//           </span>

//           <h2 className="text-3xl md:text-5xl font-extrabold mt-5">
//             More Than Just a
//             <span className="text-pink-500"> Website</span>
//           </h2>

//           <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//             We focus on creating websites that are useful, professional and
//             built to support your business goals.
//           </p>

//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//           {technologies.map((item, index) => (

//             <div
//               key={index}
//               className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-pink-500 transition-all duration-300"
//             >

//               <div className="flex items-center gap-4 mb-4">

//                 <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center font-bold">
//                   {index + 1}
//                 </div>

//                 <h3 className="text-xl font-bold">
//                   {item.title}
//                 </h3>

//               </div>

//               <p className="text-gray-400 leading-relaxed">
//                 {item.description}
//               </p>

//             </div>

//           ))}

//         </div>

//       </div>


//       {/* ======================================
//           PACKAGES
//       ======================================= */}

//       <div className="bg-slate-800 py-16">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-12">

//             <span className="inline-block bg-white text-black px-6 py-2 rounded-full font-bold">
//               WEBSITE PACKAGES
//             </span>

//             <h2 className="text-4xl md:text-5xl font-extrabold mt-5">
//               Choose Your
//               <span className="text-pink-500"> Website Package</span>
//             </h2>

//             <p className="text-gray-400 mt-3">
//               Flexible solutions for businesses at different stages.
//             </p>

//           </div>


//           <div className="grid lg:grid-cols-3 gap-8">

//             {packages.map((pkg, index) => (

//               <div
//                 key={index}
//                 className={`relative bg-black border rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
//                   pkg.popular
//                     ? "border-pink-500 scale-[1.02]"
//                     : "border-slate-700"
//                 }`}
//               >

//                 {/* Popular Badge */}

//                 {/* {pkg.popular && (

//                   <div className="absolute top-5 right-0 bg-pink-500 text-white px-5 py-2 text-xs font-bold rounded-l-full z-10">
//                     MOST POPULAR
//                   </div>

//                 )} */}


//                 {/* Package Header */}

//                 <div className="bg-gradient-to-r from-pink-600 to-pink-500 p-6">

//                   <h3 className="text-2xl font-extrabold text-center">
//                     {pkg.name}
//                   </h3>

//                 </div>


//                 <div className="p-7">

//                   <p className="text-center text-gray-300 mb-7">
//                     {pkg.description}
//                   </p>


//                   {/* Website Illustration */}

//                   <div className="h-36 flex items-center justify-center mb-7">

//                     <div className="w-full max-w-xs bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">

//                       <div className="bg-slate-950 px-3 py-2 flex gap-1">

//                         <div className="w-2 h-2 bg-red-400 rounded-full"></div>
//                         <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                         <div className="w-2 h-2 bg-green-400 rounded-full"></div>

//                       </div>

//                       <div className="p-4">

//                         <div className="h-2 bg-pink-500 rounded w-12 mb-3"></div>

//                         <div className="h-3 bg-slate-600 rounded w-3/4 mb-2"></div>

//                         <div className="h-2 bg-slate-700 rounded w-full mb-2"></div>

//                         <div className="h-2 bg-slate-700 rounded w-2/3"></div>

//                       </div>

//                     </div>

//                   </div>


//                   {/* Features */}

//                   <ul className="space-y-3 mb-7">

//                     {pkg.features.map((feature, featureIndex) => (

//                       <li
//                         key={featureIndex}
//                         className="flex items-start gap-3"
//                       >

//                         <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center text-xs font-bold">
//                           ✓
//                         </span>

//                         <span className="text-sm text-gray-200">
//                           {feature}
//                         </span>

//                       </li>

//                     ))}

//                   </ul>


//                   {/* Price */}

//                   <div className="bg-pink-500 rounded-xl py-5 text-center">

//                     <div className="text-4xl font-extrabold">
//                       {pkg.price}
//                     </div>

//                     <div className="text-xs font-semibold uppercase mt-1">
//                       Starting Price
//                     </div>

//                   </div>


//                   {/* CTA */}

//                   <a
//                     href="/contact"
//                     className="block text-center border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold py-3 rounded-xl mt-5 transition"
//                   >
//                     Choose Package
//                   </a>

//                 </div>

//               </div>

//             ))}

//           </div>

//           <p className="text-center text-gray-500 text-sm mt-8">
//             * Final pricing may vary depending on your specific requirements
//             and project complexity.
//           </p>

//         </div>

//       </div>


//       {/* ======================================
//           WEBSITE TYPES
//       ======================================= */}

//       <div className="max-w-7xl mx-auto px-6 py-16">

//         <div className="text-center mb-10">

//           <h2 className="text-3xl md:text-4xl font-bold">
//             Websites For
//             <span className="text-pink-500"> Every Business</span>
//           </h2>

//           <p className="text-gray-400 mt-3">
//             Whatever your industry, we can build a digital solution around
//             your needs.
//           </p>

//         </div>


//         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">

//           {websiteTypes.map((website, index) => (

//             <div
//               key={index}
//               className="text-center group"
//             >

//               <div className="w-20 h-20 mx-auto bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center text-3xl group-hover:border-pink-500 group-hover:bg-pink-500/10 transition-all duration-300">
//                 {website.icon}
//               </div>

//               <p className="text-sm font-semibold mt-3">
//                 {website.title}
//               </p>

//             </div>

//           ))}

//         </div>

//       </div>


//       {/* ======================================
//           DEVELOPMENT PROCESS
//       ======================================= */}

//       <div className="bg-gradient-to-r from-pink-600 to-pink-500 py-14">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-10">

//             <h2 className="text-3xl md:text-4xl font-extrabold">
//               How We Build Your Website
//             </h2>

//             <p className="text-white/80 mt-3">
//               A simple process from idea to launch.
//             </p>

//           </div>


//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

//             <div className="text-center">

//               <div className="w-14 h-14 mx-auto bg-black rounded-full flex items-center justify-center text-xl font-extrabold">
//                 01
//               </div>

//               <h3 className="font-extrabold mt-4">
//                 Consultation
//               </h3>

//               <p className="text-sm text-white/80 mt-2">
//                 We discuss your business, goals and requirements.
//               </p>

//             </div>


//             <div className="text-center">

//               <div className="w-14 h-14 mx-auto bg-black rounded-full flex items-center justify-center text-xl font-extrabold">
//                 02
//               </div>

//               <h3 className="font-extrabold mt-4">
//                 Design
//               </h3>

//               <p className="text-sm text-white/80 mt-2">
//                 We create the look and experience for your website.
//               </p>

//             </div>


//             <div className="text-center">

//               <div className="w-14 h-14 mx-auto bg-black rounded-full flex items-center justify-center text-xl font-extrabold">
//                 03
//               </div>

//               <h3 className="font-extrabold mt-4">
//                 Development
//               </h3>

//               <p className="text-sm text-white/80 mt-2">
//                 We turn the design into a functional website.
//               </p>

//             </div>


//             <div className="text-center">

//               <div className="w-14 h-14 mx-auto bg-black rounded-full flex items-center justify-center text-xl font-extrabold">
//                 04
//               </div>

//               <h3 className="font-extrabold mt-4">
//                 Launch
//               </h3>

//               <p className="text-sm text-white/80 mt-2">
//                 We test, deploy and help you get started.
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* ======================================
//           CALL TO ACTION
//       ======================================= */}

//       <div className="bg-black border-t border-pink-500">

//         <div className="max-w-7xl mx-auto px-6 py-14">

//           <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

//             <div>

//               <span className="text-pink-500 font-bold uppercase text-sm tracking-wider">
//                 Ready to Go Online?
//               </span>

//               <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
//                 Let's Build Your Website
//               </h2>

//               <p className="text-gray-400 mt-2 max-w-xl">
//                 Turn your business idea into a professional online presence
//                 with Ovahglo Web Development.
//               </p>

//             </div>


//             <div className="flex flex-col sm:flex-row gap-4 items-center">

//               <a
//                 href="tel:+260977219990"
//                 className="bg-pink-500 hover:bg-pink-600 px-7 py-3 rounded-lg font-bold transition"
//               >
//                 Call +260 977 219 990
//               </a>

//               <a
//                 href="/contact"
//                 className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-7 py-3 rounded-lg font-bold transition"
//               >
//                 Get a Quote
//               </a>

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* ======================================
//           FOOTER
//       ======================================= */}

//       <div className="bg-slate-950 py-6 text-center">

//         <p className="text-gray-400 text-sm">
//           Ovahglo Web Development • Avondale, Lusaka, Zambia
//         </p>

//         <p className="text-pink-500 font-bold mt-1">
//           WE BUILD YOUR DIGITAL FUTURE
//         </p>

//       </div>

//     </section>
//   );
// };

// export default OvahgloWebDevelopment;

