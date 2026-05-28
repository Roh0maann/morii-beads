import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-8 max-w-7xl mx-auto mt-16 mb-24 grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
      <div className="space-y-8 pr-8">
        <div className="w-16 h-16 bg-[#2B2724] rounded-sm flex items-center justify-center">
          <span className="text-[#B59183] font-serif italic text-3xl">M</span>
        </div>
        <h1 className="font-serif text-[clamp(2.25rem,5vw+1rem,4.5rem)] leading-[1.08] text-[#8b654b]">
          The Curated <br /> Keepsake.
        </h1>
        <p className="text-stone-600 text-lg max-w-[55ch] leading-[1.6]">
          Handcrafted in the heart of Bali, our beads are more than ornaments—they
          are vessels of memories and artisanal heritage.
        </p>
        <button className="bg-[#8b654b] text-white px-8 py-4 rounded-sm hover:bg-[#72513c] focus:outline-none focus:ring-2 focus:ring-[#8b654b] focus:ring-offset-2 transition duration-300 font-medium">
          Explore the Gallery
        </button>
      </div>
      <div className="relative">
        <div className="relative h-[650px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/hero_beads.png"
            alt="Making Beads"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="absolute -bottom-10 -left-10 bg-[#D4E8DC] p-8 rounded-2xl max-w-xs shadow-xl backdrop-blur-sm bg-opacity-95 z-10">
          <h3 className="text-[13px] font-bold tracking-widest uppercase mb-3 text-stone-800">
            Origin Story
          </h3>
          <p className="font-serif italic text-stone-800 text-lg leading-[1.6]">
            &ldquo;Inspired by the volcanic terrain of Denpasar and the enigmatic
            spirit of the Island.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
