import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Check,
  Cpu,
  Download,
  ExternalLink,
  MessageSquare,
  Rocket,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-800">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-600/30 bg-violet-600/10 px-4 py-1.5 text-sm font-medium text-violet-300">
              <Sparkles className="h-3.5 w-3.5" />
              Zero-Code AI Agent Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center max-w-4xl mx-auto leading-tight">
            Transform your ideas into{" "}
            <span className="text-gradient">intelligent agents</span>
            <br />
            with zero code
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-gray-400 text-center max-w-2xl mx-auto leading-relaxed">
            Clawless AI turns your natural language descriptions into fully-functioning AI agents,
            complete with custom prompts, visual workflows, and one-click deployment.
            No engineering team required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/builder"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white hover:from-violet-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40"
            >
              Start Building Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 hover:bg-gray-800/50 transition-all duration-200"
            >
              See Features
            </a>
          </div>

          {/* Demo visual */}
          <div className="mt-16 relative mx-auto max-w-3xl">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm p-1 shadow-2xl">
              <div className="rounded-xl bg-gray-950 p-4 md:p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <div className="flex h-3 w-3 rounded-full bg-red-500" />
                  <div className="flex h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="flex h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-gray-600">Clawless AI — Agent Builder</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600/20 text-violet-400 flex-shrink-0">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-300 font-medium">Automation Need</p>
                      <div className="mt-1 rounded-lg border border-gray-800 bg-gray-900 px-4 py-2.5 text-sm text-gray-400 italic">
                        "I want a bot that drafts tweets about new tech blog posts and finds trending topics in AI"
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600/20 text-violet-400 animate-node-pulse">
                      <Zap className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Bot, label: "Agent Persona", desc: "TechTrend Scout" },
                      { icon: Workflow, label: "Workflow", desc: "5-step pipeline" },
                      { icon: Cpu, label: "Sandbox", desc: "Test instantly" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-lg border border-gray-800 bg-gray-900/50 p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <item.icon className="h-3.5 w-3.5 text-violet-400" />
                          <span className="text-xs text-gray-500">{item.label}</span>
                        </div>
                        <p className="text-sm text-gray-200 font-medium">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Everything you need to build{" "}
              <span className="text-gradient">AI agents</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
              From idea to deployment in minutes. No coding, no complex infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Zero-Code Workspace",
                desc: "Describe what you need in plain English and watch your agent come to life with intelligent defaults.",
              },
              {
                icon: Sparkles,
                title: "Smart Prompt Engine",
                desc: "Our AI generates optimized system prompts from your description. Tweak them in real-time.",
              },
              {
                icon: Workflow,
                title: "Visual Workflows",
                desc: "See the automation pipeline laid out as an interactive graph. Every step, clearly visualized.",
              },
              {
                icon: Download,
                title: "One-Click Export",
                desc: "Embed your agent anywhere with a generated script tag. Download configs as JSON for backup.",
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className={`rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-violet-600/30 hover:bg-gray-900/80 transition-all duration-300 group animate-slide-up stagger-${i + 1} opacity-0`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/15 text-violet-400 mb-4 group-hover:bg-violet-600/25 transition-colors">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              From idea to agent in{" "}
              <span className="text-gradient">3 simple steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                icon: MessageSquare,
                title: "Describe Your Need",
                desc: "Tell us what you want to automate in natural language. Our AI understands context and intent.",
              },
              {
                step: "02",
                icon: Bot,
                title: "AI Generates Your Agent",
                desc: "We create a complete agent with system prompt, workflow graph, and dynamic input fields — ready in seconds.",
              },
              {
                step: "03",
                icon: Rocket,
                title: "Test, Export, Launch",
                desc: "Try your agent in the live sandbox, embed it on your site, or download the configuration.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 border border-violet-600/30 mb-6">
                  <item.icon className="h-6 w-6 text-violet-400" />
                </div>
                <div className="text-xs font-bold text-violet-400 tracking-widest mb-2">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Simple, transparent{" "}
              <span className="text-gradient">pricing</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Start free. Upgrade when you need more power.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Hobbyist */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 flex flex-col">
              <h3 className="text-lg font-semibold text-white">Hobbyist</h3>
              <p className="text-sm text-gray-400 mt-1">For tinkerers and explorers</p>
              <div className="mt-6 mb-8">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-gray-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  "Full Agent Builder access",
                  "Simulated sandbox testing",
                  "Export & embed tools",
                  "JSON configuration export",
                  "Community support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/builder"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 hover:bg-gray-800/50 transition-all duration-200 w-full"
              >
                Get Started Free
              </Link>
            </div>

            {/* Professional - Featured */}
            <div className="rounded-2xl border border-violet-600/40 bg-gray-900/80 p-8 flex flex-col relative glow-border">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-1 text-xs font-semibold text-white">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">Professional</h3>
              <p className="text-sm text-gray-400 mt-1">For power users &amp; teams</p>
              <div className="mt-6 mb-8">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-gray-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  "Everything in Hobbyist",
                  "Real LLM execution (your API key)",
                  "Custom API integrations",
                  "Multi-agent coordination",
                  "Unlimited agent runs",
                  "Priority support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://buy.stripe.com/9B6bJ1aFR2DF5T51vnfnO03"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white hover:from-violet-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-violet-600/25 w-full"
              >
                Subscribe Now
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 flex flex-col">
              <h3 className="text-lg font-semibold text-white">Enterprise</h3>
              <p className="text-sm text-gray-400 mt-1">For complex automation</p>
              <div className="mt-6 mb-8">
                <span className="text-4xl font-bold text-white">$149</span>
                <span className="text-gray-500 ml-1">one-off</span>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  "Bespoke multi-agent workflows",
                  "Custom integrations & APIs",
                  "Dedicated setup assistance",
                  "Priority onboarding",
                  "Hosted & maintained by us",
                  "Ongoing support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://buy.stripe.com/9B6fZh9BN7XZ81da1TfnO04"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 hover:bg-gray-800/50 transition-all duration-200 w-full"
              >
                Order Build
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build your first{" "}
            <span className="text-gradient">AI agent</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            No credit card required. Start building in seconds.
          </p>
          <Link
            to="/builder"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white hover:from-violet-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-violet-600/25"
          >
            Launch Agent Builder
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600">
              <Flame className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-semibold text-sm text-gray-300">Clawless AI</span>
          </div>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Clawless AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Flame(props: { className?: string }) {
  // Duplicate of lucide's Flame icon - inline to avoid import conflicts
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}