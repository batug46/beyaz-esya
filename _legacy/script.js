// TechHome - Industrial Luxury Design - JavaScript
// Strictly following premium design guidelines

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const cartButton = document.querySelector('.fa-shopping-cart')?.parentElement;
    const cartCount = document.querySelector('.bg-accent.text-white.text-xs');
    const searchInput = document.querySelector('input[placeholder="Ürün ara..."]');
    const newsletterInput = document.querySelector('input[type="email"]');
    const newsletterBtn = document.querySelector('.accent-glow-btn');

    // --- State ---
    let cart = JSON.parse(localStorage.getItem('techhome_cart')) || [];

    // --- Core Functions ---

    const updateCartDisplay = () => {
        if (cartCount) {
            const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.classList.add('scale-125');
            setTimeout(() => cartCount.classList.remove('scale-125'), 300);
        }
    };

    const showNotification = (message, type = 'success') => {
        const notification = document.createElement('div');
        // Premium glassmorphism notification
        notification.className = `fixed bottom-8 right-8 z-[200] px-8 py-4 rounded-2xl border border-white/10 premium-glass 
                                  shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform translate-y-20 opacity-0 transition-all duration-500`;

        notification.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="w-2 h-2 rounded-full ${type === 'success' ? 'bg-accent animate-pulse' : 'bg-red-500'}"></div>
                <span class="text-white font-bold uppercase tracking-widest text-xs">${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Peek in
        requestAnimationFrame(() => {
            notification.classList.remove('translate-y-20', 'opacity-0');
        });

        // Peace out
        setTimeout(() => {
            notification.classList.add('translate-y-20', 'opacity-0');
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    };

    const addToCart = (product) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('techhome_cart', JSON.stringify(cart));
        updateCartDisplay();
        showNotification(`${product.name} SEPETE EKLENDİ`);
    };

    // --- Search Logic ---
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.premium-card');

            cards.forEach(card => {
                const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
                const contents = card.textContent.toLowerCase();

                if (title.includes(term) || contents.includes(term)) {
                    card.closest('.group')?.classList.remove('hidden');
                    card.closest('.col-span-12')?.classList.remove('hidden');
                } else {
                    card.closest('.group')?.classList.add('hidden');
                    card.closest('.col-span-12')?.classList.add('hidden');
                }
            });
        });
    }

    // --- Global Click Listener for 'Sepete Ekle' and '+' buttons ---
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        // "Sepete Ekle" or "+" button detection
        if (btn.textContent.includes('Sepete Ekle') || btn.querySelector('.fa-plus')) {
            const card = btn.closest('.premium-card');
            if (card) {
                const name = card.querySelector('h4')?.textContent || 'Ürün';
                const price = card.querySelector('.text-2xl, .text-3xl')?.textContent || '0';

                addToCart({
                    id: name.replace(/\s+/g, '-').toLowerCase(),
                    name: name,
                    price: price
                });

                // Button Micro-interaction
                btn.classList.add('scale-95');
                setTimeout(() => btn.classList.remove('scale-95'), 100);
            }
        }

        // Newsletter
        if (btn === newsletterBtn) {
            e.preventDefault();
            const email = newsletterInput?.value;
            if (email && email.includes('@')) {
                showNotification('BÜLTENE KAYDOLDUNUZ');
                newsletterInput.value = '';
            } else {
                showNotification('GEÇERSİZ E-POSTA', 'error');
            }
        }
    });

    // --- Intersection Observer for Premium Reveal ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal-init');
        observer.observe(section);
    });

    // --- Initial Runs ---
    updateCartDisplay();
    console.log('%c TECHHOME %c Industrial Luxury Online ',
        'background: #2D31FA; color: white; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
        'color: #2D31FA; font-weight: bold;');
});
