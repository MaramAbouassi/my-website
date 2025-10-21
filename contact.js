$(document).ready(function () {
    // إخفاء رسائل الخطأ أولاً
    $('.invalid-feedback').hide();
    
    // التحقق من صحة النموذج عند الإرسال
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        let isValid = true;
        const name = $('#name');
        const email = $('#email');
        const subject = $('#subject');
        const message = $('#message');

        // إخفاء جميع رسائل الخطأ أولاً
        $('.invalid-feedback').hide();
        $('input, select, textarea').removeClass('is-invalid');

        // التحقق من الاسم
        if (name.val().trim() === '') {
            name.addClass('is-invalid');
            $('#nameError').show();
            isValid = false;
        }

        // التحقق من البريد الإلكتروني
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.val())) {
            email.addClass('is-invalid');
            $('#emailError').show();
            isValid = false;
        }

        // التحقق من الموضوع
        if (!subject.val()) {
            subject.addClass('is-invalid');
            $('#subjectError').show();
            isValid = false;
        }

        // التحقق من الرسالة
        if (message.val().trim() === '') {
            message.addClass('is-invalid');
            $('#messageError').show();
            isValid = false;
        }

        // إذا كان النموذج صالحاً
        if (isValid) {
            // هنا يمكن إضافة كود إرسال النموذج إلى الخادم

            // عرض رسالة النجاح
            $('#alertContainer').html(`
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <i class="fas fa-check-circle me-2"></i>
                    <strong>تم إرسال رسالتك بنجاح!</strong> سنقوم بالرد عليك في أقرب وقت ممكن.
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `);

            // إعادة تعيين النموذج
            $('#contactForm')[0].reset();

            // إخفاء رسالة النجاح بعد 5 ثوانٍ
            setTimeout(function () {
                $('.alert').alert('close');
            }, 5000);
        } else {
            // عرض رسالة الخطأ
            $('#alertContainer').html(`
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <i class="fas fa-exclamation-circle me-2"></i>
                    <strong>حدث خطأ!</strong> يرجى ملء جميع الحقول بشكل صحيح.
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `);
        }
    });

    // إزالة رسائل الخطأ عند البدء في الكتابة
    $('input, textarea, select').on('input', function () {
        $(this).removeClass('is-invalid');
        $(this).next('.invalid-feedback').hide();
    });
});