// Data sertifikat yang akurat sesuai dokumen aslimu
const certificates = {
    1: {
        title: "Sertifikat Partisipasi Creative Webinar: Basic Design",
        desc: "Sertifikat apresiasi yang diberikan kepada Muhammad Nabil Fauzan atas partisipasinya dalam kegiatan Creative Webinar bertema Basic Design yang diselenggarakan oleh LearningX Academy pada tanggal 3 Juli 2024.",
        img: "./assets/cert-1.webp"
    },
    2: {
        title: "Sertifikat Kompetensi Bootcamp UI/UX Design",
        desc: "Sertifikat kompetensi yang menunjukkan kelulusan Muhammad Nabil Fauzan dalam program bootcamp UI/UX Design yang diselenggarakan oleh Special Skill Indonesia dengan predikat Satisfactory, diterbitkan pada 28 Juli 2025.",
        img: "./assets/cert-2.webp"
    },
    3: {
        title: "Sertifikat Penghargaan Peserta Lomba Desain Poster",
        desc: "Sertifikat penghargaan sebagai peserta dalam Lomba Desain Poster Hari Kemerdekaan RI Ke-78, yang diselenggarakan oleh DPC PPMI Jakarta Barat dan Suku Dinas Pemuda dan Olahraga Kota Administrasi Jakarta Barat pada Agustus 2023.",
        img: "./assets/cert-3.webp"
    },
    4: {
        title: "Sertifikat Pelatihan Data Analytics Digital Talent Scholarship",
        desc: "Sertifikat kelulusan pelatihan Data Analytics untuk siswa SMA/sederajat melalui program Thematic Academy dari Digital Talent Scholarship (Kominfo) tahun 2024 dengan durasi 18 jam pelatihan.",
        img: "./assets/cert-4.webp"
    },
    5: {
        title: "Sertifikat Partisipasi Samsung Innovation Campus",
        desc: "Sertifikat partisipasi yang diberikan kepada Muhammad Nabil Fauzan atas keterlibatannya dalam Logic Test Samsung Innovation Campus (Batch 6 - 2024/2025) yang diselenggarakan oleh Hacktiv8 Indonesia pada Desember 2024.",
        img: "./assets/cert-5.webp"
    },
    6: {
        title: "Sertifikat Apresiasi Pelatihan CSS Magician Series",
        desc: "Sertifikat apresiasi atas partisipasi Muhammad Nabil Fauzan dalam kegiatan Pelatihan CSS Magician Series oleh SMKCoding by Alkademi yang dilaksanakan pada periode 16 Februari hingga 1 Maret 2024.",
        img: "./assets/cert-6.webp"
    }
};

// Logika Modal Pop-up
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalContent = document.getElementById('modalContent');

function openModal(id) {
    // Pastikan data sertifikat ada
    if (certificates[id]) {
        modalImg.src = certificates[id].img;
        modalTitle.innerText = certificates[id].title;
        modalDesc.innerText = certificates[id].desc;

        // Tampilkan modal
        modal.classList.remove('hidden');
        // Trigger animasi
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 10);
        
        document.body.style.overflow = 'hidden'; // Kunci scroll background
    }
}

function closeModal() {
    // Animasi keluar
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    
    document.body.style.overflow = 'auto'; // Kembalikan scroll background
}

// ==========================================
// LOGIKA UNTUK NAVBAR MOBILE (HAMBURGER MENU)
// ==========================================
const mobileBtn = document.getElementById('mobileBtn');
const menuList = document.getElementById('menuList');
const navContainer = document.getElementById('navContainer');

mobileBtn.addEventListener('click', () => {
    // Toggle class hidden pada daftar menu
    menuList.classList.toggle('hidden');
    menuList.classList.toggle('flex');
    
    // Tambah background lebih gelap saat menu terbuka di HP
    if(!menuList.classList.contains('hidden')) {
        navContainer.classList.add('bg-[#110e26]/90');
        navContainer.classList.remove('bg-[#110e26]/60');
    } else {
        navContainer.classList.add('bg-[#110e26]/60');
        navContainer.classList.remove('bg-[#110e26]/90');
    }
});

// Otomatis menutup menu saat salah satu link diklik (di HP)
const navLinks = document.querySelectorAll('#menuList a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth < 768) { // md breakpoint in tailwind
            menuList.classList.add('hidden');
            menuList.classList.remove('flex');
            navContainer.classList.add('bg-[#110e26]/60');
            navContainer.classList.remove('bg-[#110e26]/90');
        }
    });
});