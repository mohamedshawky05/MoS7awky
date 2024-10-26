// وظيفة التسجيل
function register() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // تحقق من تطابق كلمة المرور
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // تخزين البريد الإلكتروني وكلمة المرور في localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration successful!");
    window.location.href = "signin.html";
}

// وظيفة تسجيل الدخول
function login() {
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // استرداد البيانات من localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // تحقق من صحة البيانات
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        alert("Login successful!");
        window.location.href = "index.html"; // الصفحة الرئيسية
    } else {
        document.getElementById("error").innerText = "هناك خطأ في البريد الإلكتروني أو كلمة المرور.";
    }
}









// تحميل البيانات وعرضها في الصفحة
function loadProfile() {
    const firstName = localStorage.getItem("firstName") || "Not set";
    const lastName = localStorage.getItem("lastName") || "Not set";
    const email = localStorage.getItem("email") || "Not set";

    document.getElementById("displayFirstName").innerText = firstName;
    document.getElementById("displayLastName").innerText = lastName;
    document.getElementById("displayEmail").innerText = email;

    document.getElementById("updateFirstName").value = firstName;
    document.getElementById("updateLastName").value = lastName;
    document.getElementById("updateEmail").value = email;
}

// تحديث البيانات في localStorage
function updateProfile() {
    const newFirstName = document.getElementById("updateFirstName").value;
    const newLastName = document.getElementById("updateLastName").value;
    const newEmail = document.getElementById("updateEmail").value;
    const newPassword = document.getElementById("updatePassword").value;

    // تحديث البيانات في localStorage
    localStorage.setItem("firstName", newFirstName);
    localStorage.setItem("lastName", newLastName);
    localStorage.setItem("email", newEmail);
    
    // تحديث كلمة المرور فقط إذا تم إدخال قيمة جديدة
    if (newPassword) {
        localStorage.setItem("password", newPassword);
    }

    alert("Profile updated successfully!");

    // إعادة تحميل الصفحة لتحديث البيانات المعروضة
    loadProfile();
}

// استدعاء دالة loadProfile عند تحميل الصفحة
window.onload = loadProfile;
 function register() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // تخزين البيانات في localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration successful!");
    window.location.href = "signin.html";
}

// إضافة مستمع للنقر على العناصر التي تحتوي على الكلاس "fa-heart" فقط
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("fa-heart")) {
        event.target.style.color = "red";
    }
});

document.querySelectorAll('.fa-star').forEach(element => {
    element.addEventListener('click', function() {
        // إزالة اللون الأصفر من كل العناصر
        document.querySelectorAll('.fa-star').forEach(el => el.classList.remove('yellow'));
        // إضافة اللون الأصفر للعناصر التي تم الضغط عليها فقط
        this.classList.add('yellow');
    });
});




// cart

document.addEventListener('DOMContentLoaded', () => {
    updateTotal();
  
    // تحديث السعر الإجمالي عند تغيير الكمية
    document.querySelectorAll('.quantity').forEach(input => {
      input.addEventListener('change', updateTotal);
    });
  
    // إزالة منتج من العربة
    document.querySelectorAll('.remove-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        event.target.closest('.cart-item').remove();
        updateTotal();
      });
    });
  });
  
  // دالة لحساب وتحديث السعر الإجمالي
  function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
      const quantity = item.querySelector('.quantity').value;
      const price = parseFloat(item.querySelector('.price').textContent);
      total += quantity * price;
    });
    document.getElementById('total-price').textContent = total + ' $';
  }
  