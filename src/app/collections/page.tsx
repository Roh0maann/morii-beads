"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const WHATSAPP_NUMBER = "6281234567890"; // Dummy number

import productsData from "@/data/products.json";

const CATEGORIES = ["Necklaces", "Bracelets", "Rings"];
const MATERIALS = ["Macrame", "Sandalwood", "Gold", "Obsidian", "Riverstone", "Silver"];
const BRANDS = ["MORII BEADS", "THE ATELIER"];

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>("just_in");

  const [openSection, setOpenSection] = useState<string | null>("category");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      priceNumeric: product.priceNumeric,
      priceFormatted: product.priceFormatted,
      image: product.image,
    });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = productsData;

    // Apply Filters
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial);
    }
    if (selectedBrand) {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    // Apply Sorting
    result = [...result].sort((a, b) => {
      switch (sortOption) {
        case "price_asc":
          return a.priceNumeric - b.priceNumeric;
        case "price_desc":
          return b.priceNumeric - a.priceNumeric;
        case "just_in":
        default:
          return b.dateAdded - a.dateAdded; // Newest first
      }
    });

    return result;
  }, [selectedCategory, selectedMaterial, selectedBrand, sortOption]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedMaterial(null);
    setSelectedBrand(null);
  };

  return (
    <main className="min-h-screen bg-white pt-16 md:pt-24 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-16 mb-12 md:mb-16 items-end">
          {/* Left Side: Breadcrumb & Title */}
          <div className="text-left">
            <div className="flex items-center justify-start space-x-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 mb-6 md:mb-8">
              <Link href="/" className="hover:text-stone-800 transition">
                Home
              </Link>
              <span>/</span>
              <span className="text-stone-800">Collections</span>
            </div>
            <h1 className="font-sans text-4xl md:text-5xl text-[#2B2724]">Collections</h1>
          </div>

          {/* Right Side: Sort & Results */}
          <div className="flex justify-between items-center text-sm font-medium text-stone-500 pb-1">
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-transparent border border-stone-300 px-4 py-2 pr-10 rounded cursor-pointer focus:outline-none focus:ring-1 focus:ring-stone-500"
              >
                <option value="just_in">Just In</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
            <div>{filteredAndSortedProducts.length} Results</div>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-16">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block space-y-8">
            {(selectedCategory || selectedMaterial || selectedBrand) && (
              <button
                onClick={clearFilters}
                className="text-xs font-semibold uppercase tracking-[0.1em] text-stone-400 hover:text-stone-800 transition mb-4 block border-b border-stone-300 pb-1"
              >
                Clear Filters
              </button>
            )}

            {/* Category Filter */}
            <div className="border-b border-stone-200 pb-4">
              <button
                onClick={() => toggleSection("category")}
                className="flex w-full justify-between items-center text-sm font-bold tracking-[0.15em] uppercase text-stone-800 focus:outline-none"
              >
                Category
                <span className="text-lg font-light text-stone-400">
                  {openSection === "category" ? "-" : "+"}
                </span>
              </button>
              {openSection === "category" && (
                <div className="mt-4 space-y-3 flex flex-col items-start">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                      className={`text-sm transition ${
                        selectedCategory === cat
                          ? "text-stone-900 font-semibold"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Material Filter */}
            <div className="border-b border-stone-200 pb-4">
              <button
                onClick={() => toggleSection("material")}
                className="flex w-full justify-between items-center text-sm font-bold tracking-[0.15em] uppercase text-stone-800 focus:outline-none"
              >
                Material
                <span className="text-lg font-light text-stone-400">
                  {openSection === "material" ? "-" : "+"}
                </span>
              </button>
              {openSection === "material" && (
                <div className="mt-4 space-y-3 flex flex-col items-start">
                  {MATERIALS.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(selectedMaterial === mat ? null : mat)}
                      className={`text-sm transition ${
                        selectedMaterial === mat
                          ? "text-stone-900 font-semibold"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Brand Filter */}
            <div className="border-b border-stone-200 pb-4">
              <button
                onClick={() => toggleSection("brand")}
                className="flex w-full justify-between items-center text-sm font-bold tracking-[0.15em] uppercase text-stone-800 focus:outline-none"
              >
                Brand
                <span className="text-lg font-light text-stone-400">
                  {openSection === "brand" ? "-" : "+"}
                </span>
              </button>
              {openSection === "brand" && (
                <div className="mt-4 space-y-3 flex flex-col items-start">
                  {BRANDS.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                      className={`text-sm transition ${
                        selectedBrand === brand
                          ? "text-stone-900 font-semibold"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div>
            {filteredAndSortedProducts.length === 0 ? (
              <div className="py-20 text-center text-stone-500 font-sans text-lg">
                No products found matching your filters.
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-16">
                {filteredAndSortedProducts.map((product) => (
                  <div key={product.id} className="group block relative">
                    {/* Image Container */}
                    <div className="relative aspect-[3/4] bg-[#EBE9E4] mb-6 overflow-hidden flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover mix-blend-multiply transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Hover Overlay Add to Cart Button */}
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-8">
                         <button 
                           onClick={(e) => handleAddToCart(e, product)}
                           className="bg-[#2B2724] text-white text-xs font-bold uppercase tracking-[0.15em] px-6 py-3 hover:bg-black transition-colors"
                         >
                           Add to Bag
                         </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="text-left space-y-1 md:space-y-2 mt-4 md:mt-0">
                      <h3 className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-stone-500">
                        {product.brand}
                      </h3>
                      <h4 className="font-sans text-sm md:text-lg text-stone-800 leading-tight">
                        {product.name}
                      </h4>
                      <p className="text-xs md:text-sm font-semibold text-stone-900 pt-1">
                        {product.priceFormatted}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {filteredAndSortedProducts.length > 0 && (
              <div className="mt-24 flex justify-center space-x-4 text-sm font-medium text-stone-500">
                <span className="text-stone-800 font-bold border-b-2 border-stone-800 pb-1">1</span>
                <span className="hover:text-stone-800 cursor-pointer">2</span>
                <span className="hover:text-stone-800 cursor-pointer">3</span>
                <span className="hover:text-stone-800 cursor-pointer">{`>`}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
