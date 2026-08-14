import React, { useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const WebDevelopmentOrder = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedPackage = searchParams.get("package");

  const packages = {
    starter: {
      name: "Starter Website",
      price: 2500,
      description: "Perfect for individuals and small businesses",
    },

    business: {
      name: "Business Website",
      price: 4500,
      description: "Ideal for growing businesses",
    },

    ecommerce: {
      name: "E-Commerce Website",
      price: 7500,
      description: "Complete online selling solution",
    },
  };

  const currentPackage = packages[selectedPackage];

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    location: "",
    industry: "",

    websiteType: "",
    pages: [],
    hasDomain: "",
    hasHosting: "",
    businessEmail: "",
    onlinePayments: "",
    whatsapp: "",
    ecommerceProducts: "",

    websiteDescription: "",
    referenceWebsite: "",
    additionalRequirements: "",

    files: [],
  });

  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  const togglePage = (page) => {
    setFormData((previous) => ({
      ...previous,
      pages: previous.pages.includes(page)
        ? previous.pages.filter((item) => item !== page)
        : [...previous.pages, page],
    }));
  };

  const handleFiles = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    setFormData((previous) => ({
      ...previous,
      files: [...previous.files, ...selectedFiles],
    }));
  };

  const removeFile = (index) => {
    setFormData((previous) => ({
      ...previous,
      files: previous.files.filter((_, fileIndex) => fileIndex !== index),
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.businessName.trim()) {
        newErrors.businessName = "Business name is required.";
      }

      if (!formData.contactPerson.trim()) {
        newErrors.contactPerson = "Contact person is required.";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email address is required.";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
      }

      if (!formData.industry) {
        newErrors.industry = "Please select your industry.";
      }
    }

    if (step === 2) {
      if (!formData.websiteType) {
        newErrors.websiteType = "Please select a website type.";
      }

      if (formData.pages.length === 0) {
        newErrors.pages = "Please select at least one page.";
      }

      if (!formData.websiteDescription.trim()) {
        newErrors.websiteDescription =
          "Please tell us what you want your website to do.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;

    setStep((previous) => Math.min(previous + 1, 4));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const previousStep = () => {
    setStep((previous) => Math.max(previous - 1, 1));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const additionalCosts = useMemo(() => {
    if (!currentPackage) return 0;

    let total = 0;

    if (formData.onlinePayments === "yes") {
      total += 800;
    }

    if (formData.businessEmail === "yes") {
      total += 350;
    }

    if (formData.pages.length > 10) {
      total += (formData.pages.length - 10) * 250;
    }

    return total;
  }, [formData, currentPackage]);

  const estimatedTotal = currentPackage
    ? currentPackage.price + additionalCosts
    : 0;

  const submitProject = () => {
    const project = {
      ...formData,
      package: selectedPackage,
      packageName: currentPackage?.name,
      basePrice: currentPackage?.price,
      additionalCosts,
      estimatedTotal,
      submittedAt: new Date().toISOString(),

      // Files cannot be stored directly in localStorage.
      // We only save their names for this demo.
      fileNames: formData.files.map((file) => file.name),
    };

    localStorage.setItem(
      "ovahglo_web_project",
      JSON.stringify(project)
    );

    navigate("/web-development/submitted");
  };

  if (!currentPackage) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

        <div className="text-center max-w-lg">

          <div className="text-6xl mb-6">
            ⚠️
          </div>

          <h1 className="text-3xl font-extrabold">
            Package Not Found
          </h1>

          <p className="text-gray-400 mt-4">
            Please return to our web development page and select a valid
            package.
          </p>

          <Link
            to="/web-development"
            className="inline-block mt-7 bg-pink-500 hover:bg-pink-600 px-7 py-3 rounded-lg font-bold"
          >
            Back to Web Development
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}

      <header className="border-b border-slate-800 bg-black">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            to="/web-development"
            className="text-2xl font-extrabold"
          >
            Ovahglo
            <span className="text-pink-500">.</span>
          </Link>

          <Link
            to="/web-development"
            className="text-sm text-gray-400 hover:text-white"
          >
            ← Back to Web Development
          </Link>

        </div>

      </header>


      {/* MAIN */}

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* PAGE TITLE */}

        <div className="mb-10">

          <span className="text-pink-500 text-sm font-bold uppercase tracking-wider">
            Start Your Project
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold mt-2">
            Let's Build Your Website
          </h1>

          <p className="text-gray-400 mt-3 max-w-2xl">
            Tell us about your business and what you need. We'll use this
            information to understand your project and prepare your quotation.
          </p>

        </div>


        {/* PROGRESS */}

        <div className="mb-10">

          <div className="flex items-center justify-between max-w-3xl mx-auto">

            {[
              ["1", "Business"],
              ["2", "Requirements"],
              ["3", "Files"],
              ["4", "Review"],
            ].map(([number, title]) => (

              <React.Fragment key={number}>

                <div className="flex flex-col items-center">

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= Number(number)
                        ? "bg-pink-500 text-white"
                        : "bg-slate-800 text-gray-500"
                    }`}
                  >
                    {step > Number(number) ? "✓" : number}
                  </div>

                  <span
                    className={`text-xs mt-2 ${
                      step >= Number(number)
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {title}
                  </span>

                </div>

                {number !== "4" && (
                  <div
                    className={`h-1 flex-1 mx-3 rounded ${
                      step > Number(number)
                        ? "bg-pink-500"
                        : "bg-slate-800"
                    }`}
                  />
                )}

              </React.Fragment>

            ))}

          </div>

        </div>


        <div className="grid lg:grid-cols-3 gap-8">

          {/* FORM */}

          <div className="lg:col-span-2">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">


              {/* STEP 1 */}

              {step === 1 && (

                <div>

                  <h2 className="text-2xl font-extrabold">
                    Tell Us About Your Business
                  </h2>

                  <p className="text-gray-400 mt-2 mb-8">
                    Let's start with some basic information.
                  </p>

                  <div className="grid md:grid-cols-2 gap-5">

                    <Input
                      label="Business Name"
                      required
                      value={formData.businessName}
                      onChange={(value) =>
                        updateField("businessName", value)
                      }
                      error={errors.businessName}
                      placeholder="e.g. Ovahglo Ltd"
                    />

                    <Input
                      label="Contact Person"
                      required
                      value={formData.contactPerson}
                      onChange={(value) =>
                        updateField("contactPerson", value)
                      }
                      error={errors.contactPerson}
                      placeholder="Your full name"
                    />

                    <Input
                      label="Email Address"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(value) =>
                        updateField("email", value)
                      }
                      error={errors.email}
                      placeholder="you@example.com"
                    />

                    <Input
                      label="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(value) =>
                        updateField("phone", value)
                      }
                      error={errors.phone}
                      placeholder="+260..."
                    />

                    <Input
                      label="Business Location"
                      value={formData.location}
                      onChange={(value) =>
                        updateField("location", value)
                      }
                      placeholder="e.g. Lusaka, Zambia"
                    />

                    <Select
                      label="Industry"
                      required
                      value={formData.industry}
                      onChange={(value) =>
                        updateField("industry", value)
                      }
                      error={errors.industry}
                      options={[
                        "Retail",
                        "Restaurant",
                        "Hospital",
                        "School",
                        "Real Estate",
                        "Construction",
                        "Finance",
                        "Technology",
                        "Beauty & Fashion",
                        "Professional Services",
                        "Other",
                      ]}
                    />

                  </div>

                </div>

              )}


              {/* STEP 2 */}

              {step === 2 && (

                <div>

                  <h2 className="text-2xl font-extrabold">
                    Tell Us What You Need
                  </h2>

                  <p className="text-gray-400 mt-2 mb-8">
                    Help us understand the website you want us to build.
                  </p>

                  <Select
                    label="Website Type"
                    required
                    value={formData.websiteType}
                    onChange={(value) =>
                      updateField("websiteType", value)
                    }
                    error={errors.websiteType}
                    options={[
                      "Business Website",
                      "E-Commerce Website",
                      "Portfolio Website",
                      "School Website",
                      "Restaurant Website",
                      "Corporate Website",
                      "Blog",
                      "Web Application",
                      "Other",
                    ]}
                  />

                  <div className="mt-7">

                    <label className="block font-semibold mb-3">
                      Pages Required
                      <span className="text-pink-500 ml-1">*</span>
                    </label>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">

                      {[
                        "Home",
                        "About Us",
                        "Services",
                        "Products",
                        "Shop",
                        "Contact",
                        "Gallery",
                        "Blog",
                        "FAQ",
                        "Testimonials",
                        "Team",
                        "Other",
                      ].map((page) => (

                        <button
                          type="button"
                          key={page}
                          onClick={() => togglePage(page)}
                          className={`text-left px-4 py-3 rounded-lg border transition ${
                            formData.pages.includes(page)
                              ? "border-pink-500 bg-pink-500/10 text-pink-400"
                              : "border-slate-700 bg-slate-800 text-gray-300 hover:border-pink-500"
                          }`}
                        >
                          <span className="mr-2">
                            {formData.pages.includes(page) ? "✓" : "+"}
                          </span>

                          {page}
                        </button>

                      ))}

                    </div>

                    {errors.pages && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.pages}
                      </p>
                    )}

                  </div>


                  <div className="grid md:grid-cols-2 gap-5 mt-8">

                    <Select
                      label="Do You Already Have a Domain?"
                      value={formData.hasDomain}
                      onChange={(value) =>
                        updateField("hasDomain", value)
                      }
                      options={["Yes", "No", "Not Sure"]}
                    />

                    <Select
                      label="Do You Already Have Hosting?"
                      value={formData.hasHosting}
                      onChange={(value) =>
                        updateField("hasHosting", value)
                      }
                      options={["Yes", "No", "Not Sure"]}
                    />

                    <Select
                      label="Do You Need Business Email?"
                      value={formData.businessEmail}
                      onChange={(value) =>
                        updateField("businessEmail", value)
                      }
                      options={["yes", "no"]}
                    />

                    <Select
                      label="Do You Need Online Payments?"
                      value={formData.onlinePayments}
                      onChange={(value) =>
                        updateField("onlinePayments", value)
                      }
                      options={["yes", "no", "not sure"]}
                    />

                    <Select
                      label="WhatsApp Integration?"
                      value={formData.whatsapp}
                      onChange={(value) =>
                        updateField("whatsapp", value)
                      }
                      options={["yes", "no"]}
                    />

                  </div>


                  <div className="mt-7">

                    <TextArea
                      label="Describe What You Want Your Website To Do"
                      required
                      value={formData.websiteDescription}
                      onChange={(value) =>
                        updateField("websiteDescription", value)
                      }
                      error={errors.websiteDescription}
                      placeholder="Tell us about the website you have in mind..."
                    />

                  </div>


                  <div className="mt-5">

                    <Input
                      label="Reference Website"
                      value={formData.referenceWebsite}
                      onChange={(value) =>
                        updateField("referenceWebsite", value)
                      }
                      placeholder="https://example.com"
                    />

                    <p className="text-xs text-gray-500 mt-2">
                      Optional. Send us a website whose design or functionality
                      you like.
                    </p>

                  </div>

                </div>

              )}


              {/* STEP 3 */}

              {step === 3 && (

                <div>

                  <h2 className="text-2xl font-extrabold">
                    Upload Your Materials
                  </h2>

                  <p className="text-gray-400 mt-2 mb-8">
                    If you already have your logo, images or documents,
                    upload them here.
                  </p>


                  <label
                    htmlFor="projectFiles"
                    className="block border-2 border-dashed border-slate-700 hover:border-pink-500 rounded-2xl p-10 text-center cursor-pointer transition"
                  >

                    <div className="text-5xl mb-4">
                      📁
                    </div>

                    <h3 className="font-bold text-lg">
                      Upload Project Files
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      Logo, images, documents, content or reference files
                    </p>

                    <span className="inline-block mt-5 bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-bold">
                      Select Files
                    </span>

                    <input
                      id="projectFiles"
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFiles}
                    />

                  </label>


                  {formData.files.length > 0 && (

                    <div className="mt-7">

                      <h3 className="font-bold mb-4">
                        Selected Files
                      </h3>

                      <div className="space-y-3">

                        {formData.files.map((file, index) => (

                          <div
                            key={`${file.name}-${index}`}
                            className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-center justify-between"
                          >

                            <div className="flex items-center gap-3 min-w-0">

                              <span className="text-xl">
                                📄
                              </span>

                              <div className="min-w-0">

                                <p className="font-semibold truncate">
                                  {file.name}
                                </p>

                                <p className="text-xs text-gray-500">
                                  {(file.size / 1024).toFixed(1)} KB
                                </p>

                              </div>

                            </div>

                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-400 hover:text-red-300 ml-4"
                            >
                              Remove
                            </button>

                          </div>

                        ))}

                      </div>

                    </div>

                  )}


                  <div className="mt-8">

                    <TextArea
                      label="Additional Requirements"
                      value={formData.additionalRequirements}
                      onChange={(value) =>
                        updateField(
                          "additionalRequirements",
                          value
                        )
                      }
                      placeholder="Anything else you want us to know?"
                    />

                  </div>

                </div>

              )}


              {/* STEP 4 */}

              {step === 4 && (

                <div>

                  <h2 className="text-2xl font-extrabold">
                    Review Your Project
                  </h2>

                  <p className="text-gray-400 mt-2 mb-8">
                    Review your information before submitting your project
                    request.
                  </p>


                  <ReviewSection title="Selected Package">

                    <div className="flex justify-between items-center">

                      <div>

                        <p className="font-bold text-lg">
                          {currentPackage.name}
                        </p>

                        <p className="text-gray-500 text-sm">
                          {currentPackage.description}
                        </p>

                      </div>

                      <p className="text-pink-500 font-extrabold text-xl">
                        K{currentPackage.price.toLocaleString()}
                      </p>

                    </div>

                  </ReviewSection>


                  <ReviewSection title="Business Information">

                    <ReviewRow
                      label="Business"
                      value={formData.businessName}
                    />

                    <ReviewRow
                      label="Contact Person"
                      value={formData.contactPerson}
                    />

                    <ReviewRow
                      label="Email"
                      value={formData.email}
                    />

                    <ReviewRow
                      label="Phone"
                      value={formData.phone}
                    />

                    <ReviewRow
                      label="Industry"
                      value={formData.industry}
                    />

                    <ReviewRow
                      label="Location"
                      value={formData.location}
                    />

                  </ReviewSection>


                  <ReviewSection title="Website Requirements">

                    <ReviewRow
                      label="Website Type"
                      value={formData.websiteType}
                    />

                    <ReviewRow
                      label="Pages"
                      value={formData.pages.join(", ")}
                    />

                    <ReviewRow
                      label="Online Payments"
                      value={formData.onlinePayments || "Not specified"}
                    />

                    <ReviewRow
                      label="Business Email"
                      value={formData.businessEmail || "Not specified"}
                    />

                    <ReviewRow
                      label="WhatsApp"
                      value={formData.whatsapp || "Not specified"}
                    />

                  </ReviewSection>


                  <ReviewSection title="Project Description">

                    <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                      {formData.websiteDescription}
                    </p>

                  </ReviewSection>


                  <ReviewSection title="Files">

                    {formData.files.length === 0 ? (

                      <p className="text-gray-500">
                        No files uploaded.
                      </p>

                    ) : (

                      <ul className="space-y-2">

                        {formData.files.map((file) => (
                          <li
                            key={file.name}
                            className="text-gray-300"
                          >
                            📄 {file.name}
                          </li>
                        ))}

                      </ul>

                    )}

                  </ReviewSection>


                  {/* PRICE */}

                  <div className="mt-8 bg-gradient-to-br from-pink-600 to-pink-500 rounded-2xl p-6">

                    <div className="flex justify-between text-sm">
                      <span>Package</span>
                      <span>
                        K{currentPackage.price.toLocaleString()}
                      </span>
                    </div>

                    {additionalCosts > 0 && (

                      <div className="flex justify-between text-sm mt-3">

                        <span>Additional Requirements</span>

                        <span>
                          K{additionalCosts.toLocaleString()}
                        </span>

                      </div>

                    )}

                    <div className="border-t border-white/30 mt-5 pt-5 flex justify-between items-center">

                      <span className="font-bold">
                        Estimated Total
                      </span>

                      <span className="text-3xl font-extrabold">
                        K{estimatedTotal.toLocaleString()}
                      </span>

                    </div>

                    <p className="text-xs text-white/70 mt-4">
                      This is an estimated price. Final pricing will be
                      confirmed after our team reviews your requirements.
                    </p>

                  </div>

                </div>

              )}


              {/* NAVIGATION */}

              <div className="flex justify-between mt-10 pt-7 border-t border-slate-800">

                {step > 1 ? (

                  <button
                    type="button"
                    onClick={previousStep}
                    className="border border-slate-700 hover:border-pink-500 px-6 py-3 rounded-lg font-bold"
                  >
                    ← Back
                  </button>

                ) : (

                  <div />

                )}


                {step < 4 ? (

                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-pink-500 hover:bg-pink-600 px-7 py-3 rounded-lg font-bold"
                  >
                    Continue →
                  </button>

                ) : (

                  <button
                    type="button"
                    onClick={submitProject}
                    className="bg-pink-500 hover:bg-pink-600 px-7 py-3 rounded-lg font-bold"
                  >
                    Submit Project Request
                  </button>

                )}

              </div>

            </div>

          </div>


          {/* SIDEBAR */}

          <aside>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-6">

              <p className="text-xs uppercase text-pink-500 font-bold tracking-wider">
                Selected Package
              </p>

              <h2 className="text-2xl font-extrabold mt-2">
                {currentPackage.name}
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                {currentPackage.description}
              </p>

              <div className="border-t border-slate-800 my-6" />

              <div className="flex justify-between items-center">

                <span className="text-gray-400">
                  Starting Price
                </span>

                <span className="text-2xl font-extrabold text-pink-500">
                  K{currentPackage.price.toLocaleString()}
                </span>

              </div>


              <div className="mt-6 bg-slate-800 rounded-xl p-4">

                <p className="text-sm font-bold">
                  What happens next?
                </p>

                <ul className="mt-4 space-y-3 text-sm text-gray-400">

                  <li>
                    ✓ We receive your project request
                  </li>

                  <li>
                    ✓ Our team reviews your requirements
                  </li>

                  <li>
                    ✓ We contact you to discuss the project
                  </li>

                  <li>
                    ✓ Final quotation is prepared
                  </li>

                  <li>
                    ✓ Development begins after approval
                  </li>

                </ul>

              </div>


              <div className="mt-6 text-center">

                <p className="text-xs text-gray-500">
                  Need help choosing a package?
                </p>

                <a
                  href="tel:+260977219990"
                  className="text-pink-500 font-bold text-sm mt-2 inline-block"
                >
                  Call +260 977 219 990
                </a>

              </div>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
};


