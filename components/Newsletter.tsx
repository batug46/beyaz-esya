"use client";

export default function Newsletter() {
    return (
        <section className="py-32 bg-[var(--surface)] relative overflow-hidden">
            <div className="absolute inset-0 mesh-bg opacity-10"></div>
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-4xl sm:text-5xl font-black text-[var(--text-main)] mb-6 uppercase tracking-tighter">
                    İnovasyonu <span className="text-accent">Takip Edin</span>
                </h3>
                <p className="text-[var(--text-dim)] text-lg mb-12 max-w-2xl mx-auto font-medium">
                    Yeni modellerimiz ve özel tasarım koleksiyonlarımızdan ilk siz haberdar olun.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="E-posta"
                        className="flex-1 px-8 py-5 rounded-full border border-[var(--glass-border)] bg-[var(--background)] text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-accent transition-all font-bold"
                        required
                    />
                    <button className="accent-glow-btn bg-accent text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl">
                        Abone Ol
                    </button>
                </form>
            </div>
        </section>
    );
}
