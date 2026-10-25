"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black p-6 md:px-12 lg:px-24 font-sans">
      <nav className="flex justify-between items-center py-8 mb-12">
        <div className="text-sm font-medium tracking-tight">HARCH</div>
        <div className="flex gap-8 text-sm">
          <a href="/" className="text-zinc-500 hover:text-black transition-colors">Work</a>
          <a href="/about" className="text-black font-medium">About</a>
          <a href="#contact" className="text-zinc-500 hover:text-black transition-colors">Contact</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        {/* About Hero - Image and Text side-by-side */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
          <div className="relative aspect-square bg-zinc-200 rounded-sm overflow-hidden">
             <div className="w-full h-full bg-zinc-300" /> {/* Placeholder for Profile Photo */}
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight">
              I'm Harch, a visual & interactive designer. Currently exploring the intersection of AI and human-centric design.
            </h1>
          </div>
        </section>

        {/* Services and Experience Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Services</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold mb-2">Branding</h4>
                <ul className="text-sm text-zinc-500 space-y-1">
                  <li>Logo Design</li>
                  <li>Brand Identity</li>
                  <li>Brand Guidelines</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Digital</h4>
                <ul className="text-sm text-zinc-500 space-y-1">
                  <li>Website Design</li>
                  <li>UI/UX Design</li>
                  <li>Development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Experience</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold">Company Name</h4>
                <p className="text-xs text-zinc-400">Role • 2023-Present</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold">Previous Company</h4>
                <p className="text-xs text-zinc-400">Role • 2021-2023</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Connect</h2>
            <div className="space-y-3 text-sm text-zinc-600">
              <a href="mailto:hello@harch.com" className="block hover:text-black">Email</a>
              <a href="#" className="block hover:text-black">Instagram</a>
              <a href="#" className="block hover:text-black">LinkedIn</a>
              <a href="#" className="block hover:text-black">Twitter</a>
            </div>
          </div>
        </div>

        {/* Blog Section - Integration point for Notion */}
        <section className="pt-24 border-t border-zinc-200">
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-12">Journal & Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map(i => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-zinc-100 mb-4 overflow-hidden">
                   <div className="w-full h-full bg-zinc-200 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-medium mb-2 group-hover:text-blue-600 transition-colors">Blog Post Title {i}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  A short excerpt of the experience or thought shared in this post.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
