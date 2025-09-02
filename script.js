// script.js

document.addEventListener("DOMContentLoaded", () => {
    /* =========================
       MOBİL MENÜ
    ========================== */
    const mobileMenuBtn = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            mobileMenu.classList.toggle("animate-fadeIn");
        });
    }

    /* =========================
       MODAL (RANDEVU FORMU)
    ========================== */
    const appointmentBtns = document.querySelectorAll("#appointmentBtn, #heroAppointmentBtn");
    const modal = document.getElementById("appointmentModal");
    const closeModal = document.getElementById("closeModal");

    appointmentBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modal.classList.add("flex", "animate-fadeIn");
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        });
    }

    // Modal dışına tıklayınca kapanma
    modal?.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        }
    });

    /* =========================
       TOAST BİLDİRİMİ
    ========================== */
    const form = document.getElementById("appointmentForm");
    const toast = document.getElementById("toast");

    if (form && toast) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Form reset
            form.reset();

            // Toast göster
            toast.classList.remove("hidden");
            toast.classList.add("animate-slideUp");

            setTimeout(() => {
                toast.classList.add("hidden");
                toast.classList.remove("animate-slideUp");
            }, 3000);
        });
    }

    /* =========================
       CAROUSEL (GALERİ)
    ========================== */
    const carousel = document.getElementById("carousel");
    const carouselDots = document.querySelectorAll("[id^='carousel-dot']");
    let currentIndex = 0;
    const totalSlides = carousel?.children.length;

    function showSlide(index) {
        if (!carousel || !totalSlides) return;

        currentIndex = index;
        carousel.style.transform = `translateX(-${index * 100}%)`;

        // Aktif nokta değiştir
        carouselDots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add("bg-gray-800");
                dot.classList.remove("bg-gray-400");
            } else {
                dot.classList.remove("bg-gray-800");
                dot.classList.add("bg-gray-400");
            }
        });
    }

    // Noktalara tıklama
    carouselDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    // Otomatik slayt
    setInterval(() => {
        if (!totalSlides) return;
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 5000);

    // İlk slaytı göster
    showSlide(0);
});
