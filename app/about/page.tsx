import Link from "next/link";
import { getAbout } from "../../lib/notion";

export default async function AboutPage() {
  const items = await getAbout();
  const services = items.filter((item) => item.section === "Services");
  const experience = items.filter((item) => item.section === "Experience");
  const journal = items.filter((item) => item.section === "Journal");

  return (
    <main className="min-h-screen bg-white text-[#111] font-sans">
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-8">
        <Link href="/" className="text-sm font-medium tracking-tight">ALEX</Link>
        <div className="flex gap-6 md:gap-8 text-sm">
          <Link href="/" className="text-zinc-500 hover:text-black transition-colors">Work</Link>
          <Link href="/about" className="text-black font-medium">About</Link>
          <a href="#contact" className="text-zinc-500 hover:text-black transition-colors">Contact</a>
        </div>
      </nav>

      <div className="px-6 md:px-12 lg:px-24 pb-32">
        {/* Asymmetric intro: narrow image column, wide text column */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16 mb-32 items-end">
          <div className="md:col-span-5 relative aspect-[4/5] bg-zinc-100 overflow-hidden">
            {/* Replace with profile photo */}
            <div className="w-full h-full bg-zinc-200" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h1 className="text-3xl md:text-5xl font-medium leading-[1.15] tracking-tight">
              I&apos;m Alex, a visual &amp; interactive designer. Currently exploring the intersection of AI and human-centric design.
            </h1>
          </div>
        </section>

        {/* Services, Experience and Connect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Services</h2>
            <div className="space-y-6">
              {services.map((item) => (
                <div key={item.id}>
                  <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                  {item.subtitle && <p className="text-sm text-zinc-500">{item.subtitle}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Experience</h2>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.id}>
                  <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-xs text-zinc-400">
                    {[item.subtitle, item.period].filter(Boolean).join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="space-y-8">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Connect</h2>
            <div className="space-y-3 text-sm text-zinc-600">
              <a href="https://x.com/alex_gs2222" target="_blank" rel="noopener noreferrer" className="block hover:text-black transition-colors">X</a>
              <span className="block">Discord: alex_gs0</span>
              <a href="https://github.com/gurpreets1412" target="_blank" rel="noopener noreferrer" className="block hover:text-black transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        {/* Journal, fed from Notion */}
        <section className="pt-24 border-t border-zinc-200">
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-16">Journal &amp; Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {journal.map((item) => {
              const body = (
                <>
                  <div className="aspect-video bg-zinc-100 mb-5 overflow-hidden">
                    <div className="w-full h-full bg-zinc-200 group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-zinc-500 transition-colors">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-sm text-zinc-500 leading-relaxed">{item.subtitle}</p>
                  )}
                </>
              );

              return item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {body}
                </a>
              ) : (
                <div key={item.id} className="group">
                  {body}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
