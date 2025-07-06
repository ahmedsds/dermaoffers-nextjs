// auth.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // بيانات مستخدم افتراضية
    const validUser = {
        username: 'admin',
        password: '123456'
    };

    if (username === validUser.username && password === validUser.password) {
        // حفظ حالة تسجيل الدخول
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'dashboard.html'; // الانتقال إلى لوحة التحكم
    } else {
        document.getElementById('error-message').textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
    }
});