import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="w-full bg-[#FAF9F6]">
        <div className="flex justify-between items-center px-8 py-8 max-w-7xl mx-auto">
          <div className="font-serif text-2xl font-bold tracking-tight text-[#8A634B]">
            Morii Beads
          </div>
          <div className="hidden md:flex space-x-12 text-xs uppercase tracking-[0.15em] text-stone-500 font-semibold">
            <Link href="#" className="hover:text-stone-800 transition">Collections</Link>
            <Link href="#" className="hover:text-stone-800 transition">Our Story</Link>
            <Link href="#" className="hover:text-stone-800 transition">Artisanal Process</Link>
            <Link href="#" className="hover:text-stone-800 transition">Sustainability</Link>
          </div>
          <div className="flex space-x-6 text-stone-600">
            <button aria-label="Search or Bag" className="hover:text-stone-900 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
            <button aria-label="User Profile" className="hover:text-stone-900 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 max-w-7xl mx-auto mt-16 mb-24 grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <div className="space-y-8 pr-8">
          <div className="w-16 h-16 bg-[#2B2724] rounded-sm flex items-center justify-center">
            <span className="text-[#B59183] font-serif italic text-3xl" style={{fontFamily: 'serif'}}>M</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl leading-[1.1] text-[#8b654b]">
            The Curated <br /> Keepsake.
          </h1>
          <p className="text-stone-600 text-lg max-w-md leading-relaxed">
            Handcrafted in the heart of Bali, our beads are more than ornaments—they are vessels of memories and artisanal heritage.
          </p>
          <button className="bg-[#8b654b] text-white px-8 py-4 rounded-sm hover:bg-[#72513c] transition duration-300 font-medium">
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
            <h3 className="text-xs font-bold tracking-widest uppercase mb-3 text-stone-800">Origin Story</h3>
            <p className="font-serif italic text-stone-800 text-lg leading-relaxed">"Inspired by the volcanic terrain of Denpasar and the enigmatic spirit of the Island."</p>
          </div>
        </div>
      </section>

      {/* Second Section: Our Story */}
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
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">Our Story</h3>
            <h2 className="font-serif text-5xl md:text-6xl text-[#8b654b] leading-[1.15]">
              Every bead holds a story... no such thing as a mistake, only <span className="italic underline decoration-1 underline-offset-[12px]">unique creations.</span>
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                Morii is the realization of a fleeting moment captured in stone. We believe that perfection is found in the organic variance of the earth.
              </p>
              <p>
                Each piece is hand-assembled in our Denpasar atelier, using locally repurposed offcut stones and traditional Balinese metal smiths and weavers. When a bead falls slightly out of alignment, we see a path to a new, unexpected beauty.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-6">
              <span className="bg-[#D4E8DC] text-[#3D5A4D] px-5 py-2.5 rounded-full text-sm font-medium tracking-wide">Recycled Glass</span>
              <span className="bg-[#D4E8DC] text-[#3D5A4D] px-5 py-2.5 rounded-full text-sm font-medium tracking-wide">Sandalwood</span>
              <span className="bg-[#D4E8DC] text-[#3D5A4D] px-5 py-2.5 rounded-full text-sm font-medium tracking-wide">Sea Shell</span>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Curated Collections */}
      <section className="px-8 max-w-7xl mx-auto py-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-3">
            <h2 className="font-serif text-5xl text-[#8b654b]">Curated Collections</h2>
            <p className="text-stone-600 text-xl">The Essential Elements. Carefully selected, eternally cherished.</p>
          </div>
          <Link href="#" className="border-b border-stone-800 pb-1 text-stone-800 hover:text-[#8b654b] hover:border-[#8b654b] transition font-medium tracking-wide">
            View All Works
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 h-[800px]">
          {/* Left Large Card */}
          <div className="relative rounded-3xl overflow-hidden group shadow-lg">
            <Image 
              src="/images/necklace_macrame.png" 
              alt="Handmade Necklaces" 
              fill 
              className="object-cover transition duration-1000 group-hover:scale-105" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="font-serif text-4xl mb-2">Handmade Necklaces</h3>
              <p className="text-sm tracking-[0.2em] uppercase opacity-90 font-medium">The Artisanal Line</p>
            </div>
          </div>
          
          {/* Right Column Stacked */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden flex-1 group shadow-lg">
              <Image 
                src="/images/bracelets_stack.png" 
                alt="Amur Jin Bracelets" 
                fill 
                className="object-cover transition duration-1000 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="font-serif text-4xl mb-2">Amur Jin Bracelets</h3>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden flex-1 group shadow-lg">
              <Image 
                src="/images/ring_jewelry.png" 
                alt="Unique Rings" 
                fill 
                className="object-cover transition duration-1000 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="font-serif text-4xl mb-2">Unique Rings</h3>
                <p className="text-sm tracking-[0.2em] uppercase opacity-90 font-medium">Exclusive Set</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Area */}
      <footer className="bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-8 py-24 border-t border-stone-200">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 mb-24 items-center">
            <div className="space-y-12">
              <div className="space-y-3">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">Visit Us</h3>
                <h2 className="font-serif text-4xl text-[#8b654b]">The Atelier Experience</h2>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="mt-1 text-[#8b654b]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-lg mb-1">Denpasar, Bali</h4>
                    <p className="text-stone-500 leading-relaxed">Jl. Raya Seminyak No. 45, North Kuta</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="mt-1 text-[#8b654b]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-lg mb-1">Weekend Hours</h4>
                    <p className="text-stone-500 leading-relaxed mb-2">Saturday - Sunday: 10:00 - 18:00</p>
                    <p className="text-stone-400 text-sm italic">*Weekdays by Private Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="/images/bali_atelier.png" 
                alt="Atelier Experience" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>
          
          <div className="pt-12 border-t border-stone-200 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="max-w-xs space-y-4">
              <div className="font-serif text-2xl font-bold text-[#8A634B]">Morii Beads</div>
              <p className="text-sm text-stone-500 leading-relaxed">
                Preserving the soul of handmade jewelry through intentional design and Balinese craftsmanship.
              </p>
            </div>
            
            <div className="flex gap-20 text-sm text-stone-600 font-medium">
               <div className="flex flex-col gap-4">
                 <Link href="#" className="hover:text-stone-900 transition">Find retailers</Link>
                 <Link href="#" className="hover:text-stone-900 transition">Sustainability & Ethos</Link>
               </div>
               <div className="flex flex-col gap-4">
                 <Link href="#" className="hover:text-stone-900 transition">Care Guide</Link>
                 <Link href="#" className="hover:text-stone-900 transition">Wholesale</Link>
               </div>
            </div>

            <div className="flex flex-col items-end space-y-6">
              <div className="flex gap-6 justify-end text-stone-400">
                <Link href="#" className="hover:text-stone-800 transition">
                  <span className="sr-only">Facebook</span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Link>
                <Link href="#" className="hover:text-stone-800 transition">
                  <span className="sr-only">Instagram</span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link>
                <Link href="#" className="hover:text-stone-800 transition">
                  <span className="sr-only">Mail</span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </Link>
              </div>
              <p className="text-xs text-stone-400">
                © 2024 Morii Beads | Denpasar, Bali. Weekend Hours: 10AM - 6PM.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
