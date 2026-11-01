import Link from "next/link";
import { getWork } from "../lib/notion";

export const revalidate = 3600;

export default async function HomePage() {
  const work = await getWork();

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

      {/* Hero Section */}
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

      {/* Work Section - side-by-side rows, alternating sides */}
      <section id="work" className="mb-32">
        <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-12">
          Selected Work
        </h2>
        <div className="space-y-32">
          {work.map((item, index) => {
            const mediaFirst = index % 2 === 0;

            const media = (
              <div className={`aspect-[4/3] bg-zinc-100 rounded-sm overflow-hidden group ${mediaFirst ? "" : "order-1 md:order-2"}`}>
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-200 group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                )}
              </div>
            );

            const text = (
              <div className={`flex flex-col justify-center pt-4 ${mediaFirst ? "" : "order-2 md:order-1"}`}>
                <span className="text-xs text-zinc-400 uppercase tracking-wider mb-2">
                  {[item.category, item.year].filter(Boolean).join(" • ")}
                </span>
                <h3 className="text-2xl font-medium mb-4 text-black">{item.title}</h3>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium border-b border-black pb-1 w-fit hover:text-zinc-500 hover:border-zinc-500 transition-all"
                  >
                    View Project →
                  </a>
                )}
              </div>
            );

            return (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {media}
                {text}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="text-2xl font-medium mb-4">Let&apos;s connect</h2>
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
