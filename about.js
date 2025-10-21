// كود JavaScript للتحكم في الأكورديون
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', function () {
            // إغلاق جميع العناصر الأخرى
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // تبديل العنصر الحالي
            item.classList.toggle('active');
        });
    });

    // فتح أول عنصر افتراضياً
    if (accordionItems.length > 0) {
        accordionItems[0].classList.add('active');
    }
});