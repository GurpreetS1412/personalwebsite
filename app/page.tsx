import Link from "next/link";
import { getWork } from "../lib/notion";

export default async function HomePage() {
  const work = await getWork();

  return (
    <main className="min-h-screen bg-[#f7f4ec] text-[#111] font-sans flex flex-col">
      {/* Header: name on the left, About on the right */}
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-24 pt-10 pb-16">
        <Link href="/" className="text-sm uppercase tracking-wide">ALEX</Link>
        <Link href="/about" className="text-sm uppercase tracking-wide hover:text-zinc-500 transition-colors">About</Link>
      </nav>

      {/* Intro paragraph about me */}
      <header className="px-6 md:px-12 lg:px-24 pb-32">
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.25] max-w-5xl">
          I&apos;m Alex, a visual &amp; interactive designer currently exploring the intersection of AI and
          human-centric design. Based in India, I spend my time on design work, basketball, and the mountains.
        </p>
      </header>

      {/* Projects: only shows entries that are published in Notion */}
      {work.length > 0 && (
        <section id="work" className="px-6 md:px-12 lg:px-24 pb-32 space-y-32">
          {work.map((item, index) => {
            const mediaFirst = index % 2 === 0;

            const media = item.image ? (
              <div className={`aspect-[4/3] overflow-hidden ${mediaFirst ? "" : "md:order-2"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
            ) : null;

            const text = (
              <div className={`flex flex-col justify-center ${mediaFirst ? "" : "md:order-1"}`}>
                <span className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                  {[item.category, item.year].filter(Boolean).join(" • ")}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-light mb-4">{item.title}</h3>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border-b border-black pb-1 w-fit hover:text-zinc-500 hover:border-zinc-500 transition-colors"
                  >
                    View Project ↗
                  </a>
                )}
              </div>
            );

            return (
              <div
                key={item.id}
                className={media ? "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center" : "max-w-xl"}
              >
                {media}
                {text}
              </div>
            );
          })}
        </section>
      )}

      {/* Contact: simple, no placeholder text */}
      <footer id="contact" className="mt-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col md:flex-row justify-between gap-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Social</p>
          <div className="flex gap-6 text-sm">
            <a href="https://x.com/alex_gs2222" target="_blank" rel="noopener noreferrer" className="border-b border-black pb-0.5 hover:text-zinc-500 hover:border-zinc-500 transition-colors">X</a>
            <a href="https://github.com/gurpreets1412" target="_blank" rel="noopener noreferrer" className="border-b border-black pb-0.5 hover:text-zinc-500 hover:border-zinc-500 transition-colors">GitHub</a>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Discord</p>
          <p className="text-sm">alex_gs0</p>
        </div>
      </footer>
    </main>
  );
}
