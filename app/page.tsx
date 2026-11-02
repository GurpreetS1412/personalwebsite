import Link from "next/link";
import { getWork } from "../lib/notion";

export default async function HomePage() {
  const work = await getWork();

  return (
    <main className="min-h-screen bg-white text-[#111] font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-8">
        <Link href="/" className="text-sm font-medium tracking-tight">ALEX</Link>
        <div className="flex gap-6 md:gap-8 text-sm">
          <a href="#work" className="text-zinc-500 hover:text-black transition-colors">Work</a>
          <Link href="/about" className="text-zinc-500 hover:text-black transition-colors">About</Link>
          <a href="#contact" className="text-zinc-500 hover:text-black transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero: full-viewport, headline anchored to the bottom */}
      <header className="flex flex-col justify-end min-h-[85vh] px-6 md:px-12 lg:px-24 pb-16">
        <h1 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight mb-8 max-w-4xl text-black">
          Creative developer and designer focusing on building digital experiences that blend art and engineering.
        </h1>
        <p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-xl">
          Currently based in India. I love exploring the intersection of design,
          technology and human behavior to create intentional products.
        </p>
      </header>

      {/* Work: alternating image and text rows, generous vertical space */}
      <section id="work" className="px-6 md:px-12 lg:px-24 pt-24 pb-32">
        <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-16">
          Selected Work
        </h2>
        <div className="space-y-32">
          {work.map((item, index) => {
            const mediaFirst = index % 2 === 0;

            const media = (
              <div className={`aspect-[4/3] bg-zinc-100 overflow-hidden group ${mediaFirst ? "" : "md:order-2"}`}>
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
              <div className={`flex flex-col justify-center ${mediaFirst ? "" : "md:order-1"}`}>
                <span className="text-xs text-zinc-400 uppercase tracking-widest mb-3">
                  {[item.category, item.year].filter(Boolean).join(" • ")}
                </span>
                <h3 className="text-2xl md:text-3xl font-medium mb-4 text-black">{item.title}</h3>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium border-b border-black pb-1 w-fit hover:text-zinc-500 hover:border-zinc-500 transition-colors"
                  >
                    View Project ↗
                  </a>
                )}
              </div>
            );

            return (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {media}
                {text}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 md:px-12 lg:px-24 py-24 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="text-2xl font-medium mb-3">Let&apos;s connect</h2>
          <p className="text-zinc-500">Available for collaborations.</p>
        </div>
        <div className="flex gap-8 text-sm font-medium text-zinc-500">
          <a href="https://x.com/alex_gs2222" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">X</a>
          <a href="https://github.com/gurpreets1412" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
