"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-active");
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll("section");
        elements.forEach((el) => {
            el.classList.add("reveal-init");
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
