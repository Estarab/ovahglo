import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CloudUpload,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Upload,
  User,
  X,
  BriefcaseBusiness,
  Palette,
  Printer,
  Shirt,
  Globe,
  Megaphone,
  Code2,
  Save,
  RotateCcw,
} from "lucide-react";

const SERVICES = [
  {
    id: "branding",
    title: "Branding",
    description: "Build a strong and recognizable visual identity.",
    icon: Palette,
  },
  {
    id: "embroidery",
    title: "Embroidery",
    description: "Professional embroidery for uniforms, caps and clothing.",
    icon: Shirt,
  },
  {
    id: "printing",
    title: "Printing",
    description: "Banners, large format printing and promotional materials.",
    icon: Printer,
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, responsive websites and web applications.",
    icon: Globe,
  },
  {
    id: "advertising",
    title: "Advertising",
    description: "Campaigns and promotional materials that get attention.",
    icon: Megaphone,
  },
  {
    id: "software",
    title: "Software Development",
    description: "Custom software built around your business.",
    icon: Code2,
  },
];

const BUDGETS = [
  "Below K5,000",
  "K5,000 – K10,000",
  "K10,000 – K25,000",
  "K25,000 – K50,000",
  "K50,000 – K100,000",
  "Above K100,000",
  "Not sure yet",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1–2 weeks",
  "Within 1 month",
  "1–3 months",
  "Flexible",
];

const PRIORITIES = [
  "Standard",
  "High Priority",
  "Urgent",
];

const initialForm = {
  services: [],
  projectTitle: "",
  projectDescription: "",
  companyName: "",
  industry: "",
  website: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  budget: "",
  timeline: "",
  priority: "Standard",
  communication: "WhatsApp",
  preferredContactTime: "",
  additionalRequirements: "",
  referenceLinks: "",
  files: [],
  agree: false,
};

const steps = [
  {
    id: 1,
    title: "Project",
    description: "Tell us what you need",
  },
  {
    id: 2,
    title: "Details",
    description: "Tell us about your business",
  },
  {
    id: 3,
    title: "Budget",
    description: "Timeline and budget",
  },
  {
    id: 4,
    title: "Contact",
    description: "How can we reach you?",
  },
  {
    id: 5,
    title: "Review",
    description: "Check your request",
  },
];

