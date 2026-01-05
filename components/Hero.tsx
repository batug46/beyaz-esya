"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-20 sm:pt-24 mesh-bg overflow-hidden transition-colors duration-500">
            {/* Decoration */}
            <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-8 sm:space-y-10 text-center lg:text-left">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-3 bg-[var(--surface)] border border-[var(--glass-border)] px-5 py-2.5 rounded-full shadow-xl">
                                <Sparkles size={16} className="text-accent animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[.3em] text-[var(--text-main)]">
                                    Yeni Teknoloji Geldi
                                </span>
                            </div>
                            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-[var(--text-main)]">
                                Evini <span className="text-gradient">Yeniden</span> Tanımla.
                            </h2>
                            <p className="text-base sm:text-lg text-[var(--text-dim)] leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                                Premium tasarım ve akıllı teknolojinin buluştuğu noktada, yaşam kalitenizi zirveye taşıyan beyaz eşyaları keşfedin.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                            <Link href="#products" className="accent-glow-btn bg-accent text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl text-center flex items-center justify-center gap-2">
                                Keşfetmeye Başla
                                <ArrowRight size={18} />
                            </Link>
                            <Link href="/deals" className="premium-glass text-[var(--text-main)] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm border border-[var(--glass-border)] hover:bg-[var(--surface)] transition-all text-center">
                                Kampanyalar
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="pt-10 flex items-center justify-center lg:justify-start space-x-12 border-t border-[var(--glass-border)]">
                            <div>
                                <div className="text-3xl font-black text-[var(--text-main)]">50k+</div>
                                <div className="text-[10px] text-[var(--text-dim)] uppercase font-black tracking-widest">Müşteri</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-[var(--text-main)]">150+</div>
                                <div className="text-[10px] text-[var(--text-dim)] uppercase font-black tracking-widest">Özel Ürün</div>
                            </div>
                        </div>
                    </div>

                    <Link href="/products" className="relative group lg:block hidden lg:-mt-16 xl:-mt-20">
                        <div className="absolute -inset-4 bg-accent/20 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative premium-glass p-4 rounded-[40px] border border-[var(--glass-border)] shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Modern Buzdolabı"
                                className="w-full h-[500px] object-cover rounded-[32px] brightness-90 contrast-110 group-hover:scale-[1.02] transition-transform duration-700"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 premium-glass p-6 rounded-3xl border border-accent/20 shadow-2xl">
                                <div className="text-accent font-black text-2xl uppercase tracking-tighter">İndirim</div>
                                <div className="text-[var(--text-dim)] text-xs font-bold uppercase tracking-widest">Sınırlı Süre</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
