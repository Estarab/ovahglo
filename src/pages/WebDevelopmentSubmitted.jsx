import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WebDevelopmentSubmitted = () => {

  const [project, setProject] = useState(null);

  useEffect(() => {

    const savedProject = localStorage.getItem(
      "ovahglo_web_project"
    );

    if (savedProject) {
      try {
        setProject(JSON.parse(savedProject));
      } catch (error) {
        console.error("Unable to read project:", error);
      }
    }

  }, []);

  const referenceNumber = project
    ? `OVH-${new Date(project.submittedAt)
        .getTime()
        .toString()
        .slice(-6)}`
    : "OVH-PENDING";

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}

      <header className="border-b border-slate-800 bg-black">

        <div className="max-w-7xl mx-auto px-6 py-5">

          <Link
            to="/web-development"
            className="text-2xl font-extrabold"
          >
            Ovahglo
            <span className="text-pink-500">.</span>
          </Link>

        </div>

      </header>


      {/* CONTENT */}

      <main className="max-w-4xl mx-auto px-6 py-16">

        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-4xl">
            ✓
          </div>

          <p className="text-green-400 font-bold uppercase tracking-wider text-sm mt-7">
            Project Request Received
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            Thank You!
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
            We've received your website project request. Our team will
            review your requirements and contact you to discuss the project
            and confirm the final quotation.
          </p>

        </div>


        {/* REFERENCE */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 mt-10">

          <div className="text-center">

            <p className="text-gray-500 text-sm uppercase tracking-wider">
              Project Reference
            </p>

            <p className="text-2xl font-extrabold text-pink-500 mt-2">
              {referenceNumber}
            </p>

          </div>


          {project && (

            <div className="mt-8 border-t border-slate-800 pt-7">

              <div className="grid md:grid-cols-2 gap-5">

                <div className="bg-slate-800 rounded-xl p-5">

                  <p className="text-xs text-gray-500 uppercase">
                    Business
                  </p>

                  <p className="font-bold text-lg mt-1">
                    {project.businessName}
                  </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-5">

                  <p className="text-xs text-gray-500 uppercase">
                    Package
                  </p>

                  <p className="font-bold text-lg mt-1">
                    {project.packageName}
                  </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-5">

                  <p className="text-xs text-gray-500 uppercase">
                    Estimated Cost
                  </p>

                  <p className="font-bold text-lg text-pink-500 mt-1">
                    K{project.estimatedTotal?.toLocaleString()}
                  </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-5">

                  <p className="text-xs text-gray-500 uppercase">
                    Status
                  </p>

                  <p className="font-bold text-lg text-yellow-400 mt-1">
                    Requirements Review
                  </p>

                </div>

              </div>

            </div>

          )}

        </div>


        {/* WHAT HAPPENS NEXT */}

        <div className="mt-8">

          <h2 className="text-2xl font-extrabold text-center">
            What Happens Next?
          </h2>

          <div className="grid md:grid-cols-3 gap-5 mt-7">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">

              <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto text-pink-500 font-bold">
                01
              </div>

              <h3 className="font-bold mt-4">
                We Review
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Our team reviews your requirements and project details.
              </p>

            </div>


            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">

              <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto text-pink-500 font-bold">
                02
              </div>

              <h3 className="font-bold mt-4">
                We Contact You
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                We'll contact you to discuss the project and any questions.
              </p>

            </div>


            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">

              <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto text-pink-500 font-bold">
                03
              </div>

              <h3 className="font-bold mt-4">
                Development Begins
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Once approved, we'll finalize the project and begin development.
              </p>

            </div>

          </div>

        </div>


        {/* ACTIONS */}

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <Link
            to="/web-development"
            className="bg-pink-500 hover:bg-pink-600 text-center px-7 py-3 rounded-lg font-bold"
          >
            Back to Web Development
          </Link>

          <a
            href="tel:+260977219990"
            className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-center px-7 py-3 rounded-lg font-bold"
          >
            Call +260 977 219 990
          </a>

        </div>

      </main>


      {/* FOOTER */}

      <footer className="border-t border-slate-800 py-6 text-center">

        <p className="text-gray-500 text-sm">
          Ovahglo Web Development • Avondale, Lusaka, Zambia
        </p>

      </footer>

    </div>
  );
};

export default WebDevelopmentSubmitted;