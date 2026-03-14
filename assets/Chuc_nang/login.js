document.addEventListener("DOMContentLoaded", function () {
  // Nếu đã login rồi → chuyển sang home
  const existingUser = localStorage.getItem("username");
  if (existingUser) {
    window.location.href = "/pages/home.html";
    return;
  }

  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Tài khoản giả lập
    const correctUser = "admin";
    const correctPass = "123456";

    if (username === correctUser && password === correctPass) {
      localStorage.setItem("username", username);
      window.location.href = "index.html";
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  });
});
