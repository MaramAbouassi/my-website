// كود JavaScript للتحكم في معرض الصور
document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // تغيير الصورة الرئيسية عند النقر على الصورة المصغرة
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const imageUrl = this.getAttribute('data-image');
            mainImage.src = imageUrl;

            // إزالة النشاط من جميع الصور المصغرة
            thumbnails.forEach(t => t.classList.remove('active'));

            // إضافة النشاط للصورة المصغرة المحددة
            this.classList.add('active');
        });
    });

    // دالة إضافة إلى التقويم
    const calendarButtons = document.querySelectorAll('.btn-calendar');
    calendarButtons.forEach(button => {
        button.addEventListener('click', function () {
            // هنا يمكن إضافة كود إضافة إلى التقويم
            alert('تمت إضافة الفعالية إلى تقويمك');
        });
    });

    // دالة مشاركة الفعالية
    const shareButtons = document.querySelectorAll('.btn-share');
    shareButtons.forEach(button => {
        button.addEventListener('click', function () {
            // هنا يمكن إضافة كود المشاركة
            alert('شارك هذه الفعالية مع أصدقائك');
        });
    });

    // دالة حجز التذاكر
    const ticketButtons = document.querySelectorAll('.btn-ticket');
    ticketButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            alert('سيتم توجيهك إلى صفحة الحجز');
            // هنا يمكن إضافة توجيه إلى صفحة الحجز
        });
    });

    // تحسين تجربة المستخدم للفيديوهات
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('click', function () {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
});