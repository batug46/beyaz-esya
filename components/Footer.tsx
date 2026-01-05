import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[var(--background)] text-[var(--text-main)] py-24 border-t border-[var(--glass-border)] relative overflow-hidden transition-colors duration-500">
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-accent/5 blur-[150px] rounded-full translate-y-1/2"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20">
                    <div className="lg:col-span-1">
                        <h4 className="text-3xl font-black mb-6 uppercase tracking-tighter text-gradient">TechHome</h4>
                        <p className="text-[var(--text-dim)] mb-10 leading-relaxed font-medium">Geleceğin teknolojisini estetikle buluşturan beyaz eşya deneyimi.</p>
                        <div className="flex space-x-6">
                            <Link href="https://facebook.com" className="text-[var(--text-dim)] hover:text-accent transition-colors"><Facebook size={24} /></Link>
                            <Link href="https://instagram.com" className="text-[var(--text-dim)] hover:text-accent transition-colors"><Instagram size={24} /></Link>
                            <Link href="https://twitter.com" className="text-[var(--text-dim)] hover:text-accent transition-colors"><Twitter size={24} /></Link>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-accent">Koleksiyon</h5>
                        <ul className="space-y-4">
                            <li><Link href="/products" className="text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors text-sm font-bold uppercase tracking-widest">Buzdolabı</Link></li>
                            <li><Link href="/products" className="text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors text-sm font-bold uppercase tracking-widest">Çamaşır</Link></li>
                            <li><Link href="/products" className="text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors text-sm font-bold uppercase tracking-widest">Bulaşık</Link></li>
                            <li><Link href="/products" className="text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors text-sm font-bold uppercase tracking-widest">Fırın</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-accent">Destek</h5>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors text-sm font-bold uppercase tracking-widest">Hakkımızda</Link></li>
                            <li><Link href="/contact" className="text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors text-sm font-bold uppercase tracking-widest">İrtibat</Link></li>
                            <li><Link href="/orders" className="text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors text-sm font-bold uppercase tracking-widest">Sipariş</Link></li>
                            <li><Link href="/returns" className="text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors text-sm font-bold uppercase tracking-widest">İade</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-accent">Bize Ulaşın</h5>
                        <div className="space-y-6 text-[var(--text-dim)]">
                            <p className="text-sm font-bold uppercase tracking-widest">İstanbul, TR</p>
                            <p className="text-lg font-black text-[var(--text-main)] tracking-widest">0888 888 88 88</p>
                            <Link href="mailto:info@techhome.com" className="text-accent text-sm font-bold underline decoration-2 underline-offset-8 block uppercase tracking-widest">info@techhome.com</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[var(--glass-border)] mt-20 pt-10 text-center">
                    <p className="text-[var(--text-dim)] opacity-40 text-[10px] font-black uppercase tracking-[0.5em]">&copy; 2024 TechHome Industrial Design.</p>
                </div>
            </div>
        </footer>
    );
}
