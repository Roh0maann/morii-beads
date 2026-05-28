import Image from "next/image";

export default function StorySection() {
  return (
    <section className="bg-white pb-12 md:pb-16 pt-0">
      <div className="px-4 md:px-8 max-w-7xl mx-auto space-y-16 md:space-y-20">

        {/* Top Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Large Headline */}
          <div>
            <h2 className="font-sans text-4xl md:text-5xl leading-[1.2] tracking-tight text-[#2B2724] font-medium md:whitespace-nowrap">
              Focusing on heritage, <span className="text-stone-400 font-normal">we</span> <br className="hidden md:block" />
              <span className="text-stone-400 font-normal">preserve artisan crafts</span>
            </h2>
          </div>
          {/* Right Paragraph */}
          <div className="md:pl-8">
            <p className="text-stone-500 text-[14px] md:text-[15px] leading-[1.7] max-w-md font-light">
              We ensure that every bead we carve meets strict quality checks. Sustainable solutions for an environmentally friendly and timeless future, preserving the soul of Balinese craftsmanship.
            </p>
          </div>
        </div>

        {/* Bottom Circles (Core Materials) */}
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory md:overflow-visible pb-8 md:pb-0 justify-start md:justify-between items-center gap-4 md:gap-4 px-4 md:px-0 -mx-4 md:mx-0">

          <div className="w-28 h-28 md:w-48 md:h-48 rounded-full bg-white shadow-xl shadow-stone-200/50 border border-stone-100 flex items-center justify-center shrink-0 snap-center hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
            <span className="font-sans font-bold text-[11px] md:text-[13px] tracking-[0.2em] text-[#2B2724] uppercase text-center leading-tight">18K<br />Gold</span>
          </div>

          <div className="w-28 h-28 md:w-48 md:h-48 rounded-full bg-[#F7F7F6] hover:bg-[#EBE9E4] flex items-center justify-center shrink-0 snap-center transition-colors duration-500 cursor-pointer">
            <span className="font-sans font-bold text-[11px] md:text-[13px] tracking-[0.2em] text-[#2B2724] uppercase text-center leading-tight">925<br />Silver</span>
          </div>

          <div className="w-28 h-28 md:w-48 md:h-48 rounded-full bg-[#F7F7F6] hover:bg-[#EBE9E4] flex items-center justify-center shrink-0 snap-center transition-colors duration-500 cursor-pointer">
            <span className="font-sans font-bold text-[11px] md:text-[13px] tracking-[0.2em] text-[#2B2724] uppercase text-center leading-tight">Volcanic<br />Stone</span>
          </div>

          <div className="w-28 h-28 md:w-48 md:h-48 rounded-full bg-[#F7F7F6] hover:bg-[#EBE9E4] flex items-center justify-center shrink-0 snap-center transition-colors duration-500 cursor-pointer">
            <span className="font-sans font-bold text-[11px] md:text-[13px] tracking-[0.2em] text-[#2B2724] uppercase text-center leading-tight">Sea<br />Shell</span>
          </div>

          <div className="w-28 h-28 md:w-48 md:h-48 rounded-full bg-[#F7F7F6] hover:bg-[#EBE9E4] flex items-center justify-center shrink-0 snap-center transition-colors duration-500 cursor-pointer">
            <span className="font-sans font-bold text-[11px] md:text-[13px] tracking-[0.2em] text-[#2B2724] uppercase text-center leading-tight">Sandal<br />Wood</span>
          </div>

        </div>

      </div>
    </section>
  );
}
