import Image from "next/image";

export default function StorySection() {
  return (
    <section className="bg-[#F3EFEA] py-32 mt-12">
      <div className="px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 md:order-1 h-[700px]">
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/bowls_of_beads.png"
              alt="Bowls of Beads"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#8b654b] rounded-full flex items-center justify-center text-white font-serif italic text-lg shadow-xl ring-8 ring-[#F3EFEA] z-10">
            Since 2024
          </div>
        </div>
        <div className="space-y-8 order-1 md:order-2 pl-4">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
            Our Story
          </h3>
          <h2 className="font-serif text-5xl md:text-6xl text-[#8b654b] leading-[1.15]">
            Every bead holds a story... no such thing as a mistake, only{" "}
            <span className="italic underline decoration-1 underline-offset-[12px]">
              unique creations.
            </span>
          </h2>
          <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
            <p>
              Morii is the realization of a fleeting moment captured in stone. We
              believe that perfection is found in the organic variance of the earth.
            </p>
            <p>
              Each piece is hand-assembled in our Denpasar atelier, using locally
              repurposed offcut stones and traditional Balinese metal smiths and
              weavers. When a bead falls slightly out of alignment, we see a path
              to a new, unexpected beauty.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-6">
            <span className="bg-[#D4E8DC] text-[#3D5A4D] px-5 py-2.5 rounded-full text-sm font-medium tracking-wide">
              Recycled Glass
            </span>
            <span className="bg-[#D4E8DC] text-[#3D5A4D] px-5 py-2.5 rounded-full text-sm font-medium tracking-wide">
              Sandalwood
            </span>
            <span className="bg-[#D4E8DC] text-[#3D5A4D] px-5 py-2.5 rounded-full text-sm font-medium tracking-wide">
              Sea Shell
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
