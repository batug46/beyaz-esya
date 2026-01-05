import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProductsPage() {
    const allProducts = [
        { id: "smart-pro", name: "Smart Pro Buzdolabı", category: "Buzdolabı", price: "12.999", image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "ecowash", name: "EcoWash 9KG", category: "Çamaşır", price: "8.499", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "cleanmax", name: "CleanMax Pro", category: "Bulaşık", price: "6.999", image: "https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg" },
        { id: "gastromaster", name: "GastroMaster Fırın", category: "Fırın", price: "9.299", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "ultracool", name: "UltraCool Yan-Yana", category: "Buzdolabı", price: "24.500", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "silentwash", name: "SilentWash Siyah", category: "Çamaşır", price: "10.199", image: "https://images.unsplash.com/photo-1626806819282-2c1dc61a5e05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    ];

    return (
        <main className="bg-dark min-h-screen">
            <Header />
            <ScrollReveal />

            {/* Hero Header */}
            <section className="pt-40 pb-20 mesh-bg border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Koleksiyon</span>
                    <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
                        TÜM <span className="text-gradient">MODEL</span>LER
                    </h1>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto font-medium">
                        Endüstriyel zerafet ve ileri mühendislikle tanışın. Her bir ürünümüz, yaşam standartlarınızı geleceğe taşımak için tasarlandı.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-24 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {allProducts.map((product) => (
                            <Link key={product.id} href={`/products/${product.id}`} className="group relative">
                                <div className="premium-card rounded-[32px] overflow-hidden">
                                    <div className="relative h-[450px]">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent"></div>

                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            <div className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-2">{product.category}</div>
                                            <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">{product.name}</h4>

                                            <div className="flex items-center justify-between mt-4">
                                                <div className="text-2xl font-black text-white tracking-tighter">₺{product.price}</div>
                                                <div className="w-12 h-12 bg-accent/20 border border-accent/30 text-accent rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all shadow-lg">
                                                    <i className="fas fa-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
