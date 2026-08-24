import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";




const categories = [
  "ALL",
  "BRANDING",
  "EMBROIDERY",
  "PRINTING",
  "DIGITAL",
  "ADVERTISING",
  "SOFTWARE",
];

const projects = [
 {
  id: 1,
  title: "Vehicle Branding",
  category: "BRANDING",
  image:
    "https://res.cloudinary.com/dgpnpqthy/image/upload/v1787570564/SEEDCO104.jpg",
  shortDescription:
    "Professional vehicle branding that transforms cars into powerful moving advertisements for your business.",
  challenge:
    "The client wanted to turn their vehicle into a professional mobile advertising platform that would increase brand visibility wherever the car travelled.",
  solution: [
    "Vehicle Branding",
    "Custom Graphic Design",
    "Logo Placement",
    "Branded Color Scheme",
    "Promotional Messaging",
    "Professional Vinyl Installation",
  ],
  results:
    "The vehicle was transformed into a bold and professional branded advertisement, giving the business greater visibility and helping the brand stand out on the road.",
  year: "2026",
  client: "Ovahglo Client",
},

  {
  id: 2,
  title: "Filling Station Branding",
  category: "BRANDING",
  image: "https://res.cloudinary.com/dgpnpqthy/image/upload/v1787574214/fillingstation.png",
  shortDescription:
    "Complete visual branding for a modern filling station, creating a bold, consistent and recognizable identity across the facility.",
  challenge:
    "The filling station needed a strong and professional visual identity that would be highly visible to motorists while creating a consistent brand experience across the entire facility.",
  solution: [
    "Filling Station Branding",
    "Building Signage",
    "Canopy Branding",
    "Fuel Pump Branding",
    "Exterior Brand Graphics",
    "Corporate Color Application",
  ],
  results:
    "The facility was transformed into a bold and recognizable branded environment, creating stronger visual visibility and a consistent identity across the station.",
  year: "2026",
  client: "Filling Station Client",
},
//   {
//     id: 3,
//     title: "Ovahglo Digital",
//     category: "DIGITAL",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
//     shortDescription:
//       "A modern digital experience designed to take a growing business online.",
//     challenge:
//       "The client needed a modern online presence that could clearly communicate its services and generate new enquiries.",
//     solution: [
//       "Website Design",
//       "Responsive Development",
//       "UI/UX Design",
//       "Contact System",
//       "SEO Structure",
//       "Analytics Integration",
//     ],
//     results:
//       "The new website provided the business with a professional digital presence and a stronger platform for customer acquisition.",
//     year: "2026",
//     client: "Ovahglo Digital",
//   },

//   {
//     id: 4,
//     title: "Urban Campaign",
//     category: "ADVERTISING",
//     image:
//       "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
//     shortDescription:
//       "A multi-platform advertising campaign built for maximum visibility.",
//     challenge:
//       "The client wanted to increase awareness of a new product launch across both physical and digital channels.",
//     solution: [
//       "Campaign Strategy",
//       "Social Media Graphics",
//       "Digital Advertising",
//       "Billboard Design",
//       "Promotional Materials",
//       "Content Creation",
//     ],
//     results:
//       "The campaign created a consistent visual identity across digital and physical advertising channels.",
//     year: "2026",
//     client: "Urban Campaign",
//   },

//   {
//     id: 5,
//     title: "RetailPro POS",
//     category: "SOFTWARE",
//     image:
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
//     shortDescription:
//       "A customized point-of-sale system designed for modern retail operations.",
//     challenge:
//       "The business needed a reliable POS solution for managing sales, inventory and daily operations.",
//     solution: [
//       "POS Software",
//       "Inventory Management",
//       "Sales Tracking",
//       "Receipt Printing",
//       "Dashboard",
//       "Offline Support",
//     ],
//     results:
//       "The customized system simplified daily sales management and gave the business better visibility over its operations.",
//     year: "2026",
//     client: "RetailPro",
//   },

  {
  id: 6,
  title: "Embroidery",
  category: "EMBROIDERY",
  image:
    "https://res.cloudinary.com/dgpnpqthy/image/upload/v1787574834/OVAH005.jpg",
  shortDescription:
    "Professional embroidery services that add a premium and professional finish to uniforms, workwear, caps, and branded clothing.",
  challenge:
    "The client wanted to create professional branded clothing that would give their team a consistent appearance while strengthening brand recognition.",
  solution: [
    "Custom Embroidery",
    "Logo Digitization",
    "Uniform Branding",
    "Cap Embroidery",
    "Workwear Branding",
    "High-Quality Thread Stitching",
  ],
  results:
    "The branded clothing achieved a clean and professional appearance, giving the team a consistent corporate identity while increasing brand visibility.",
  year: "2026",
  client: "Ovahglo Client",
},

  {
  id: 7,
  title: "Embroidery",
  category: "EMBROIDERY",
  image:
    "https://res.cloudinary.com/dgpnpqthy/image/upload/v1787575239/OVAH006.jpg",
  shortDescription:
    "Professional embroidery services that add a premium and professional finish to uniforms, workwear, caps, and branded clothing.",
  challenge:
    "The client wanted to create professional branded clothing that would give their team a consistent appearance while strengthening brand recognition.",
  solution: [
    "Custom Embroidery",
    "Logo Digitization",
    "Uniform Branding",
    "Cap Embroidery",
    "Workwear Branding",
    "High-Quality Thread Stitching",
  ],
  results:
    "The branded clothing achieved a clean and professional appearance, giving the team a consistent corporate identity while increasing brand visibility.",
  year: "2026",
  client: "Ovahglo Client",
},

  {
  id: 8,
  title: "Embroidery",
  category: "EMBROIDERY",
  image:
    "https://res.cloudinary.com/dgpnpqthy/image/upload/v1787575511/embrodery2.jpg",
  shortDescription:
    "Professional embroidery services that add a premium and professional finish to uniforms, workwear, caps, and branded clothing.",
  challenge:
    "The client wanted to create professional branded clothing that would give their team a consistent appearance while strengthening brand recognition.",
  solution: [
    "Custom Embroidery",
    "Logo Digitization",
    "Uniform Branding",
    "Cap Embroidery",
    "Workwear Branding",
    "High-Quality Thread Stitching",
  ],
  results:
    "The branded clothing achieved a clean and professional appearance, giving the team a consistent corporate identity while increasing brand visibility.",
  year: "2026",
  client: "Ovahglo Client",
},

  {
  id: 9,
  title: "Embroidery",
  category: "EMBROIDERY",
  image:
    "https://res.cloudinary.com/dgpnpqthy/image/upload/v1787575529/embrodery.jpg",
  shortDescription:
    "Professional embroidery services that add a premium and professional finish to uniforms, workwear, caps, and branded clothing.",
  challenge:
    "The client wanted to create professional branded clothing that would give their team a consistent appearance while strengthening brand recognition.",
  solution: [
    "Custom Embroidery",
    "Logo Digitization",
    "Uniform Branding",
    "Cap Embroidery",
    "Workwear Branding",
    "High-Quality Thread Stitching",
  ],
  results:
    "The branded clothing achieved a clean and professional appearance, giving the team a consistent corporate identity while increasing brand visibility.",
  year: "2026",
  client: "Ovahglo Client",
},
  
{
  id: 9,
  title: "High Quality Large Format Printing",
  category: "PRINTING",
  image:
    "https://res.cloudinary.com/dgpnpqthy/image/upload/v1787576410/OVAH003.jpg",
  shortDescription:
    "High-quality banner printing that delivers bold, vibrant, and professional visuals for businesses, events, promotions, and outdoor advertising.",
  challenge:
    "The client needed an eye-catching and durable banner that could effectively communicate their message and attract attention in a busy environment.",
  solution: [
    "Custom Banner Design",
    "High-Quality Large Format Printing",
    "Vibrant Full-Color Printing",
    "Custom Banner Sizes",
    "Promotional Messaging",
    "Professional Finishing",
  ],
  results:
    "The client received a vibrant and professional banner that clearly communicated their message, increased visibility, and created a strong visual presence for their brand.",
  year: "2026",
  client: "Ovahglo Client",
},

//   {
//     id: 6,
//     title: "Luxury Skin",
//     category: "BRANDING",
//     image:
//       "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=80",
//     shortDescription:
//       "A premium beauty brand identity designed to communicate elegance.",
//     challenge:
//       "The client wanted a premium visual identity that would position its products as high-quality and trustworthy.",
//     solution: [
//       "Logo Design",
//       "Packaging",
//       "Brand Colors",
//       "Typography",
//       "Product Mockups",
//       "Social Media Branding",
//     ],
//     results:
//       "The new identity created a premium and consistent visual presence across packaging and digital platforms.",
//     year: "2026",
//     client: "Luxury Skin",
//   },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

function InteractivePortfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const navigate = useNavigate();

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section
        id="portfolio"
        className="relative overflow-hidden bg-white px-5 py-20 md:px-10 lg:px-16 xl:px-24"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl opacity-70" />

        <div className="relative mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500"
              >
                Selected Work
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl"
              >
                OUR WORK
                <br />
                <span className="text-pink-500">
                  SPEAKS LOUDER.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
              >
                From brand identities and printed campaigns to digital
                experiences and custom software, we create work designed
                to make businesses impossible to ignore.
              </motion.p>
            </div>

            <div className="hidden lg:block">
              <p className="text-right text-sm text-slate-400">
                Explore our work
                <br />
                ↓
              </p>
            </div>
          </div>

          {/* CATEGORY FILTER */}
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative rounded-full px-5 py-3 text-xs font-bold tracking-widest transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-slate-900 text-white shadow-lg"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT GRID */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.2 },
                  }}
                  onClick={() => openProject(project)}
                  className="group cursor-pointer"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-slate-950/0 transition-all duration-500 group-hover:bg-slate-950/60" />

                    {/* Category */}
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white/90 px-3 py-2 text-[10px] font-bold tracking-widest text-slate-900 backdrop-blur">
                        {project.category}
                      </span>
                    </div>

                    {/* View Project */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform duration-500 group-hover:scale-100">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>

                  {/* CARD INFO */}
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                      <ChevronRight size={17} />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* EMPTY STATE */}
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <h3 className="text-2xl font-bold text-slate-900">
                No projects found
              </h3>

              <p className="mt-2 text-slate-500">
                More work is coming soon.
              </p>
            </div>
          )}

          {/* BOTTOM CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-slate-900 px-8 py-10 text-center md:flex-row md:text-left"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Have a project?
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Let's create something unforgettable.
              </h3>
            </div>

           <button
  onClick={() => navigate("/start-project")}
  className="group flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-slate-900 transition-all hover:scale-105"
>
  Start a Project

  <ArrowUpRight
    size={18}
    className="transition-transform group-hover:rotate-45"
  />
</button>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-md md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={closeProject}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur transition-all hover:scale-105"
              >
                <X size={21} />
              </button>

              {/* HERO IMAGE */}
              <div className="relative h-[300px] overflow-hidden md:h-[500px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-12">
                  <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-xs font-bold tracking-widest text-slate-900">
                    {selectedProject.category}
                  </span>

                  <h2 className="text-4xl font-black text-white md:text-6xl">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* CASE STUDY CONTENT */}
              <div className="grid grid-cols-1 gap-12 p-6 md:p-12 lg:grid-cols-[1fr_0.8fr]">

                {/* LEFT */}
                <div>
                  <div className="mb-10">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                      The Challenge
                    </p>

                    <h3 className="mb-4 text-2xl font-bold text-slate-900">
                      The problem we needed to solve
                    </h3>

                    <p className="text-base leading-8 text-slate-600">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                      The Solution
                    </p>

                    <h3 className="mb-6 text-2xl font-bold text-slate-900">
                      What we did
                    </h3>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {selectedProject.solution.map(
                        (item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                          >
                            <CheckCircle2
                              size={18}
                              className="shrink-0 text-slate-900"
                            />

                            <span className="text-sm font-medium text-slate-700">
                              {item}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <div className="rounded-2xl bg-slate-950 p-7 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                      Project Details
                    </p>

                    <div className="mt-7 space-y-6">
                      <div>
                        <p className="text-xs text-slate-500">
                          Client
                        </p>

                        <p className="mt-1 font-semibold">
                          {selectedProject.client}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          Year
                        </p>

                        <p className="mt-1 font-semibold">
                          {selectedProject.year}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          Category
                        </p>

                        <p className="mt-1 font-semibold">
                          {selectedProject.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                      Results
                    </p>

                    <h3 className="mb-4 text-2xl font-bold text-slate-900">
                      The outcome
                    </h3>

                    <p className="text-base leading-8 text-slate-600">
                      {selectedProject.results}
                    </p>
                  </div>
                </div>
              </div>

              {/* MODAL FOOTER */}
              <div className="flex flex-col items-center justify-between gap-5 border-t border-slate-100 px-6 py-7 md:flex-row md:px-12">
                <p className="text-sm text-slate-500">
                  Ready to build something like this?
                </p>

                <button
  onClick={() => {
    closeProject();
    navigate("/start-project");
  }}
  className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105"
>
  Start Your Project

  <ArrowUpRight size={17} />
</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default InteractivePortfolio;