function StartProject() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showMobileSummary, setShowMobileSummary] = useState(false);

  // Restore saved draft
  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem("ovahglo-project-draft");

      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);

        setForm({
          ...initialForm,
          ...parsed,
          files: [],
        });
      }
    } catch (error) {
      console.error("Unable to restore project draft:", error);
    }
  }, []);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const toggleService = (serviceId) => {
    setForm((prev) => {
      const exists = prev.services.includes(serviceId);

      return {
        ...prev,
        services: exists
          ? prev.services.filter((id) => id !== serviceId)
          : [...prev.services, serviceId],
      };
    });

    setErrors((prev) => ({
      ...prev,
      services: "",
    }));
  };

  const handleFiles = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    setForm((prev) => ({
      ...prev,
      files: [...prev.files, ...selectedFiles],
    }));
  };

  const removeFile = (index) => {
    setForm((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const saveDraft = () => {
    try {
      const draft = {
        ...form,
        files: [],
      };

      localStorage.setItem(
        "ovahglo-project-draft",
        JSON.stringify(draft)
      );

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2500);
    } catch (error) {
      console.error("Unable to save draft:", error);
    }
  };

  const clearDraft = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear this project request?"
    );

    if (!confirmed) return;

    localStorage.removeItem("ovahglo-project-draft");
    setForm(initialForm);
    setCurrentStep(1);
    setErrors({});
  };

  const selectedServiceNames = useMemo(() => {
    return SERVICES.filter((service) =>
      form.services.includes(service.id)
    ).map((service) => service.title);
  }, [form.services]);

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (form.services.length === 0) {
        newErrors.services =
          "Please select at least one service.";
      }

      if (!form.projectTitle.trim()) {
        newErrors.projectTitle =
          "Please give your project a name.";
      }

      if (!form.projectDescription.trim()) {
        newErrors.projectDescription =
          "Please tell us a little about your project.";
      } else if (form.projectDescription.trim().length < 20) {
        newErrors.projectDescription =
          "Please provide a little more detail.";
      }
    }

    if (currentStep === 2) {
      if (!form.companyName.trim()) {
        newErrors.companyName =
          "Please enter your company or business name.";
      }

      if (!form.industry.trim()) {
        newErrors.industry =
          "Please tell us your industry.";
      }
    }

    if (currentStep === 3) {
      if (!form.budget) {
        newErrors.budget = "Please select your estimated budget.";
      }

      if (!form.timeline) {
        newErrors.timeline = "Please select a timeline.";
      }
    }

    if (currentStep === 4) {
      if (!form.firstName.trim()) {
        newErrors.firstName = "First name is required.";
      }

      if (!form.lastName.trim()) {
        newErrors.lastName = "Last name is required.";
      }

      if (!form.email.trim()) {
        newErrors.email = "Email address is required.";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ) {
        newErrors.email = "Enter a valid email address.";
      }

      if (!form.phone.trim()) {
        newErrors.phone = "Phone number is required.";
      }
    }

    if (currentStep === 5) {
      if (!form.agree) {
        newErrors.agree =
          "Please confirm that the information provided is correct.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;

    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateStep()) return;

    setSubmitting(true);

    try {
      /*
       * BACKEND CONNECTION
       *
       * When your Express backend is ready, replace the
       * commented section below with your API endpoint.
       *
       * Example:
       *
       * const response = await fetch("/api/project-inquiries", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify({
       *     ...form,
       *     services: selectedServiceNames,
       *     files: [],
       *   }),
       * });
       *
       * if (!response.ok) {
       *   throw new Error("Failed to submit project request");
       * }
       */

      // Simulate submission for now
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      localStorage.removeItem("ovahglo-project-draft");

      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong while sending your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 px-5 py-20 text-white md:px-10">
        <div className="mx-auto flex min-h-[75vh] max-w-4xl items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl backdrop-blur-xl md:p-16"
          >
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-pink-500/15">
              <CheckCircle2
                size={50}
                className="text-pink-400"
              />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-pink-400">
              Project Request Received
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Let's build something
              <span className="text-pink-500"> great.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              Thank you for sharing your project with us. Our team
              will review your requirements and get back to you with
              the next steps.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialForm);
                  setCurrentStep(1);
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-pink-500 px-7 py-4 font-bold text-white transition hover:bg-pink-600"
              >
                Start Another Project
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => window.history.back()}
                className="rounded-full border border-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/5"
              >
                Back to Website
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-14 pt-20 md:px-10 lg:px-16">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-pink-600/20 blur-[120px]" />

        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-purple-700/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-400">
                <Sparkles size={14} />
                Start a Project
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-7 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
            >
              LET'S BUILD
              <br />
              <span className="text-pink-500">
                SOMETHING GREAT.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-7 max-w-2xl text-base leading-7 text-slate-400 md:text-lg"
            >
              Tell us about your project, your goals and what you
              need. We'll use your information to understand the
              project and prepare the right solution for your
              business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-6">
            <div className="hidden items-center justify-between md:flex">
              {steps.map((step, index) => {
                const completed = currentStep > step.id;
                const active = currentStep === step.id;

                return (
                  <React.Fragment key={step.id}>
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all ${
                          completed
                            ? "bg-pink-500 text-white"
                            : active
                            ? "bg-white text-black"
                            : "bg-white/10 text-slate-500"
                        }`}
                      >
                        {completed ? (
                          <Check size={17} />
                        ) : (
                          step.id
                        )}
                      </div>

                      <div>
                        <p
                          className={`text-sm font-bold ${
                            active || completed
                              ? "text-white"
                              : "text-slate-500"
                          }`}
                        >
                          {step.title}
                        </p>

                        <p className="text-xs text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="mx-4 h-px flex-1 bg-white/10" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* MOBILE PROGRESS */}
            <div className="md:hidden">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-pink-400">
                    Step {currentStep} of {steps.length}
                  </p>

                  <h3 className="mt-1 text-lg font-bold">
                    {steps[currentStep - 1].title}
                  </h3>
                </div>

                <span className="text-sm font-bold text-slate-500">
                  {Math.round(
                    (currentStep / steps.length) * 100
                  )}
                  %
                </span>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{
                    width: `${
                      (currentStep / steps.length) * 100
                    }%`,
                  }}
                  className="h-full rounded-full bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN FORM */}
      <main className="px-5 py-10 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px]">
          <form
            onSubmit={handleSubmit}
            className="min-w-0"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl">
              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 md:p-10"
                  >
                    <StepHeader
                      eyebrow="01 / PROJECT"
                      title="What are we building?"
                      description="Choose the services you need and tell us what you want to achieve."
                    />

                    <div className="mt-10">
                      <label className="mb-4 block text-sm font-bold">
                        What services do you need?
                      </label>

                      {errors.services && (
                        <p className="mb-3 text-sm text-red-400">
                          {errors.services}
                        </p>
                      )}

                      <div className="grid gap-3 sm:grid-cols-2">
                        {SERVICES.map((service) => {
                          const Icon = service.icon;
                          const selected =
                            form.services.includes(service.id);

                          return (
                            <button
                              type="button"
                              key={service.id}
                              onClick={() =>
                                toggleService(service.id)
                              }
                              className={`group rounded-2xl border p-5 text-left transition-all ${
                                selected
                                  ? "border-pink-500 bg-pink-500/10"
                                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div
                                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                                    selected
                                      ? "bg-pink-500 text-white"
                                      : "bg-white/10 text-slate-400"
                                  }`}
                                >
                                  <Icon size={21} />
                                </div>

                                <div
                                  className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                                    selected
                                      ? "border-pink-500 bg-pink-500"
                                      : "border-white/20"
                                  }`}
                                >
                                  {selected && (
                                    <Check size={14} />
                                  )}
                                </div>
                              </div>

                              <h3 className="mt-5 font-bold">
                                {service.title}
                              </h3>

                              <p className="mt-2 text-sm leading-6 text-slate-500">
                                {service.description}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-10 grid gap-6">
                      <Input
                        label="Project Name"
                        placeholder="e.g. New company website"
                        value={form.projectTitle}
                        onChange={(e) =>
                          updateField(
                            "projectTitle",
                            e.target.value
                          )
                        }
                        error={errors.projectTitle}
                      />

                      <Textarea
                        label="Tell us about your project"
                        placeholder="What are you trying to build, print, brand, launch or improve?"
                        value={form.projectDescription}
                        onChange={(e) =>
                          updateField(
                            "projectDescription",
                            e.target.value
                          )
                        }
                        error={errors.projectDescription}
                        rows={7}
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 md:p-10"
                  >
                    <StepHeader
                      eyebrow="02 / BUSINESS"
                      title="Tell us about your business"
                      description="This helps us understand your brand and recommend the right approach."
                    />

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                      <Input
                        label="Company / Business Name"
                        placeholder="Your company name"
                        value={form.companyName}
                        onChange={(e) =>
                          updateField(
                            "companyName",
                            e.target.value
                          )
                        }
                        error={errors.companyName}
                      />

                      <Input
                        label="Industry"
                        placeholder="e.g. Retail, Construction, NGO"
                        value={form.industry}
                        onChange={(e) =>
                          updateField(
                            "industry",
                            e.target.value
                          )
                        }
                        error={errors.industry}
                      />

                      <Input
                        label="Existing Website"
                        placeholder="https://yourbusiness.com"
                        value={form.website}
                        onChange={(e) =>
                          updateField(
                            "website",
                            e.target.value
                          )
                        }
                      />

                      <Input
                        label="Location"
                        placeholder="e.g. Lusaka, Zambia"
                        value={form.location}
                        onChange={(e) =>
                          updateField(
                            "location",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div className="mt-10">
                      <label className="mb-3 block text-sm font-bold">
                        Reference links
                      </label>

                      <Textarea
                        placeholder="Paste links to websites, Instagram pages, designs or examples you like..."
                        value={form.referenceLinks}
                        onChange={(e) =>
                          updateField(
                            "referenceLinks",
                            e.target.value
                          )
                        }
                        rows={5}
                      />
                    </div>

                    {/* FILE UPLOAD */}
                    <div className="mt-10">
                      <label className="mb-3 block text-sm font-bold">
                        Upload project files
                        <span className="ml-2 font-normal text-slate-500">
                          Optional
                        </span>
                      </label>

                      <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-10 text-center transition hover:border-pink-500/50 hover:bg-pink-500/[0.03]">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400 transition group-hover:scale-105">
                          <CloudUpload size={25} />
                        </div>

                        <p className="mt-4 font-bold">
                          Click to upload files
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                          Logos, designs, documents, images,
                          specifications, etc.
                        </p>

                        <p className="mt-2 text-xs text-slate-600">
                          PDF, PNG, JPG, JPEG, DOC, DOCX
                        </p>

                        <input
                          type="file"
                          multiple
                          accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                          className="hidden"
                          onChange={handleFiles}
                        />
                      </label>

                      {form.files.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {form.files.map((file, index) => (
                            <div
                              key={`${file.name}-${index}`}
                              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3"
                            >
                              <div className="flex min-w-0 items-center gap-3">
                                <FileText
                                  size={18}
                                  className="shrink-0 text-pink-400"
                                />

                                <div className="min-w-0">
                                  <p className="truncate text-sm font-medium">
                                    {file.name}
                                  </p>

                                  <p className="text-xs text-slate-600">
                                    {(
                                      file.size /
                                      1024 /
                                      1024
                                    ).toFixed(2)}{" "}
                                    MB
                                  </p>
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() =>
                                  removeFile(index)
                                }
                                className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full hover:bg-white/10"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 md:p-10"
                  >
                    <StepHeader
                      eyebrow="03 / PLANNING"
                      title="Let's talk numbers"
                      description="Your budget helps us recommend a realistic solution."
                    />

                    <div className="mt-10">
                      <label className="mb-4 block text-sm font-bold">
                        Estimated project budget
                      </label>

                      {errors.budget && (
                        <p className="mb-3 text-sm text-red-400">
                          {errors.budget}
                        </p>
                      )}

                      <div className="grid gap-3 sm:grid-cols-2">
                        {BUDGETS.map((budget) => (
                          <ChoiceButton
                            key={budget}
                            selected={form.budget === budget}
                            onClick={() =>
                              updateField("budget", budget)
                            }
                            label={budget}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-10">
                      <label className="mb-4 block text-sm font-bold">
                        When would you like this completed?
                      </label>

                      {errors.timeline && (
                        <p className="mb-3 text-sm text-red-400">
                          {errors.timeline}
                        </p>
                      )}

                      <div className="grid gap-3 sm:grid-cols-2">
                        {TIMELINES.map((timeline) => (
                          <ChoiceButton
                            key={timeline}
                            selected={
                              form.timeline === timeline
                            }
                            onClick={() =>
                              updateField(
                                "timeline",
                                timeline
                              )
                            }
                            label={timeline}
                            icon={<Clock3 size={17} />}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-10">
                      <label className="mb-4 block text-sm font-bold">
                        Project priority
                      </label>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {PRIORITIES.map((priority) => (
                          <ChoiceButton
                            key={priority}
                            selected={
                              form.priority === priority
                            }
                            onClick={() =>
                              updateField(
                                "priority",
                                priority
                              )
                            }
                            label={priority}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-10">
                      <Textarea
                        label="Anything else we should know?"
                        placeholder="Special requirements, deadlines, quantities, features, preferred materials, etc."
                        value={form.additionalRequirements}
                        onChange={(e) =>
                          updateField(
                            "additionalRequirements",
                            e.target.value
                          )
                        }
                        rows={6}
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 4 */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 md:p-10"
                  >
                    <StepHeader
                      eyebrow="04 / CONTACT"
                      title="How can we reach you?"
                      description="Give us your contact details so we can discuss the project with you."
                    />

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                      <Input
                        label="First Name"
                        placeholder="John"
                        value={form.firstName}
                        onChange={(e) =>
                          updateField(
                            "firstName",
                            e.target.value
                          )
                        }
                        error={errors.firstName}
                        icon={<User size={17} />}
                      />

                      <Input
                        label="Last Name"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={(e) =>
                          updateField(
                            "lastName",
                            e.target.value
                          )
                        }
                        error={errors.lastName}
                      />

                      <Input
                        label="Email Address"
                        placeholder="you@example.com"
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          updateField(
                            "email",
                            e.target.value
                          )
                        }
                        error={errors.email}
                        icon={<Mail size={17} />}
                      />

                      <Input
                        label="Phone / WhatsApp"
                        placeholder="+260..."
                        value={form.phone}
                        onChange={(e) =>
                          updateField(
                            "phone",
                            e.target.value
                          )
                        }
                        error={errors.phone}
                        icon={<Phone size={17} />}
                      />
                    </div>

                    <div className="mt-10">
                      <label className="mb-4 block text-sm font-bold">
                        Preferred communication method
                      </label>

                      <div className="grid gap-3 sm:grid-cols-3">
                        <ChoiceButton
                          selected={
                            form.communication === "WhatsApp"
                          }
                          onClick={() =>
                            updateField(
                              "communication",
                              "WhatsApp"
                            )
                          }
                          label="WhatsApp"
                          icon={<MessageCircle size={17} />}
                        />

                        <ChoiceButton
                          selected={
                            form.communication === "Phone"
                          }
                          onClick={() =>
                            updateField(
                              "communication",
                              "Phone"
                            )
                          }
                          label="Phone"
                          icon={<Phone size={17} />}
                        />

                        <ChoiceButton
                          selected={
                            form.communication === "Email"
                          }
                          onClick={() =>
                            updateField(
                              "communication",
                              "Email"
                            )
                          }
                          label="Email"
                          icon={<Mail size={17} />}
                        />
                      </div>
                    </div>

                    <div className="mt-10">
                      <Input
                        label="Preferred contact time"
                        placeholder="e.g. Weekdays 09:00–16:00"
                        value={form.preferredContactTime}
                        onChange={(e) =>
                          updateField(
                            "preferredContactTime",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 5 */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 md:p-10"
                  >
                    <StepHeader
                      eyebrow="05 / REVIEW"
                      title="Review your project"
                      description="Make sure everything looks correct before sending your request."
                    />

                    <div className="mt-10 space-y-5">
                      <ReviewSection title="Services">
                        <div className="flex flex-wrap gap-2">
                          {selectedServiceNames.map((service) => (
                            <span
                              key={service}
                              className="rounded-full bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-400"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </ReviewSection>

                      <ReviewSection title="Project">
                        <p className="font-bold">
                          {form.projectTitle}
                        </p>

                        <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-400">
                          {form.projectDescription}
                        </p>
                      </ReviewSection>

                      <ReviewSection title="Business">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <ReviewItem
                            label="Company"
                            value={form.companyName}
                          />

                          <ReviewItem
                            label="Industry"
                            value={form.industry}
                          />

                          <ReviewItem
                            label="Location"
                            value={
                              form.location || "Not provided"
                            }
                          />

                          <ReviewItem
                            label="Website"
                            value={
                              form.website || "Not provided"
                            }
                          />
                        </div>
                      </ReviewSection>

                      <ReviewSection title="Budget & Timeline">
                        <div className="grid gap-4 sm:grid-cols-3">
                          <ReviewItem
                            label="Budget"
                            value={form.budget}
                          />

                          <ReviewItem
                            label="Timeline"
                            value={form.timeline}
                          />

                          <ReviewItem
                            label="Priority"
                            value={form.priority}
                          />
                        </div>
                      </ReviewSection>

                      <ReviewSection title="Contact">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <ReviewItem
                            label="Name"
                            value={`${form.firstName} ${form.lastName}`}
                          />

                          <ReviewItem
                            label="Email"
                            value={form.email}
                          />

                          <ReviewItem
                            label="Phone"
                            value={form.phone}
                          />

                          <ReviewItem
                            label="Preferred Contact"
                            value={form.communication}
                          />
                        </div>
                      </ReviewSection>

                      {form.files.length > 0 && (
                        <ReviewSection title="Attachments">
                          <div className="space-y-2">
                            {form.files.map((file, index) => (
                              <div
                                key={`${file.name}-${index}`}
                                className="flex items-center gap-3 text-sm text-slate-400"
                              >
                                <FileText
                                  size={16}
                                  className="text-pink-400"
                                />
                                {file.name}
                              </div>
                            ))}
                          </div>
                        </ReviewSection>
                      )}
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          checked={form.agree}
                          onChange={(e) =>
                            updateField(
                              "agree",
                              e.target.checked
                            )
                          }
                          className="mt-1 h-4 w-4 accent-pink-500"
                        />

                        <span className="text-sm leading-6 text-slate-400">
                          I confirm that the information provided
                          is accurate and I understand that
                          submitting this request does not
                          automatically constitute a final quotation
                          or project agreement.
                        </span>
                      </label>

                      {errors.agree && (
                        <p className="mt-3 text-sm text-red-400">
                          {errors.agree}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* NAVIGATION */}
              <div className="flex flex-col-reverse gap-3 border-t border-white/10 bg-black/20 p-5 sm:flex-row sm:items-center sm:justify-between md:px-10 md:py-6">
                <div className="flex gap-2">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={previousStep}
                      className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/5 hover:text-white"
                    >
                      <ArrowLeft size={17} />
                      Back
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={saveDraft}
                    className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-slate-400 transition hover:bg-white/5 hover:text-white"
                  >
                    {saved ? (
                      <>
                        <Check size={16} />
                        Saved
                      </>
                    ) : (
                      <>
                        <Save size={16} />
                        Save Draft
                      </>
                    )}
                  </button>
                </div>

                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="group flex items-center justify-center gap-3 rounded-full bg-pink-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/20"
                  >
                    Continue
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group flex items-center justify-center gap-3 rounded-full bg-pink-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Project Request
                        <Send
                          size={17}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>

          {/* DESKTOP SUMMARY */}
          <aside className="hidden lg:block">
            <ProjectSummary
              form={form}
              selectedServiceNames={selectedServiceNames}
              clearDraft={clearDraft}
            />
          </aside>
        </div>
      </main>

      {/* MOBILE SUMMARY */}
      <div className="sticky bottom-0 z-30 border-t border-white/10 bg-[#050505]/95 p-3 backdrop-blur-xl lg:hidden">
        <button
          type="button"
          onClick={() =>
            setShowMobileSummary((prev) => !prev)
          }
          className="flex w-full items-center justify-between rounded-xl bg-white/[0.05] px-5 py-4"
        >
          <span className="font-bold">
            Project Summary
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform ${
              showMobileSummary ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {showMobileSummary && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-3">
                <ProjectSummary
                  form={form}
                  selectedServiceNames={
                    selectedServiceNames
                  }
                  clearDraft={clearDraft}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   COMPONENTS
------------------------------------------------------- */

function StepHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
        {description}
      </p>
    </div>
  );
}

function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 ${
          error
            ? "border-red-500/60"
            : "border-white/10 focus:border-pink-500/60"
        }`}
      />

      {error && (
        <p className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

function Textarea({
  label,
  placeholder,
  value,
  onChange,
  error,
  rows = 5,
}) {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-bold text-white">
          {label}
        </label>
      )}

      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full resize-none rounded-xl border bg-white/[0.03] px-4 py-3.5 text-sm leading-7 text-white outline-none transition placeholder:text-slate-700 ${
          error
            ? "border-red-500/60"
            : "border-white/10 focus:border-pink-500/60"
        }`}
      />

      {error && (
        <p className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

function ChoiceButton({
  selected,
  onClick,
  label,
  icon,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl border px-4 py-4 text-left text-sm font-semibold transition ${
        selected
          ? "border-pink-500 bg-pink-500/10 text-white"
          : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
      }`}
    >
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
          selected
            ? "bg-pink-500 text-white"
            : "bg-white/10"
        }`}
      >
        {selected ? <Check size={15} /> : icon}
      </div>

      {label}
    </button>
  );
}

function ReviewSection({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
        {title}
      </p>

      {children}
    </div>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div>
      <p className="text-xs text-slate-600">
        {label}
      </p>

      <p className="mt-1 break-words text-sm font-semibold text-slate-300">
        {value}
      </p>
    </div>
  );
}

function ProjectSummary({
  form,
  selectedServiceNames,
  clearDraft,
}) {
  return (
    <div className="sticky top-6 space-y-4">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
        <div className="border-b border-white/10 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
              <BriefcaseBusiness size={20} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
                Your Project
              </p>

              <h3 className="font-bold">
                Live Summary
              </h3>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6">
          <SummaryItem
            label="Services"
            value={
              selectedServiceNames.length
                ? selectedServiceNames.join(", ")
                : "Not selected"
            }
          />

          <SummaryItem
            label="Project"
            value={
              form.projectTitle || "Project name not added"
            }
          />

          <SummaryItem
            label="Business"
            value={
              form.companyName || "Business name not added"
            }
          />

          <SummaryItem
            label="Budget"
            value={form.budget || "Not selected"}
          />

          <SummaryItem
            label="Timeline"
            value={form.timeline || "Not selected"}
          />

          <SummaryItem
            label="Priority"
            value={form.priority}
          />

          <div className="border-t border-white/10 pt-5">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-500/10 text-pink-400">
                <Sparkles size={15} />
              </div>

              <p className="text-xs leading-6 text-slate-500">
                Don't worry if you don't know everything yet.
                Give us as much information as possible and we
                can help shape the project with you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={clearDraft}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-xs font-bold text-slate-500 transition hover:border-red-500/30 hover:text-red-400"
      >
        <RotateCcw size={14} />
        Clear Project Form
      </button>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-slate-600">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold leading-6 text-slate-300">
        {value}
      </p>
    </div>
  );
}

export default StartProject;