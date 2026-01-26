// 1. Kiểm tra xem người dùng có nhập username chưa
const username = localStorage.getItem("username");

if (!username) {
  // nếu chưa login bước 1 → quay lại index
  window.location.href = "index.html";
}

// 2. Lấy form nhập mật khẩu
const form = document.getElementById("passwordForm");

// 3. Bắt sự kiện submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const password = document.getElementById("password").value;

  // mật khẩu demo
  if (password === "123456") {
    window.location.href = "home.html";
  } else {
    alert("Sai mật khẩu!");
  }
});
