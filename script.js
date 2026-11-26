// ==========================================================================
// Interaktivitas & Bilingual Switcher (ID / EN) - Evelyn Sesilia Putri
// ==========================================================================

const translations = {
    id: {
        page_title: 'Portofolio | EVELYN SESILIA PUTRI',
        nav_about: 'Tentang',
        nav_projects: 'Projek',
        nav_cert: 'Sertifikat',
        nav_skills: 'Skill',
        nav_contact: 'Kontak',
        nav_contact_mobile: 'Kontak Saya',
        hero_badge: 'Pelajar TJKT • SMKN 1 Blitar',
        hero_greeting: 'Halo, Saya',
        hero_desc: 'Siswi jurusan Teknik Jaringan Komputer dan Telekomunikasi yang antusias merancang sistem basis data terstruktur serta membangun aplikasi kasir yang efisien dan mudah digunakan.',
        hero_btn_projects: 'Lihat Projek Saya',
        hero_btn_contact: 'Hubungi Saya',
        badge_label: 'Kompetensi',
        badge_value: 'TJKT • Tersertifikasi UKK',
        about_tag: 'Profil Diri',
        about_title: 'Tentang Saya',
        about_p1: 'Perkenalkan, nama saya <strong class="text-slate-900 font-semibold">Evelyn Sesilia Putri</strong>. Saat ini saya menempuh pendidikan sebagai pelajar di <strong class="text-pinksoft-700 font-semibold">SMKN 1 Blitar</strong> dengan mengambil jurusan <strong class="text-pinksoft-700 font-semibold">Teknik Jaringan Komputer dan Telekomunikasi (TJKT)</strong>.',
        about_p2: 'Selama menempuh studi di bidang TJKT, saya tidak hanya mempelajari infrastruktur jaringan komputer, tetapi juga mendalami perancangan serta pengelolaan basis data (<em class="text-slate-700">database</em>) dan pengembangan sistem aplikasi kasir yang terstruktur, akurat, dan siap membantu operasional bisnis.',
        proj_tag: 'Karya & Praktik',
        proj_title: 'Projek Saya',
        proj_subtitle: 'Beberapa hasil pengembangan sistem yang telah saya kerjakan selama masa studi di jurusan TJKT.',
        proj1_badge: 'Basis Data',
        proj1_title: 'Sistem Manajemen Database',
        proj1_desc: 'Perancangan skema relasional, normalisasi tabel, serta pengelolaan kueri data terstruktur untuk memastikan penyimpanan informasi yang rapi, cepat diakses, dan minim duplikasi.',
        proj1_tag1: 'Relasi Tabel',
        proj1_tag2: 'SQL Query',
        proj1_tag3: 'Struktur Data',
        proj2_badge: 'Aplikasi Kasir',
        proj2_title: 'Aplikasi Kasir & Transaksi',
        proj2_desc: 'Sistem pencatatan penjualan yang terintegrasi dengan stok barang, perhitungan total otomatis, serta rekap laporan transaksi harian untuk mempermudah operasional kasir.',
        proj2_tag1: 'Point of Sale',
        proj2_tag2: 'Manajemen Stok',
        proj2_tag3: 'Laporan Transaksi',
        cert_tag: 'Pencapaian Kompetensi',
        cert_title: 'Sertifikat UKK',
        cert_subtitle: 'Sertifikat Uji Kompetensi Keahlian (UKK) jurusan Teknik Jaringan Komputer dan Telekomunikasi.',
        cert_zoom: 'Klik untuk memperbesar',
        cert_card_title: 'Sertifikat Uji Kompetensi Keahlian (UKK)',
        cert_card_desc: 'Teknik Jaringan Komputer dan Telekomunikasi • SMKN 1 Blitar',
        cert_status: 'Tersertifikasi',
        skill_tag: 'Keahlian Utama',
        skill_title: 'Skill Saya',
        skill_subtitle: 'Kompetensi inti yang saya kuasai sesuai bidang TJKT dan pengembangan sistem.',
        skill1_title: 'Jaringan Komputer',
        skill1_desc: 'Konfigurasi dasar jaringan, routing, dan troubleshooting konektivitas.',
        skill2_title: 'Manajemen Database',
        skill2_desc: 'Perancangan tabel relasional, pengelolaan SQL, dan integritas data.',
        skill3_title: 'Aplikasi Kasir',
        skill3_desc: 'Pembuatan alur transaksi kasir, stok barang, dan rekap penjualan.',
        skill4_title: 'Administrasi Sistem',
        skill4_desc: 'Instalasi sistem operasi, perawatan perangkat keras & lunak.',
        contact_tag: 'Mari Terhubung',
        contact_title: 'Kontak Saya',
        contact_subtitle: 'Jangan ragu untuk menghubungi saya melalui Instagram pribadi atau Email untuk diskusi maupun kolaborasi.',
        contact_ig_label: 'Instagram Pribadi',
        contact_ig_action: 'Kunjungi profil Instagram →',
        contact_email_label: 'Email',
        contact_email_action: 'Kirim pesan langsung →',
        footer_rights: 'Hak cipta dilindungi.',
        footer_role: 'Pelajar TJKT • SMKN 1 Blitar',
        toast_copied: 'Alamat email berhasil disalin!'
    },
    en: {
        page_title: 'Portfolio | EVELYN SESILIA PUTRI',
        nav_about: 'About',
        nav_projects: 'Projects',
        nav_cert: 'Certificate',
        nav_skills: 'Skills',
        nav_contact: 'Contact',
        nav_contact_mobile: 'Contact Me',
        hero_badge: 'TJKT Student • SMKN 1 Blitar',
        hero_greeting: 'Hello, I am',
        hero_desc: 'A Computer Network and Telecommunications Engineering student passionate about designing structured database systems and building efficient, user-friendly cashier applications.',
        hero_btn_projects: 'View My Projects',
        hero_btn_contact: 'Contact Me',
        badge_label: 'Competency',
        badge_value: 'TJKT • UKK Certified',
        about_tag: 'Personal Profile',
        about_title: 'About Me',
        about_p1: 'Hello, my name is <strong class="text-slate-900 font-semibold">Evelyn Sesilia Putri</strong>. I am currently a student at <strong class="text-pinksoft-700 font-semibold">SMKN 1 Blitar</strong> majoring in <strong class="text-pinksoft-700 font-semibold">Computer Network and Telecommunications Engineering (TJKT)</strong>.',
        about_p2: 'Throughout my studies in TJKT, I have not only learned computer network infrastructure, but also delved into <em class="text-slate-700">database</em> design and management as well as developing structured, accurate cashier application systems to support business operations.',
        proj_tag: 'Works & Practice',
        proj_title: 'My Projects',
        proj_subtitle: 'Selected system development projects I have built during my studies in the TJKT program.',
        proj1_badge: 'Database',
        proj1_title: 'Database Management System',
        proj1_desc: 'Relational schema design, table normalization, and structured data query management to ensure neat, fast-to-access information storage with minimal duplication.',
        proj1_tag1: 'Table Relations',
        proj1_tag2: 'SQL Query',
        proj1_tag3: 'Data Structure',
        proj2_badge: 'Cashier App',
        proj2_title: 'Cashier & Transaction App',
        proj2_desc: 'A sales recording system integrated with product inventory, automated total calculations, and daily transaction report summaries to streamline cashier operations.',
        proj2_tag1: 'Point of Sale',
        proj2_tag2: 'Inventory Control',
        proj2_tag3: 'Sales Reports',
        cert_tag: 'Competency Achievement',
        cert_title: 'UKK Certificate',
        cert_subtitle: 'Vocational Competency Test (UKK) Certificate in Computer Network and Telecommunications Engineering.',
        cert_zoom: 'Click to enlarge',
        cert_card_title: 'Vocational Competency Test (UKK) Certificate',
        cert_card_desc: 'Computer Network and Telecommunications Engineering • SMKN 1 Blitar',
        cert_status: 'Certified',
        skill_tag: 'Core Competencies',
        skill_title: 'My Skills',
        skill_subtitle: 'Core technical skills I have mastered in the TJKT field and system development.',
        skill1_title: 'Computer Networking',
        skill1_desc: 'Basic network configuration, routing, and connectivity troubleshooting.',
        skill2_title: 'Database Management',
        skill2_desc: 'Relational table design, SQL management, and data integrity.',
        skill3_title: 'Cashier Application',
        skill3_desc: 'Building cashier transaction flows, inventory tracking, and sales summaries.',
        skill4_title: 'System Administration',
        skill4_desc: 'Operating system installation, hardware & software maintenance.',
        contact_tag: 'Let us Connect',
        contact_title: 'Contact Me',
        contact_subtitle: 'Feel free to reach out via my personal Instagram or Email for discussions and collaborations.',
        contact_ig_label: 'Personal Instagram',
        contact_ig_action: 'Visit Instagram profile →',
        contact_email_label: 'Email',
        contact_email_action: 'Send a direct message →',
        footer_rights: 'All rights reserved.',
        footer_role: 'TJKT Student • SMKN 1 Blitar',
        toast_copied: 'Email address copied to clipboard!'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Tahun Dinamis di Footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. Sistem Bilingual (ID / EN) dengan Penyimpanan LocalStorage
    const langButtons = document.querySelectorAll('.lang-btn');
    const i18nElements = document.querySelectorAll('[data-i18n]');

    const applyLanguage = (lang) => {
        const dict = translations[lang] || translations.id;
        document.documentElement.lang = lang;
        document.title = dict.page_title;

        i18nElements.forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        langButtons.forEach((btn) => {
            if (btn.getAttribute('data-lang-btn') === lang) {
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            }
        });

        try {
            localStorage.setItem('portfolio_lang', lang);
        } catch (e) {
            // Abaikan jika penyimpanan lokal dibatasi
        }
    };

    langButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang-btn');
            applyLanguage(selectedLang);
        });
    });

    let savedLang = 'id';
    try {
        savedLang = localStorage.getItem('portfolio_lang') || 'id';
    } catch (e) {
        savedLang = 'id';
    }
    applyLanguage(savedLang);

    // 3. Toggle Menu Mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach((link) => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 4. Lightbox Sertifikat UKK
    const certTrigger = document.getElementById('cert-trigger');
    const certImage = document.getElementById('cert-image');
    const certModal = document.getElementById('cert-modal');
    const modalCertImg = document.getElementById('modal-cert-img');
    const closeModalBtn = document.getElementById('close-modal-btn');

    const openCertModal = () => {
        if (!certModal || !modalCertImg || !certImage) return;
        modalCertImg.src = certImage.currentSrc || certImage.src;
        certModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeCertModal = () => {
        if (!certModal) return;
        certModal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    if (certTrigger) {
        certTrigger.addEventListener('click', openCertModal);
        certTrigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openCertModal();
            }
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeCertModal);
    }

    if (certModal) {
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) {
                closeCertModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && certModal && !certModal.classList.contains('hidden')) {
            closeCertModal();
        }
    });

    // 5. Salin Email ke Clipboard + Toast Notifikasi
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const emailText = document.getElementById('email-text');
    const toast = document.getElementById('toast-notification');
    let toastTimeout;

    const showToast = () => {
        if (!toast) return;
        clearTimeout(toastTimeout);
        toast.classList.remove('hidden');
        toast.classList.add('flex');
        toastTimeout = setTimeout(() => {
            toast.classList.add('hidden');
            toast.classList.remove('flex');
        }, 2500);
    };

    if (copyEmailBtn && emailText) {
        copyEmailBtn.addEventListener('click', async () => {
            const textToCopy = emailText.textContent.trim();
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(textToCopy);
                } else {
                    const tempInput = document.createElement('input');
                    tempInput.value = textToCopy;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                }
                showToast();
            } catch (err) {
                console.error('Gagal menyalin email:', err);
            }
        });
    }
});
