import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Statik veri (Gerçek uygulamada API veya JSON'dan çekilir)
    const productData: any = {
        "smart-pro": {
            name: "Smart Pro Buzdolabı",
            price: "12.999",
            category: "Buzdolabı",
            image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            description: "Yapay zeka desteğiyle gıdalarınızı taptaze tutan devrimsel teknoloji. Akıllı sensörler sayesinde enerji tasarrufu sağlar ve iç sıcaklığı her zaman ideal seviyede korur."
        },
        "ecowash": {
            name: "EcoWash 9KG",
            price: "8.499",
            category: "Çamaşır",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            description: "Su ve enerji tasarrufunda dünya lideri. 9KG kapasitesiyle kalabalık aileler için ideal çözüm sunarken, sessiz motor teknolojisiyle huzurunuzu bozmaz."
        },
        "cleanmax": {
            name: "CleanMax Pro",
            price: "6.999",
            category: "Bulaşık",
            image: "https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg",
            description: "Zorlu lekeler için geliştirilmiş ultra temizlik teknolojisi. Enerji verimliliği yüksek programları ile hem doğayı hem cebinizi korur."
        }
    };

    const currentProduct = productData[id] || {
        name: "Premium Ürün",
        price: "0",
        category: "Kategori",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Bu ürün hakkında detaylı bilgi yakında eklenecektir. TechHome kalitesiyle geleceği evinizde hissedin."
    };

    return (
        <main className="bg-[var(--background)] min-h-screen transition-colors duration-500">
            <Header />
            <ScrollReveal />

            <section className="pt-32 sm:pt-40 pb-20 mesh-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image Side */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-accent/20 rounded-[40px] blur-3xl opacity-50"></div>
                            <div className="relative premium-glass p-3 sm:p-4 rounded-[32px] sm:rounded-[40px] border border-[var(--glass-border)] overflow-hidden">
                                <img
                                    src={currentProduct.image}
                                    alt={currentProduct.name}
                                    className="w-full h-[350px] sm:h-[500px] lg:h-[600px] object-cover rounded-[24px] sm:rounded-[32px] group-hover:scale-[1.05] transition-transform duration-1000"
                                />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="space-y-8 sm:space-y-10 text-center lg:text-left">
                            <div className="space-y-4">
                                <span className="text-accent text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] block">{currentProduct.category}</span>
                                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[var(--text-main)] tracking-tighter uppercase leading-tight break-words">
                                    {currentProduct.name}
                                </h1>
                                <div className="text-3xl sm:text-4xl font-black text-gradient tracking-tighter">₺{currentProduct.price}</div>
                            </div>

                            <p className="text-[var(--text-dim)] text-base sm:text-lg leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                                {currentProduct.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8 sm:pt-10 border-t border-[var(--glass-border)]">
                                <button className="accent-glow-btn bg-accent text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm shadow-2xl">
                                    Sepete Ekle
                                </button>
                                <Link href="/products" className="premium-glass text-[var(--text-main)] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm border border-[var(--glass-border)] hover:bg-[var(--surface)] transition-all text-center">
                                    Diğer Modeller
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-10">
                                <div>
                                    <div className="text-[var(--text-main)] font-bold text-[10px] sm:text-sm mb-1 uppercase">Garanti</div>
                                    <div className="text-[var(--text-dim)] text-[9px] sm:text-xs">5 YIL</div>
                                </div>
                                <div>
                                    <div className="text-[var(--text-main)] font-bold text-[10px] sm:text-sm mb-1 uppercase">Teslimat</div>
                                    <div className="text-[var(--text-dim)] text-[9px] sm:text-xs">ÜCRETSİZ</div>
                                </div>
                                <div>
                                    <div className="text-[var(--text-main)] font-bold text-[10px] sm:text-sm mb-1 uppercase">Enerji</div>
                                    <div className="text-[var(--text-dim)] text-[9px] sm:text-xs">A+++</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
