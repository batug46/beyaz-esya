"use client";

import Link from "next/link";
import { useSearch } from "@/context/SearchContext";
import { Plus, ShoppingCart, ArrowRight } from "lucide-react";

const PRODUCT_DATA = [
    {
        id: "smart-pro",
        name: "Smart Pro",
        type: "Premium",
        tag: "Model 2024",
        desc: "Yapay zeka desteğiyle gıdalarınızı taptaze tutan devrimsel teknoloji.",
        price: "₺12.999",
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        large: true
    },
    {
        id: "ecowash",
        name: "EcoWash 9KG",
        type: "Efficiency",
        price: "₺8.499",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        large: false
    },
    {
        id: "cleanmax",
        name: "CleanMax PRO",
        type: "Ultra Clean",
        price: "₺6.999",
        image: "https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg",
        large: false
    }
];

export default function Products() {
    const { searchQuery } = useSearch();

    const filteredProducts = PRODUCT_DATA.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section id="products" className="py-24 sm:py-32 bg-[var(--surface)] relative overflow-hidden transition-colors duration-500">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-24">
                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Limited Edition</span>
                    <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[var(--text-main)] mb-6 tracking-tighter uppercase">
                        Öne Çıkan <span className="text-gradient">Modeller</span>
                    </h3>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 px-4">
                        <div className="text-6xl mb-6">🔍</div>
                        <h4 className="text-2xl font-bold text-[var(--text-main)] mb-2 uppercase tracking-tight">Ürün Bulunamadı</h4>
                        <p className="text-[var(--text-dim)] font-medium">Lütfen farklı bir kelime ile aramayı deneyin.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-12 gap-6 lg:gap-8">
                        {/* Render Products */}
                        {filteredProducts.map((product) => (
                            <div key={product.id} className={product.large ? "col-span-12 lg:col-span-7 group" : "col-span-12 lg:col-span-5 group"}>
                                {product.large ? (
                                    <Link href={`/products/${product.id}`} className="premium-card relative rounded-[40px] overflow-hidden min-h-[500px] lg:h-[616px] flex flex-col">
                                        <div className="absolute inset-0">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover grayscale-[0.3] dark:grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-90"></div>
                                        </div>

                                        <div className="relative p-8 lg:p-12 flex flex-col justify-end h-full">
                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="bg-accent text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">{product.type}</span>
                                                <span className="text-[var(--text-dim)] text-xs font-bold uppercase tracking-widest">{product.tag}</span>
                                            </div>
                                            <h4 className="text-4xl lg:text-6xl font-black text-[var(--text-main)] mb-4 uppercase tracking-tighter">
                                                {product.name.split(' ')[0]} <span className="text-accent">{product.name.split(' ')[1] || ""}</span>
                                            </h4>
                                            <p className="text-[var(--text-dim)] text-lg mb-8 max-w-md font-medium">{product.desc}</p>

                                            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                                                <div className="accent-glow-btn bg-accent text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3">
                                                    <ShoppingCart size={18} />
                                                    Sepete Ekle
                                                </div>
                                                <div className="text-4xl font-black text-[var(--text-main)] tracking-tighter">{product.price}</div>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <Link href={`/products/${product.id}`} className="group relative premium-card rounded-[32px] overflow-hidden h-[294px] block mb-0">
                                        <div className="flex h-full flex-col sm:flex-row">
                                            <div className="h-2/5 sm:h-full sm:w-2/5 relative overflow-hidden">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale-[0.3] dark:grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                                            </div>
                                            <div className="h-3/5 sm:h-full sm:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                                                <div className="text-accent text-[10px] font-black uppercase tracking-widest mb-2">{product.type}</div>
                                                <h4 className="text-2xl font-black text-[var(--text-main)] mb-4 uppercase tracking-tighter">{product.name.split(' ')[0]} <span className="text-[var(--text-dim)]">{product.name.split(' ').slice(1).join(' ')}</span></h4>
                                                <div className="flex items-center justify-between mt-auto">
                                                    <span className="text-2xl font-black text-[var(--text-main)] tracking-tighter">{product.price}</span>
                                                    <div className="w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-accent/20">
                                                        <Plus size={20} strokeWidth={3} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <div className="text-center mt-20">
                    <Link href="/products" className="group relative bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-12 py-5 rounded-2xl font-bold transition-all duration-500 overflow-hidden inline-block shadow-xl hover:shadow-accent/20">
                        <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-black">
                            Tüm Ürünleri Görüntüle
                            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
