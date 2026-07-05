import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CheckCircle,
  ClipboardCheck,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  Users,
  Workflow,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/enterprise")({
  component: EnterprisePage,
});

/* ── Types ── */
interface FormData {
  companyName: string;
  industry: string;
  companySize: string;
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  automationGoal: string;
  currentTools: string;
  painPoints: string;
  desiredOutcome: string;
  timeline: string;
  budget: string;
  additionalDetails: string;
}

const initialFormData: FormData = {
  companyName: "",
  industry: "",
  companySize: "",
  name: "",
  email: "",
  phone: "",
  jobTitle: "",
  automationGoal: "",
  currentTools: "",
  painPoints: "",
  desiredOutcome: "",
  timeline: "",
  budget: "",
  additionalDetails: "",
};

/* ── Steps ── */
const steps = [
  { label: "Company", icon: Building2 },
  { label: "Contact", icon: Users },
  { label: "Workflow", icon: Workflow },
  { label: "Review", icon: ClipboardCheck },
];

/* ── Company Info Step ── */
function CompanyInfo({ data, onChange, onNext }: {
  data: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
}) {
  const isValid = data.companyName.trim() && data.industry.trim() && data.companySize.trim();

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Company Name *</label>
        <input
          type="text"
          value={data.companyName}
          onChange={(e) => onChange("companyName", e.target.value)}
          placeholder="Acme Corp"
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Industry *</label>
        <select
          value={data.industry}
          onChange={(e) => onChange("industry", e.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all appearance-none"
        >
          <option value="" disabled>Select your industry</option>
          <option value="technology">Technology / SaaS</option>
          <option value="healthcare">Healthcare</option>
          <option value="finance">Finance / Banking</option>
          <option value="ecommerce">E-Commerce / Retail</option>
          <option value="education">Education</option>
          <option value="marketing">Marketing / Advertising</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="realestate">Real Estate</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Company Size *</label>
        <select
          value={data.companySize}
          onChange={(e) => onChange("companySize", e.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all appearance-none"
        >
          <option value="" disabled>Select company size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-1000">201-1,000 employees</option>
          <option value="1000+">1,000+ employees</option>
        </select>
      </div>
      <div className="pt-2">
        <button
          onClick={onNext}
          disabled={!isValid}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:from-violet-500 hover:to-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Next Step
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ── Contact Info Step ── */
function ContactInfo({ data, onChange, onNext, onBack }: {
  data: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const isValid = data.name.trim() && data.email.trim() && data.email.includes("@");

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name *</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
          placeholder="Jane Smith"
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address *</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="jane@acme.com"
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone Number</label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder="+1 (555) 123-4567"
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Job Title</label>
        <input
          type="text"
          value={data.jobTitle}
          onChange={(e) => onChange("jobTitle", e.target.value)}
          placeholder="VP of Operations"
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all"
        />
      </div>
      <div className="flex gap-3 pt-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-6 py-2.5 text-sm font-semibold text-gray-300 hover:bg-gray-800/60 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:from-violet-500 hover:to-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Next Step
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ── Workflow Details Step ── */
function WorkflowDetails({ data, onChange, onNext, onBack }: {
  data: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const isValid = data.automationGoal.trim().length > 10;

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Automation Goal *</label>
        <textarea
          value={data.automationGoal}
          onChange={(e) => onChange("automationGoal", e.target.value)}
          placeholder="Describe what you want to automate in detail. For example: We need an AI system that monitors our support tickets, auto-generates responses for common issues, and escalates complex ones to our senior team."
          rows={3}
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all resize-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Current Tools & Systems</label>
        <textarea
          value={data.currentTools}
          onChange={(e) => onChange("currentTools", e.target.value)}
          placeholder="What tools, platforms, or APIs are you currently using that the agent should integrate with? (e.g., Salesforce, Slack, Gmail, Notion)"
          rows={2}
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all resize-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Pain Points</label>
        <textarea
          value={data.painPoints}
          onChange={(e) => onChange("painPoints", e.target.value)}
          placeholder="What are the biggest challenges you're trying to solve with automation? What's not working with your current process?"
          rows={2}
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all resize-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Desired Outcome</label>
        <textarea
          value={data.desiredOutcome}
          onChange={(e) => onChange("desiredOutcome", e.target.value)}
          placeholder="What does success look like? How will this automation impact your business?"
          rows={2}
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all resize-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Timeline</label>
          <select
            value={data.timeline}
            onChange={(e) => onChange("timeline", e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all appearance-none"
          >
            <option value="" disabled>Select timeline</option>
            <option value="asap">ASAP (within 1-2 weeks)</option>
            <option value="1month">Within a month</option>
            <option value="1-3months">1-3 months</option>
            <option value="3+months">3+ months</option>
            <option value="exploring">Just exploring</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Budget Range</label>
          <select
            value={data.budget}
            onChange={(e) => onChange("budget", e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all appearance-none"
          >
            <option value="" disabled>Select budget</option>
            <option value="<500">&lt; $500</option>
            <option value="500-2000">$500 - $2,000</option>
            <option value="2000-5000">$2,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000+">$10,000+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Additional Details</label>
        <textarea
          value={data.additionalDetails}
          onChange={(e) => onChange("additionalDetails", e.target.value)}
          placeholder="Any other information that might help us understand your needs..."
          rows={2}
          className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-violet-600/50 transition-all resize-none"
        />
      </div>
      <div className="flex gap-3 pt-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-6 py-2.5 text-sm font-semibold text-gray-300 hover:bg-gray-800/60 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:from-violet-500 hover:to-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Review Request
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ── Review & Submit Step ── */
function ReviewSubmit({ data, onBack, onSubmit }: {
  data: FormData;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSubmit();
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 animate-scale-in">
        <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-2xl bg-emerald-600/20 border border-emerald-600/30 mb-4">
          <CheckCircle className="h-8 w-8 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Thank you! Our enterprise team will review your request and reach out within 1-2 business days.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          We'll contact you at <span className="text-violet-400">{data.email}</span>
        </p>
      </div>
    );
  }

  const sections = [
    {
      title: "Company Information",
      items: [
        { label: "Company Name", value: data.companyName },
        { label: "Industry", value: data.industry },
        { label: "Company Size", value: `${data.companySize} employees` },
      ],
    },
    {
      title: "Contact Information",
      items: [
        { label: "Name", value: data.name },
        { label: "Email", value: data.email },
        { label: "Phone", value: data.phone || "—" },
        { label: "Job Title", value: data.jobTitle || "—" },
      ],
    },
    {
      title: "Workflow Details",
      items: [
        { label: "Automation Goal", value: data.automationGoal },
        { label: "Current Tools", value: data.currentTools || "—" },
        { label: "Pain Points", value: data.painPoints || "—" },
        { label: "Desired Outcome", value: data.desiredOutcome || "—" },
        { label: "Timeline", value: data.timeline },
        { label: "Budget", value: data.budget },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="text-sm font-semibold text-gray-200 mb-3">{section.title}</h4>
          <div className="rounded-lg border border-gray-800 bg-gray-950/50 divide-y divide-gray-800">
            {section.items.map((item) => (
              <div key={item.label} className="flex justify-between px-4 py-2.5">
                <span className="text-sm text-gray-400">{item.label}</span>
                <span className="text-sm text-gray-200 font-medium max-w-[60%] text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex gap-3 pt-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-6 py-2.5 text-sm font-semibold text-gray-300 hover:bg-gray-800/60 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Edit
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:from-violet-500 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-violet-600/20"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Submit Enterprise Request
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ── Main Enterprise Page ── */
function EnterprisePage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));
  const handleSubmit = () => { /* done */ };

  return (
    <div className="min-h-full">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="h-6 w-6 text-violet-400" />
            <h1 className="text-2xl md:text-3xl font-bold text-white">Enterprise Build</h1>
          </div>
          <p className="text-gray-400">
            Need a complex, custom multi-agent automation system? Tell us about your requirements and we'll build it for you.
          </p>
        </div>

        {/* Step indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.label} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all ${
                      i < step
                        ? "bg-violet-600 border-violet-600 text-white"
                        : i === step
                        ? "border-violet-500 text-violet-400 bg-violet-600/10"
                        : "border-gray-700 text-gray-500"
                    }`}
                  >
                    {i < step ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <s.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span
                    className={`text-xs mt-1.5 font-medium ${
                      i <= step ? "text-violet-300" : "text-gray-600"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-3 ${
                      i < step ? "bg-violet-600" : "bg-gray-800"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-6">
            {step === 0 && "Tell us about your company"}
            {step === 1 && "Your contact information"}
            {step === 2 && "Describe your automation needs"}
            {step === 3 && "Review your request"}
          </h2>

          {step === 0 && (
            <CompanyInfo data={formData} onChange={updateField} onNext={handleNext} />
          )}
          {step === 1 && (
            <ContactInfo data={formData} onChange={updateField} onNext={handleNext} onBack={handleBack} />
          )}
          {step === 2 && (
            <WorkflowDetails data={formData} onChange={updateField} onNext={handleNext} onBack={handleBack} />
          )}
          {step === 3 && (
            <ReviewSubmit data={formData} onBack={handleBack} onSubmit={handleSubmit} />
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/30 p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageSquare className="h-4 w-4 text-violet-400" />
            <h3 className="text-sm font-semibold text-gray-200">Prefer to talk directly?</h3>
          </div>
          <p className="text-sm text-gray-400 mb-3">
            Our enterprise team is ready to discuss your needs.
          </p>
          <a
            href="mailto:agentforge-d404ad78@ctomail.io"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800/60 transition-all"
          >
            <Mail className="h-4 w-4" />
            agentforge-d404ad78@ctomail.io
          </a>
        </div>
      </div>
    </div>
  );
}