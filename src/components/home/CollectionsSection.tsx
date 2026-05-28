import Image from "next/image";
import Link from "next/link";

export default function CollectionsSection() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto pt-12 md:pt-16 pb-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
        <div className="space-y-3">
          <h2 className="font-sans text-[clamp(2rem,3.5vw+1rem,3rem)] leading-[1.15] text-[#2B2724]">
            Curated Collections
          </h2>
          <p className="text-stone-600 text-xl leading-[1.5]">
            The Essential Elements. Carefully selected, eternally cherished.
          </p>
        </div>
        <Link
          href="/collections"
          className="border-b border-stone-800 pb-1 text-stone-800 hover:text-stone-500 hover:border-stone-500 transition font-medium tracking-wide"
        >
          View All Works
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:min-h-[800px]">
        {/* Left Large Card */}
        <div className="relative rounded-3xl overflow-hidden group shadow-lg min-h-[400px] md:min-h-0">
          <Image
            src="/images/necklace_macrame.png"
            alt="Handmade Necklaces"
            fill
            className="object-cover transition duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="font-sans text-[clamp(1.75rem,2.5vw+0.5rem,2.25rem)] leading-[1.15] mb-2">
              Handmade Necklaces
            </h3>
            <p className="text-[13px] tracking-[0.15em] uppercase text-white/90 font-medium">
              The Artisanal Line
            </p>
          </div>
        </div>

        {/* Right Column Stacked */}
        <div className="flex flex-col gap-6">
          <div className="relative rounded-3xl overflow-hidden flex-1 group shadow-lg min-h-[300px] md:min-h-0">
            <Image
              src="/images/bracelets_stack.png"
              alt="Amur Jin Bracelets"
              fill
              className="object-cover transition duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="font-sans text-[clamp(1.75rem,2.5vw+0.5rem,2.25rem)] leading-[1.15] mb-2">
                Amur Jin Bracelets
              </h3>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden flex-1 group shadow-lg min-h-[300px] md:min-h-0">
            <Image
              src="/images/ring_jewelry.png"
              alt="Unique Rings"
              fill
              className="object-cover transition duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="font-sans text-[clamp(1.75rem,2.5vw+0.5rem,2.25rem)] leading-[1.15] mb-2">
                Unique Rings
              </h3>
              <p className="text-[13px] tracking-[0.15em] uppercase text-white/90 font-medium">
                Exclusive Set
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
