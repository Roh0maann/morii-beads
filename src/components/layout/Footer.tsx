import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-8 py-24 border-t border-stone-200">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
          {/* Modern Clean Image Container */}
          <div className="order-2 md:order-1 relative aspect-[4/5] md:aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl bg-stone-100">
            <Image
              src="/images/atelier_editorial.png"
              alt="Atelier Experience"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Minimalist Text Block */}
          <div className="order-1 md:order-2 space-y-16">
            <div className="space-y-6">
              <span className="inline-block bg-[#2B2724] text-white px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase">
                Visit The House
              </span>
              <h2 className="font-sans text-5xl lg:text-6xl text-[#2B2724] leading-[1.05] tracking-tight">
                The Atelier <br />
                <span className="text-stone-400 font-light">Experience</span>
              </h2>
              <p className="text-stone-600 leading-relaxed max-w-md pt-4">
                Step into our sanctuary. Witness the transformation of raw stone into curated keepsakes, guided by the hands of Balinese artisans.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-200">
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-stone-800">
                  Location
                </h4>
                <p className="text-sm text-stone-500 leading-[1.6]">
                  Denpasar, Bali <br />
                  Jl. Raya Seminyak No. 45
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-stone-800">
                  Hours
                </h4>
                <p className="text-sm text-stone-500 leading-[1.6]">
                  Sat - Sun: 10:00 - 18:00 <br />
                  <span className="italic text-stone-400">*Appt. Only on Weekdays</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 border-t border-stone-200">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">
            {/* Left: Newsletter */}
            <div className="w-full max-w-md space-y-8">
              <h3 className="font-sans text-3xl text-[#2B2724]">Join the Atelier</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Subscribe to receive early access to new collections, exclusive releases, and dispatches from our Balinese workshop.
              </p>
              <form className="flex border-b border-stone-300 pb-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent text-sm text-stone-800 placeholder-stone-400 focus:outline-none"
                />
                <button type="submit" className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-800 hover:text-stone-500 transition ml-4">
                  Submit
                </button>
              </form>
            </div>

            {/* Right: Navigation Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">Explore</h4>
                <div className="flex flex-col gap-3 text-sm text-stone-600 font-medium">
                  <Link href="/collections" className="hover:text-stone-900 transition">Collections</Link>
                  <Link href="#" className="hover:text-stone-900 transition">The Atelier</Link>
                  <Link href="#" className="hover:text-stone-900 transition">Our Story</Link>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">Support</h4>
                <div className="flex flex-col gap-3 text-sm text-stone-600 font-medium">
                  <Link href="#" className="hover:text-stone-900 transition">Care Guide</Link>
                  <Link href="#" className="hover:text-stone-900 transition">Shipping & Returns</Link>
                  <Link href="#" className="hover:text-stone-900 transition">Contact Us</Link>
                </div>
              </div>

              <div className="space-y-6 col-span-2 md:col-span-1">
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">Social</h4>
                <div className="flex flex-col gap-3 text-sm text-stone-600 font-medium">
                  <a href="#" className="hover:text-stone-900 transition">Instagram</a>
                  <a href="#" className="hover:text-stone-900 transition">Pinterest</a>
                  <a href="#" className="hover:text-stone-900 transition">Journal</a>
                </div>
              </div>
            </div>
          </div>

          {/* Massive Typography Footer Logo */}
          <div className="flex flex-col items-center border-t border-stone-200 pt-8 mt-12">
            <h1 className="font-sans text-[12vw] leading-none text-[#2B2724] tracking-tighter w-full text-center select-none opacity-90 mb-4">
              MORII BEADS
            </h1>
            <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.1em] text-stone-400">
              <span>© 2024 Morii Beads Studio.</span>
              <span>All Rights Reserved. Denpasar, Bali.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
