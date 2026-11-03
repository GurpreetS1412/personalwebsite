import Link from "next/link";
import { getAbout, getWork } from "../../lib/notion";

export default async function AboutPage() {
  const [items, work] = await Promise.all([getAbout(), getWork()]);
  const experience = items.filter((item) => item.section === "Experience");

  const underline =
    "border-b border-black pb-0.5 hover:text-zinc-500 hover:border-zinc-500 transition-colors";

  return (
    <main className="min-h-screen bg-[#d6e0dc] text-[#111] font-sans flex flex-col">
      {/* Header: name on the left, About on the right */}
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-24 pt-10 pb-16">
        <Link href="/" className="text-sm uppercase tracking-wide">ALEX</Link>
        <Link href="/about" className="text-sm uppercase tracking-wide">About</Link>
      </nav>

      {/* Intro: headline on the left, photo on the right */}
      <section className="px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-32">
        <h1 className="md:col-span-6 md:col-start-2 font-serif text-3xl md:text-5xl font-light leading-[1.2] md:pt-16">
          <span className="mr-3" aria-hidden="true">👋</span>
          I&apos;m Alex, a visual &amp; interactive designer. Currently exploring the intersection of AI and
          human-centric design.
        </h1>
        <div className="md:col-span-4 md:col-start-9 aspect-square overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/about/profile.png" alt="Alex" className="w-full h-full object-cover" />
        </div>
      </section>

      <div className="px-6 md:px-12 lg:px-24 space-y-32 pb-32">
        {/* Projects: only shows entries published in Notion */}
        {work.length > 0 && (
          <section className="md:pl-[8.33%]">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-12">
              <span className="mr-3 text-2xl" aria-hidden="true">✷</span>Projects
            </h2>
            <div className="space-y-8">
              {work.map((item) => (
                <div key={item.id}>
                  <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">
                    {[item.category, item.year].filter(Boolean).join(" • ")}
                  </p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={`font-serif text-2xl ${underline}`}>
                      {item.title}
                    </a>
                  ) : (
                    <p className="font-serif text-2xl">{item.title}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience (from Notion) and Connect */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {experience.length > 0 && (
            <div className="md:col-span-5 md:col-start-2">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-12">
                <span className="mr-3 text-2xl" aria-hidden="true">✷</span>Experience
              </h2>
              <div className="space-y-10">
                {experience.map((item) => (
                  <div key={item.id} className="space-y-2">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className={`text-base ${underline}`}>
                        {item.title}
                      </a>
                    ) : (
                      <p className="text-base">{item.title}</p>
                    )}
                    {item.subtitle && <p className="font-serif italic text-zinc-700">{item.subtitle}</p>}
                    {item.period && <p className="text-xs uppercase tracking-widest text-zinc-600">{item.period}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="md:col-span-4 md:col-start-8">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-12">
              <span className="mr-3 text-2xl" aria-hidden="true">✷</span>Connect
            </h2>
            <div className="space-y-4 text-base">
              <a href="https://x.com/alex_gs2222" target="_blank" rel="noopener noreferrer" className={`block w-fit ${underline}`}>X</a>
              <a href="https://github.com/gurpreets1412" target="_blank" rel="noopener noreferrer" className={`block w-fit ${underline}`}>GitHub</a>
              <p>Discord: alex_gs0</p>
            </div>
          </div>
        </section>

        {/* Memories: 2023 mountain trip */}
        <section className="md:pl-[8.33%]">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-12">
            <span className="mr-3 text-2xl" aria-hidden="true">✷</span>Memories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <figure className="relative aspect-[9/16] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about/mountain-1.jpg" alt="Snow-covered mountain path in the clouds" className="w-full h-full object-cover" />
              <figcaption className="absolute top-0 left-0 right-0 p-5 bg-gradient-to-b from-black/60 to-transparent text-white">
                <p className="text-lg font-medium">Somewhere up in the mountains</p>
                <p className="text-xs uppercase tracking-widest text-white/80 mt-1">2023</p>
              </figcaption>
            </figure>
            <figure className="relative aspect-[9/16] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about/mountain-2.jpg" alt="Glacial lake with snow-covered peaks" className="w-full h-full object-cover" />
            </figure>
          </div>
          <p className="mt-6 text-sm text-zinc-700">A trip to the mountains in 2023.</p>
        </section>

        {/* Hobby */}
        <section className="md:pl-[8.33%]">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-12">
            <span className="mr-3 text-2xl" aria-hidden="true">✷</span>Hobby
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="w-full max-w-[220px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about/basketball.jpg" alt="Basketball hoop against the sky" className="w-full h-auto" />
            </div>
            <div>
              <p className="font-serif text-2xl mb-3">Basketball</p>
              <p className="text-zinc-700 max-w-sm leading-relaxed">Basketball is my favourite hobby.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer: contact and social */}
      <footer id="contact" className="mt-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col md:flex-row gap-10 md:gap-24">
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-600 mb-4">Discord</p>
          <p className="text-base">alex_gs0</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-600 mb-4">Social</p>
          <div className="flex gap-4 text-base">
            <a href="https://x.com/alex_gs2222" target="_blank" rel="noopener noreferrer" className={underline}>X</a>
            <span aria-hidden="true">—</span>
            <a href="https://github.com/gurpreets1412" target="_blank" rel="noopener noreferrer" className={underline}>GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
