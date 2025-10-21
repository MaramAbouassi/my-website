// كود JavaScript لتحسين تحميل الصور
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة جميع الصور
    const images = document.querySelectorAll('img');
    
    // إضافة مستمع لتحميل الصور
    images.forEach(img => {
        // إذا كانت الصورة محملة بالفعل
        if (img.complete) {
            img.classList.add('loaded');
            const placeholder = img.previousElementSibling;
            if (placeholder && placeholder.classList.contains('image-placeholder')) {
                placeholder.style.display = 'none';
            }
        } else {
            // إضافة مستمع لتحميل الصور
            img.addEventListener('load', function() {
                this.classList.add('loaded');
                const placeholder = this.previousElementSibling;
                if (placeholder && placeholder.classList.contains('image-placeholder')) {
                    placeholder.style.display = 'none';
                }
            });
            
            // التعامل مع أخطاء تحميل الصور
            img.addEventListener('error', function() {
                console.error('فشل تحميل الصورة:', this.src);
                const placeholder = this.previousElementSibling;
                if (placeholder && placeholder.classList.contains('image-placeholder')) {
                    placeholder.style.display = 'none';
                }
            });
        }
    });

    // تأثيرات التمرير السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // عدادات الإحصائيات
    const statNumbers = document.querySelectorAll('.hero-stat-number');
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const duration = 2000;
        const increment = finalValue / (duration / 16);
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = finalValue;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentValue);
            }
        }, 16);
    });

    // تأثيرات الظهور عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // تطبيق تأثيرات الظهور على العناصر
    const animatedElements = document.querySelectorAll('.event-card, .feature-card, .category-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
