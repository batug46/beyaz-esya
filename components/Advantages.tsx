"use client";

import { Rocket, ShieldCheck, Smartphone, LineChart } from "lucide-react";

export default function Advantages() {
    const items = [
        {
            icon: <Rocket className="text-white" size={32} />,
            title: "Işık Hızında",
            span: "Deneyim",
            desc: "Gelişmiş mühendislik ve optimize edilmiş sistemlerle saniyeler içinde sonuç alın.",
            featured: true
        },
        {
            icon: <ShieldCheck className="text-white" size={24} />,
            title: "Ultra Güvenlik",
            desc: "En üst düzey şifreleme ile verileriniz koruma altında."
        },
        {
            icon: <Smartphone className="text-white" size={24} />,
            title: "Mobil Uyum",
            desc: "Her cihazda kusursuz ve akıcı görüntüleme keyfi."
        },
        {
            icon: <LineChart className="text-white" size={24} />,
            title: "Anlık Veri",
            desc: "Gerçek zamanlı stok ve fiyat güncellemeleri."
        }
    ];

    return (
        <section className="py-24 sm:py-32 relative bg-[var(--background)] overflow-hidden transition-colors duration-500">
            <div className="absolute inset-0 mesh-bg opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block">Geleceğin Standartları</span>
                    <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[var(--text-main)] mb-8 tracking-tighter uppercase">
                        Neden <span className="text-accent">Techhome?</span>
                    </h3>
                    <p className="text-[var(--text-dim)] text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Modern teknolojiyi evinizin kalbine taşıyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {items.map((item, idx) => (
                        <div key={idx} className={item.featured ? "xl:col-span-2 group" : "group"}>
                            <div className={`premium-card p-10 rounded-[40px] h-full flex flex-col ${item.featured ? "justify-center relative overflow-hidden" : "items-center justify-center text-center"}`}>
                                {item.featured && <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl"></div>}
                                <div className={`${item.featured ? "w-20 h-20" : "w-16 h-16 bg-[var(--surface)] border border-[var(--glass-border)]"} bg-accent rounded-3xl flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(45,49,250,0.3)] mx-auto md:mx-0`}>
                                    {item.icon}
                                </div>
                                <h4 className={`${item.featured ? "text-4xl" : "text-2xl"} font-black text-[var(--text-main)] mb-6 uppercase tracking-tighter`}>
                                    {item.title} {item.span && <span className="text-accent">{item.span}</span>}
                                </h4>
                                <p className="text-[var(--text-dim)] text-lg font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
