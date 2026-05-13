"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
{/* 
          <p className="text-[#c5a059] uppercase tracking-[0.4em] text-xs mb-4">
            Contact
          </p> */}

          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-widest text-[#c5a059]">
            Contact Us
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have questions, suggestions, or music recommendations?
            We'd love to hear from you.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

            <h2 className="text-3xl font-semibold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6 text-gray-400">

              <div>
                <p className="text-[#c5a059] mb-2 uppercase tracking-widest text-xs">
                  Email
                </p>

                <p>contact@tharulyricshub.com</p>
              </div>

              <div>
                <p className="text-[#c5a059] mb-2 uppercase tracking-widest text-xs">
                  Location
                </p>

                <p>Nepal</p>
              </div>

              <div>
                <p className="text-[#c5a059] mb-2 uppercase tracking-widest text-xs">
                  Support
                </p>

                <p>Available 24/7 for inquiries and feedback.</p>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

            <h2 className="text-3xl font-semibold mb-8">
              Send Message
            </h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    required
                    placeholder="Write your message..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c5a059] transition-colors resize-none"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-[#c5a059] text-black font-semibold py-4 rounded-xl hover:scale-[1.02] transition-transform"
                >
                  Send Message
                </button>

              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">

                <h3 className="text-3xl text-[#c5a059] font-bold mb-4">
                  Thank You!
                </h3>

                <p className="text-gray-400 max-w-sm">
                  Your message has been successfully submitted.
                  We'll get back to you soon.
                </p>

              </div>
            )}

          </div>

        </div>

      </div>

    </main>
  );
}