/* ==========================================
   INPUT COMPONENT
========================================== */

const Input = ({
  label,
  required,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}) => {

  return (
    <div>

      <label className="block font-semibold mb-2">
        {label}

        {required && (
          <span className="text-pink-500 ml-1">
            *
          </span>
        )}
      </label>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`w-full bg-slate-800 border rounded-lg px-4 py-3 outline-none transition ${
          error
            ? "border-red-500"
            : "border-slate-700 focus:border-pink-500"
        }`}
      />

      {error && (
        <p className="text-red-400 text-xs mt-2">
          {error}
        </p>
      )}

    </div>
  );
};


/* ==========================================
   SELECT COMPONENT
========================================== */

const Select = ({
  label,
  required,
  value,
  onChange,
  error,
  options,
}) => {

  return (
    <div>

      <label className="block font-semibold mb-2">

        {label}

        {required && (
          <span className="text-pink-500 ml-1">
            *
          </span>
        )}

      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`w-full bg-slate-800 border rounded-lg px-4 py-3 outline-none ${
          error
            ? "border-red-500"
            : "border-slate-700 focus:border-pink-500"
        }`}
      >

        <option value="">
          Select an option
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}

      </select>

      {error && (
        <p className="text-red-400 text-xs mt-2">
          {error}
        </p>
      )}

    </div>
  );
};


