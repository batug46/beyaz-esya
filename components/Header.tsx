"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearch } from "@/context/SearchContext";
import { useTheme } from "next-themes";
import { Sun, Moon, Search, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { searchQuery, setSearchQuery } = useSearch();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header className={`fixed top-0 left-0 w-full ${isMobileMenuOpen ? "z-[1000] bg-white dark:bg-[#0A0A0B]" : "z-[100] premium-glass"} border-b border-[var(--glass-border)] py-1 transition-all duration-300`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-20 gap-2">
                    {/* Logo Section */}
                    <div className="flex items-center gap-4 xl:gap-8">
                        <Link href="/" className="flex items-center group cursor-pointer z-[101] shrink-0">
                            <div className="flex-shrink-0">
                                <h1 className="text-xl sm:text-2xl font-black tracking-tighter text-[var(--text-main)] group-hover:text-accent transition-colors duration-500">
                                    TECH<span className="text-accent">HOME</span>
                                </h1>
                                <p className="text-[8px] sm:text-[9px] text-accent uppercase tracking-[0.3em] font-bold mt-[-4px]">
                                    Industrial Luxury
                                </p>
                            </div>
                        </Link>

                        {/* Navigation - Desktop (Visible from lg for more space) */}
                        <nav className="hidden xl:flex items-center space-x-3 2xl:space-x-6">
                            <Link href="/" className="nav-link text-[10px] 2xl:text-[12px] font-bold uppercase tracking-widest text-[var(--text-main)] whitespace-nowrap">Ana Sayfa</Link>
                            <Link href="/products" className="nav-link text-[10px] 2xl:text-[12px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--text-main)] whitespace-nowrap">Buzdolabı</Link>
                            <Link href="/products" className="nav-link text-[10px] 2xl:text-[12px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--text-main)] whitespace-nowrap">Çamaşır</Link>
                            <Link href="/products" className="nav-link text-[10px] 2xl:text-[12px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--text-main)] whitespace-nowrap">Bulaşık</Link>
                            <Link href="/products" className="nav-link text-[10px] 2xl:text-[12px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--text-main)] whitespace-nowrap">Fırın</Link>
                            <Link href="/about" className="nav-link text-[10px] 2xl:text-[12px] font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--text-main)] whitespace-nowrap">Hakkımızda</Link>
                            <Link href="/deals" className="nav-link text-[10px] 2xl:text-[12px] font-black text-accent uppercase tracking-widest whitespace-nowrap">Kampanyalar</Link>
                        </nav>
                    </div>

                    {/* Actions Section */}
                    <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
                        {/* Search Desktop */}
                        <div className="relative hidden lg:block group">
                            <input
                                type="text"
                                placeholder="Ara..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-24 xl:w-40 2xl:w-56 pl-3 pr-8 py-2 bg-[var(--surface)] border border-[var(--glass-border)] rounded-full focus:ring-2 focus:ring-accent focus:border-accent text-[11px] text-[var(--text-main)] placeholder-[var(--text-dim)] transition-all duration-300 outline-none"
                            />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--text-dim)] group-focus-within:text-accent transition-colors" />
                        </div>

                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-[var(--surface)] border border-[var(--glass-border)] text-[var(--text-main)] hover:text-accent transition-all duration-300"
                                aria-label="Temayı Değiştir"
                            >
                                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                            </button>
                        )}

                        <Link href="/cart" className="relative p-2 rounded-full bg-[var(--surface)] border border-[var(--glass-border)] text-[var(--text-main)] hover:text-accent transition-all duration-300 group">
                            <ShoppingCart size={16} />
                            <span className="absolute -top-1 -right-1 bg-accent text-white text-[8px] rounded-full h-4 w-4 flex items-center justify-center font-bold shadow-[0_0_15px_rgba(45,49,250,0.5)]">
                                3
                            </span>
                        </Link>

                        {/* Auth Button */}
                        <div className="hidden sm:block">
                            <button className="accent-glow-btn bg-accent text-white px-3 2xl:px-6 py-2 rounded-full text-[10px] 2xl:text-[11px] font-black uppercase tracking-widest shadow-lg whitespace-nowrap flex items-center gap-2">
                                <User size={14} className="shrink-0" />
                                <span className="hidden xl:inline">Giriş Yap</span>
                                <span className="xl:hidden sm:inline">Giriş</span>
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="xl:hidden p-2 z-[1002] rounded-full bg-[var(--surface)] border border-[var(--glass-border)] text-[var(--text-main)] hover:text-accent transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`xl:hidden fixed inset-0 z-[999] bg-white dark:bg-[#0A0A0B] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"}`}>
                <div className="flex flex-col h-full pt-28 pb-8 px-6 overflow-y-auto w-full">
                    {/* Background Texture/Effect */}
                    <div className="absolute inset-0 mesh-bg opacity-5 -z-10 pointer-events-none"></div>

                    {/* Mobile Search */}
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="Ürünleri ara..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-5 pr-12 py-4 bg-[var(--surface)] border border-[var(--glass-border)] rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent text-base text-[var(--text-main)] placeholder-[var(--text-dim)] transition-all duration-300 outline-none shadow-xl"
                        />
                        <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-dim)]" />
                    </div>

                    <div className="flex flex-col">
                        {[
                            { name: "Ana Sayfa", href: "/" },
                            { name: "Buzdolabı", href: "/products" },
                            { name: "Çamaşır", href: "/products" },
                            { name: "Bulaşık", href: "/products" },
                            { name: "Fırın", href: "/products" },
                            { name: "Hakkımızda", href: "/about" },
                            { name: "Kampanyalar", href: "/deals", special: true }
                        ].map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block w-full text-2xl font-black uppercase tracking-widest py-6 border-b border-[var(--glass-border)] ${item.special ? "!text-accent" : "text-black dark:text-white"}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 pb-20">
                        <button className="w-full bg-accent text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl flex items-center justify-center gap-3">
                            <User size={20} />
                            Giriş Yap
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
