import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <ScrollReveal />
            <Header />

            {/* About Hero */}
            <section className="relative pt-40 pb-32 mesh-bg overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[600px] h-[80vw] max-h-[600px] bg-accent/10 blur-[150px] rounded-full"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6 block">Kimiz Biz?</span>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-[var(--text-main)] mb-10 tracking-tighter uppercase">
                        Hakkımızda
                    </h1>
                    <p className="text-[var(--text-dim)] text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                        TechHome, 20 yılı aşkın süredir beyaz eşya dünyasında inovasyonun ve estetiğin öncüsü olmayı hedefleyen bir tutkunun eseridir.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-32 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-8">
                            <h2 className="text-2xl sm:text-4xl font-black text-[var(--text-main)] uppercase tracking-tighter">Vizyonumuz & <span className="text-accent">Misyonumuz</span></h2>
                            <p className="text-[var(--text-dim)] text-lg leading-relaxed">
                                Sadece birer "beyaz eşya" üretmiyoruz. Biz, evinizin ruhunu tamamlayan, günlük yaşamınızı kolaylaştırırken estetikten ödün vermeyen teknolojik sanat eserleri tasarlıyoruz.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div className="premium-card p-6 rounded-2xl">
                                    <div className="text-3xl font-black text-accent mb-2">20+</div>
                                    <div className="text-[10px] text-[var(--text-dim)] uppercase font-black tracking-widest">Yıllık Tecrübe</div>
                                </div>
                                <div className="premium-card p-6 rounded-2xl">
                                    <div className="text-3xl font-black text-accent mb-2">1M+</div>
                                    <div className="text-[10px] text-[var(--text-dim)] uppercase font-black tracking-widest">Mutlu Ev</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="premium-card rounded-[40px] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Modern Kitchen"
                                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-48 sm:w-64 h-48 sm:h-64 bg-accent/20 blur-3xl -z-10 group-hover:bg-accent/30 transition-all"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
