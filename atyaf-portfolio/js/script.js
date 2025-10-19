// Translations
const translations = {
    en: {
        logoArabic: 'Atyaf', logoEnglish: 'Atyaf',
        navHome: 'Home', navAbout: 'About', navServices: 'Services', navPortfolio: 'Portfolio', navTeam: 'Team', navContact: 'Contact',
        heroTitle: 'Atyaf', heroSubtitle: 'Concrete Cutting & Core Drilling Experts', heroDesc: 'Precision Services in Dammam, Saudi Arabia',
        stat1: 'Years Experience', stat2: 'Projects Completed', stat3: 'Client Satisfaction',
        ctaContact: 'Contact Us', ctaServices: 'Our Services',
        aboutTitle: 'About Us', aboutText1: 'Atyaf is a leading specialist in concrete cutting and core drilling, serving Dammam with state-of-the-art equipment and expert technicians for residential, commercial, and industrial projects. Committed to safety, efficiency, and quality since 2020.', aboutText2: 'Our team ensures minimal disruption, dust-free operations, and precise results every time.',
        servicesTitle: 'Our Services',
        service1Title: 'Concrete Sawing', service1Desc: 'Wall and floor cutting for precise openings.',
        service2Title: 'Core Drilling', service2Desc: 'Holes for plumbing, electrical, and HVAC installations.',
        service3Title: 'Wire Sawing', service3Desc: 'For large structures and hard-to-reach areas.',
        service4Title: 'Surface Grinding', service4Desc: 'Polishing and preparation for flawless finishes.',
        portfolioTitle: 'Portfolio',
        teamTitle: 'Meet Our Team', teamName: 'Tamer El-Bialy', teamDesc: 'Founder with 15+ years in construction, passionate about innovative drilling solutions in Dammam.',
        contactTitle: 'Contact Us', contactPhoneLabel: 'Phone:', contactEmailLabel: 'Email:', contactLocationLabel: 'Location:',
        footerCopyright: '© 2025 Atyaf. All Rights Reserved.'
    },
    ar: {
        logoArabic: 'اطياف', logoEnglish: 'Atyaf',
        navHome: 'الرئيسية', navAbout: 'عن الشركة', navServices: 'الخدمات', navPortfolio: 'الأعمال', navTeam: 'الفريق', navContact: 'اتصل بنا',
        heroTitle: 'اطياف', heroSubtitle: 'خبراء قص الخرسانة وحفر الكور', heroDesc: 'خدمات دقيقة في الدمام، المملكة العربية السعودية',
        stat1: 'سنوات خبرة', stat2: 'مشاريع مكتملة', stat3: 'رضا العملاء',
        ctaContact: 'اتصل بنا', ctaServices: 'خدماتنا',
        aboutTitle: 'عن الشركة', aboutText1: 'اطياف هي المتخصص الرائد في قص الخرسانة وحفر الكور، تخدم الدمام بأحدث المعدات وفنيين خبراء للمشاريع السكنية والتجارية والصناعية. ملتزمون بالسلامة والكفاءة والجودة منذ 2020.', aboutText2: 'فريقنا يضمن الحد الأدنى من الإزعاج، عمليات خالية من الغبار، ونتائج دقيقة في كل مرة.',
        servicesTitle: 'خدماتنا',
        service1Title: 'قص الخرسانة', service1Desc: 'قص الجدران والأرضيات لفتحات دقيقة.',
        service2Title: 'حفر الكور', service2Desc: 'ثقوب لتركيب السباكة والكهرباء وأنظمة التكيب.',
        service3Title: 'قص بالسلك', service3Desc: 'للهياكل الكبيرة والأماكن الصعبة الوصول.',
        service4Title: 'طحن السطح', service4Desc: 'تلميع وإعداد لتشطيبات مثالية.',
        portfolioTitle: 'الأعمال',
        teamTitle: 'تعرف على فريقنا', teamName: "تامر البيلي", teamDesc: 'المؤسس بأكثر من 15 عامًا في البناء، شغوف بحلول الحفر الابتكارية في الدمام.',
        contactTitle: 'اتصل بنا', contactPhoneLabel: 'الهاتف:', contactEmailLabel: 'البريد الإلكتروني:', contactLocationLabel: 'الموقع:',
        footerCopyright: '© 2025 اطياف. جميع الحقوق محفوظة.'
    }
};

let currentLang = 'en';
let currentTheme = 'dark';

function loadPreferences() {
    currentLang = localStorage.getItem('lang') || 'en';
    currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    document.body.setAttribute('data-theme', currentTheme);
    updateLanguage();
    document.getElementById('langToggle').textContent = currentLang === 'en' ? 'عربي' : 'EN';
    document.getElementById('darkToggle').textContent = currentTheme === 'dark' ? '☀' : '🌙';
}

function updateLanguage() {
    document.querySelectorAll('.translatable').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// Language Toggle
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', currentLang);
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    updateLanguage();
    document.getElementById('langToggle').textContent = currentLang === 'en' ? 'عربي' : 'EN';
});

// Dark Mode Toggle
document.getElementById('darkToggle').addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    document.body.setAttribute('data-theme', currentTheme);
    document.getElementById('darkToggle').textContent = currentTheme === 'dark' ? '☀' : '🌙';
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Lightbox
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

document.querySelector('.close').addEventListener('click', closeLightbox);

// Fade In on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(20px)';
    sec.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(sec);
});

// Init
loadPreferences();