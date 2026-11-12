// 1. Menu Hamburger trên Mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// 2. Chuyển đổi Dark / Light Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});

// 3. Smooth Scroll (Cuộn mượt khi bấm vào menu)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        navMenu.classList.remove('open');
    });
});

// 4. Lọc / Tìm kiếm dự án theo từ khóa hoặc tag
const searchInput = document.getElementById('project-search');
const projectCards = document.querySelectorAll('.project-card');
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    projectCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const tags = card.getAttribute('data-tags').toLowerCase();
        if (text.includes(keyword) || tags.includes(keyword)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 5. Đếm ký tự ô tin nhắn trong Form
const messageInput = document.getElementById('message');
const charCount = document.getElementById('char-count');
messageInput.addEventListener('input', () => {
    charCount.textContent = `${messageInput.value.length}/200`;
});

// 6. Validate Form (Kiểm tra nhiều điều kiện)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = messageInput.value.trim();

    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';
    document.getElementById('form-success').textContent = '';

    if (name.length < 3) {
        document.getElementById('name-error').textContent = 'Họ tên phải có ít nhất 3 ký tự.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Vui lòng nhập đúng định dạng email.';
        isValid = false;
    }

    if (message.length < 10) {
        document.getElementById('message-error').textContent = 'Tin nhắn phải có ít nhất 10 ký tự.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('form-success').textContent = 'Gửi tin nhắn thành công! Cảm ơn bạn đã liên hệ.';
        contactForm.reset();
        charCount.textContent = '0/200';
    }
});

// 7. Hiệu ứng xuất hiện khi cuộn (Scroll Reveal)
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 8. Hiển thị năm hiện tại ở Footer
document.getElementById('current-year').textContent = new Date().getFullYear();