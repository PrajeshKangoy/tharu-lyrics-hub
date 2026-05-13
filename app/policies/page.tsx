"use client";

import Link from "next/link";

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">

          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-widest text-[#c5a059]">
            Legal {" "}
                <span className="text-[2xl] tracking-[0.3em] tracking-widest font-light leading-tight text-gray-400">
                    Policies
                </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Please read our policies carefully before using
            Tharu Lyrics Hub. By accessing this platform,
            you agree to the terms outlined below.
          </p>

        </div>

        {/* Policy Cards */}
        <div className="space-y-8">

          {/* Privacy Policy */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Privacy Policy
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              We respect your privacy and are committed to protecting
              your personal information. Tharu Lyrics Hub does not sell
              user data to third parties.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Information such as email subscriptions or contact
              messages may be securely stored to improve user
              experience and communication.
            </p>

          </section>

          {/* Copyright */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Copyright & Lyrics
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              All lyrics, artist names, album names, and related media
              belong to their respective owners and copyright holders.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Tharu Lyrics Hub is intended for educational,
              entertainment, and informational purposes only.
            </p>

          </section>

          {/* Terms */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Terms of Use
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              Users agree not to misuse the platform, upload harmful
              content, or attempt unauthorized access to the system.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We reserve the right to modify, remove, or update content
              and policies at any time without prior notice.
            </p>

          </section>

          {/* External Links */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <h2 className="text-2xl font-semibold mb-5 text-white">
              External Links
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Some pages may contain links to external websites,
              streaming platforms, or social media services.
              We are not responsible for the content or policies
              of those external sites.
            </p>

          </section>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">

          <h2 className="text-3xl font-bold mb-6">
            Questions About Our Policies?
          </h2>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#c5a059] text-black font-semibold hover:scale-105 transition-transform"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </main>
  );
}