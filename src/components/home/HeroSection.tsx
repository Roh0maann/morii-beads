import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mt-8 md:mt-12 mb-12 md:mb-16">
      {/* Main Container - The L-Shape Illusion */}
      <div className="relative w-full h-[550px] md:h-[600px] rounded-[2rem] overflow-hidden bg-stone-100">

        {/* Full Background Image */}
        <Image
          src="/images/hero_beads.png"
          alt="Morii Beads Craftsmanship"
          fill
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 1200px"
          priority
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* LEFT SIDE: Typography & Links */}
        <div className="absolute top-16 left-6 md:top-24 md:left-16 max-w-xl z-10">
          <span className="text-white/80 text-[11px] font-bold tracking-[0.15em] uppercase mb-4 block">
            Authentic Balinese Craftsmanship
          </span>
          <h1 className="font-sans text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-tight text-white mb-8">
            The Curated <br /> Keepsake
          </h1>

          <div className="flex items-center gap-8 md:gap-12">
            <a href="#" className="group flex items-center gap-2 text-white text-[13px] font-bold tracking-[0.1em] uppercase border-b border-white/30 pb-2 hover:border-white transition">
              Explore Gallery
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </a>
            <a href="#" className="group flex items-center gap-2 text-white text-[13px] font-bold tracking-[0.1em] uppercase border-b border-white/30 pb-2 hover:border-white transition">
              Our Story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Floating Glass Card (Hidden on very small screens) */}
        <div className="hidden md:flex absolute top-16 right-16 z-20 w-[260px] h-[300px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-4 flex-col justify-between shadow-2xl">
          <div className="relative w-full h-[180px] rounded-[1.5rem] overflow-hidden">
            <Image
              src="/images/bracelets_stack.png"
              alt="Recent Collection"
              fill
              className="object-cover grayscale-[20%]"
            />
          </div>
          <div className="flex items-center justify-between px-2 pb-2">
            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </button>
            <div className="text-right">
              <span className="block text-white text-sm font-medium">Discover Our</span>
              <span className="block text-white/70 text-sm">Latest Collection</span>
            </div>
          </div>
        </div>

        {/* BOTTOM RIGHT: The White Cutout Block (Stats) */}
        <div className="absolute bottom-0 right-0 w-full md:w-[65%] bg-white rounded-t-[2rem] md:rounded-tl-[3rem] md:rounded-tr-none p-6 md:p-8 z-10">
          <div className="grid grid-cols-3 gap-2 md:gap-4 divide-x divide-stone-200">
            <div className="flex flex-col justify-center px-4 md:px-6">
              <span className="font-sans text-3xl md:text-4xl text-[#2B2724] mb-1 tracking-tight">500+</span>
              <span className="text-stone-500 text-[10px] md:text-xs leading-snug">Artisan pieces handcrafted</span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6">
              <span className="font-sans text-3xl md:text-4xl text-[#2B2724] mb-1 tracking-tight">24</span>
              <span className="text-stone-500 text-[10px] md:text-xs leading-snug">Master craftsmen in Bali</span>
            </div>
            <div className="flex flex-col justify-center px-4 md:px-6">
              <span className="font-sans text-3xl md:text-4xl text-[#2B2724] mb-1 tracking-tight">100%</span>
              <span className="text-stone-500 text-[10px] md:text-xs leading-snug">Sourced & created locally</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
