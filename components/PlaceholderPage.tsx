import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PlaceholderPage({ title, description }: { title: string, description: string }) {
    return (
        <main className="bg-[var(--background)] min-h-screen transition-colors duration-500">
            <Header />
            <section className="pt-32 sm:pt-48 md:pt-60 pb-20 sm:pb-32 md:pb-40 mesh-bg min-h-[70vh] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full -z-10"></div>

                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-accent text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] mb-4 sm:mb-6 block">Yakında</span>
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[var(--text-main)] mb-6 sm:mb-8 tracking-tighter uppercase leading-tight break-words">
                        {title} <span className="text-gradient">Hazırlanıyor</span>
                    </h1>
                    <p className="text-[var(--text-dim)] text-base sm:text-lg mb-10 sm:mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                        {description} Bu sayfa çok yakında premium bir deneyimle yayında olacak.
                    </p>
                    <Link href="/" className="accent-glow-btn bg-accent text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black uppercase tracking-widest text-xs sm:text-sm shadow-2xl inline-block hover:scale-105 transition-transform">
                        Ana Sayfaya Dön
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
