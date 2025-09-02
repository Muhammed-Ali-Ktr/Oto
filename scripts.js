// DOM Yüklenince Çalışacak Fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    // Elemanları Seç
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const navMenu = document.getElementById('navMenu');
    const heroAppointmentBtn = document.getElementById('heroAppointmentBtn');
    const appointmentModal = document.getElementById('appointmentModal');
    const closeModal = document.getElementById('closeModal');
    const modalAppointmentForm = document.getElementById('modalAppointmentForm');
    const toast = document.getElementById('toast');

    // Mobil Menü Butonuna Tıklandığında Menü Göster
    mobileMenuButton.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Randevu Al Butonuna Tıklandığında Modal Aç
    heroAppointmentBtn.addEventListener('click', function() {
        appointmentModal.style.display = 'flex';
    });

    // Modal Kapatma Butonuna Tıklandığında Modal Kapat
    closeModal.addEventListener('click', function() {
        appointmentModal.style.display = 'none';
    });

    // Modal Formu Gönderildiğinde
    modalAppointmentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Formun varsayılan gönderimini engelle

        // Burada form verilerini işleyebilirsiniz
        // Örneğin, veritabanına kaydetme veya API çağrısı yapma

        // Modalı kapat
        appointmentModal.style.display = 'none';

        // Toast mesajını göster
        showToast('Randevunuz başarıyla alındı!');
    });

    // Toast Mesajını Gösterme Fonksiyonu
    function showToast(message) {
        toast.textContent = message;
        toast.style.visibility = 'visible';
        toast.style.opacity = 1;

        setTimeout(function() {
            toast.style.opacity = 0;
            setTimeout(function() {
                toast.style.visibility = 'hidden';
            }, 500); // 500ms sonra görünmez yap
        }, 3000); // 3000ms sonra kaybol
    }
});
