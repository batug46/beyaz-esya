import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Categories() {
    const categories = [
        {
            name: "Buzdolabı",
            tag: "Soğutma",
            image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Çamaşır",
            tag: "Temizlik",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Bulaşık",
            tag: "Hijyen",
            image: "https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg"
        },
        {
            name: "Fırın & Ocak",
            tag: "Gastronomi",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="py-24 sm:py-32 relative bg-[var(--background)] overflow-hidden transition-colors duration-500">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/5 blur-[150px] rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8 text-center md:text-left">
                    <div className="max-w-2xl mx-auto md:mx-0">
                        <h3 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] mb-6 uppercase tracking-tighter text-center md:text-left">
                            Koleksiyonu <span className="text-accent">Keşfet</span>
                        </h3>
                        <p className="text-[var(--text-dim)] text-base sm:text-lg font-medium leading-relaxed text-center md:text-left">
                            Modern mühendislik ve estetiğin mükemmel dengesi. Her kategori, yaşam alanınızı bir üst seviyeye taşımak için tasarlandı.
                        </p>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <div className="h-1 w-20 bg-accent rounded-full mb-2"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {categories.map((cat, idx) => (
                        <Link key={idx} href="/products" className="group cursor-pointer">
                            <div className="premium-card relative rounded-[32px] overflow-hidden">
                                <div className="relative h-[350px] sm:h-[400px]">
                                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover grayscale-[0.3] dark:grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-90"></div>

                                    <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-2">{cat.tag}</div>
                                        <h4 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] mb-2 uppercase tracking-tighter">{cat.name}</h4>
                                        <div className="flex items-center text-[var(--text-dim)] text-xs font-bold uppercase tracking-widest group-hover:text-accent transition-colors">
                                            <span>Görüntüle</span>
                                            <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
