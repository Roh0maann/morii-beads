import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-8 py-24 border-t border-stone-200">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 mb-24 items-center">
          <div className="space-y-12">
            <div className="space-y-3">
              <h3 className="text-[13px] font-bold tracking-[0.15em] uppercase text-stone-500">
                Visit Us
              </h3>
              <h2 className="font-serif text-[clamp(1.75rem,2.5vw+0.5rem,2.25rem)] leading-[1.2] text-[#8b654b]">
                The Atelier Experience
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="mt-1 text-[#8b654b]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 text-lg leading-[1.3] mb-1">
                    Denpasar, Bali
                  </h4>
                  <p className="text-stone-500 leading-[1.6]">
                    Jl. Raya Seminyak No. 45, North Kuta
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="mt-1 text-[#8b654b]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 text-lg leading-[1.3] mb-1">
                    Weekend Hours
                  </h4>
                  <p className="text-stone-500 leading-[1.6] mb-2">
                    Saturday - Sunday: 10:00 - 18:00
                  </p>
                  <p className="text-stone-500 text-sm italic">
                    *Weekdays by Private Appointment Only
                  </p>
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
            <Link
              href="/"
              className="font-serif text-2xl font-bold text-[#8A634B] hover:opacity-80 transition block"
            >
              Morii Beads
            </Link>
            <p className="text-[15px] text-stone-500 leading-[1.6]">
              Preserving the soul of handmade jewelry through intentional design
              and Balinese craftsmanship.
            </p>
          </div>

          <div className="flex gap-16 text-[15px] text-stone-600 font-medium">
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-stone-900 transition">
                Find retailers
              </Link>
              <Link href="#" className="hover:text-stone-900 transition">
                Sustainability & Ethos
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-stone-900 transition">
                Care Guide
              </Link>
              <Link href="#" className="hover:text-stone-900 transition">
                Wholesale
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-6">
            <div className="flex gap-6 justify-end text-stone-400">
              <Link href="#" className="hover:text-stone-800 transition p-1">
                <span className="sr-only">Facebook</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="hover:text-stone-800 transition p-1">
                <span className="sr-only">Instagram</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="hover:text-stone-800 transition p-1">
                <span className="sr-only">Mail</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </Link>
            </div>
            <p className="text-xs text-stone-500">
              © 2024 Morii Beads | Denpasar, Bali. Weekend Hours: 10AM - 6PM.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