/* ==========================================
   TEXTAREA
========================================== */

const TextArea = ({
  label,
  required,
  value,
  onChange,
  error,
  placeholder,
}) => {

  return (
    <div>

      <label className="block font-semibold mb-2">

        {label}

        {required && (
          <span className="text-pink-500 ml-1">
            *
          </span>
        )}

      </label>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={6}
        className={`w-full bg-slate-800 border rounded-lg px-4 py-3 outline-none resize-none ${
          error
            ? "border-red-500"
            : "border-slate-700 focus:border-pink-500"
        }`}
      />

      {error && (
        <p className="text-red-400 text-xs mt-2">
          {error}
        </p>
      )}

    </div>
  );
};


/* ==========================================
   REVIEW SECTION
========================================== */

const ReviewSection = ({ title, children }) => {

  return (
    <div className="bg-slate-800 rounded-xl p-5 mb-5">

      <h3 className="font-bold text-lg mb-4">
        {title}
      </h3>

      {children}

    </div>
  );
};


/* ==========================================
   REVIEW ROW
========================================== */

const ReviewRow = ({ label, value }) => {

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-slate-700 last:border-0">

      <span className="text-gray-500 text-sm">
        {label}
      </span>

      <span className="text-gray-200 text-sm sm:text-right">
        {value || "Not provided"}
      </span>

    </div>
  );
};


export default WebDevelopmentOrder;