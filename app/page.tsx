"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#111] p-6 md:px-12 lg:px-24 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-8 mb-12">
        <div className="text-sm font-medium tracking-tight">HARCH</div>
        <div className="flex gap-8 text-sm">
          <a href="#work" className="text-zinc-500 hover:text-black transition-colors">Work</a>
          <Link href="/about" className="text-zinc-500 hover:text-black transition-colors">About</Link>
          <a href="#contact" className="text-zinc-500 hover:text-black transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section - Copied Layout from Screenshot */}
      <header className="mb-32 mt-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight mb-8 text-black">
            Creative developer and designer focusing on building digital experiences that blend art and engineering.
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-xl">
            Currently based in [Your Location]. I love exploring the intersection of design,
            technology and human behavior to create intentional products.
          </p>
        </div>
      </header>

      {/* Work Section - Exact Side-by-Side Layout from Screenshot */}
      <section id="work" className="mb-32">
        <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-12">
          Selected Work
        </h2>
        <div className="space-y-32">
          {/* Project Item 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="aspect-[4/3] bg-zinc-100 rounded-sm overflow-hidden group">
              <div className="w-full h-full bg-zinc-200 group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="flex flex-col justify-center pt-4">
              <span className="text-xs text-zinc-400 uppercase tracking-wider mb-2">Website Design</span>
              <h3 className="text-2xl font-medium mb-4 text-black">Project One Title</h3>
              <p className="text-zinc-500 leading-relaxed mb-6 max-w-md">
                A detailed description of the project. Focus on the problem solved and the
                approach taken, exactly like the clean typography in Mindy's site.
              </p>
              <a href="#" className="text-sm font-medium border-b border-black pb-1 w-fit hover:text-zinc-500 hover:border-zinc-500 transition-all">
                View Live Site →
              </a>
            </div>
          </div>

          {/* Project Item 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1 flex flex-col justify-center pt-4">
              <span className="text-xs text-zinc-400 uppercase tracking-wider mb-2">Brand Identity</span>
              <h3 className="text-2xl font-medium mb-4 text-black">Project Two Title</h3>
              <p className="text-zinc-500 leading-relaxed mb-6 max-w-md">
                Another project description that emphasizes the clean, spacious feel
                of the original example.
              </p>
              <a href="#" className="text-sm font-medium border-b border-black pb-1 w-fit hover:text-zinc-500 hover:border-zinc-500 transition-all">
                View Project →
              </a>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] bg-zinc-100 rounded-sm overflow-hidden group">
              <div className="w-full h-full bg-zinc-200 group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="text-2xl font-medium mb-4">Let's connect</h2>
          <p className="text-zinc-500">Available for collaborations.</p>
        </div>
        <div className="flex gap-8 text-sm font-medium text-zinc-500">
          <a href="#" className="hover:text-black transition-colors">Twitter</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-black transition-colors">GitHub</a>
          <a href="#" className="hover:text-black transition-colors">Email</a>
        </div>
      </footer>
    </main>
  );
}
