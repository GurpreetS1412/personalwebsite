import Link from "next/link";
import { getAbout } from "../../lib/notion";

export default async function AboutPage() {
  const items = await getAbout();
  const services = items.filter((item) => item.section === "Services");
  const experience = items.filter((item) => item.section === "Experience");
  const journal = items.filter((item) => item.section === "Journal");

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black p-6 md:px-12 lg:px-24 font-sans">
      <nav className="flex justify-between items-center py-8 mb-12">
        <div className="text-sm font-medium tracking-tight">GURPREET SINGH</div>
        <div className="flex gap-8 text-sm">
          <Link href="/" className="text-zinc-500 hover:text-black transition-colors">Work</Link>
          <Link href="/about" className="text-black font-medium">About</Link>
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
              I&apos;m Gurpreet Singh, a visual & interactive designer. Currently exploring the intersection of AI and human-centric design.
            </h1>
          </div>
        </section>

        {/* Services and Experience Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Services</h2>
            <div className="space-y-6">
              {services.map((item) => (
                <div key={item.id}>
                  <h4 className="text-sm font-semibold mb-2">{item.title}</h4>
                  {item.subtitle && <p className="text-sm text-zinc-500">{item.subtitle}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Experience</h2>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.id}>
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-xs text-zinc-400">
                    {[item.subtitle, item.period].filter(Boolean).join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Connect</h2>
            <div className="space-y-3 text-sm text-zinc-600">
              <a href="mailto:gurpreet.work.singh@gmail.com" className="block hover:text-black">Email</a>
              <a href="https://www.linkedin.com/in/gurpreet-singh-65284b348/" target="_blank" rel="noopener noreferrer" className="block hover:text-black">LinkedIn</a>
              <a href="https://x.com/alex_gs2222" target="_blank" rel="noopener noreferrer" className="block hover:text-black">X</a>
              <span className="block">Discord: alex_gs0</span>
              <a href="https://github.com/gurpreets1412" target="_blank" rel="noopener noreferrer" className="block hover:text-black">GitHub</a>
            </div>
          </div>
        </div>

        {/* Journal section - fed from Notion */}
        <section className="pt-24 border-t border-zinc-200">
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-12">Journal & Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {journal.map((item) => {
              const body = (
                <>
                  <div className="aspect-video bg-zinc-100 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-zinc-200 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
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
