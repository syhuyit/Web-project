// 1. Lấy form từ HTML
const form = document.getElementById("loginForm");

// 2. Gắn sự kiện submit cho form
form.addEventListener("submit", function (event) {
  // 3. Ngăn trình duyệt reload trang
  event.preventDefault();

  // 4. Lấy dữ liệu người dùng nhập
  const username = document.getElementById("username").value;

  // 5. Kiểm tra tài khoản
  if (username === "admin") {
    localStorage.setItem("username", username);
    window.location.href = "password.html";
  } else {
    alert("Tài khoản không tồn tại!");
  }
});
