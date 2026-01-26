// 1. Kiểm tra đăng nhập
const username = localStorage.getItem("username");

if (!username) {
  // chưa login → quay về trang login
  window.location.href = "index.html";
}

// 2. Hiển thị tên user
document.getElementById("userName").innerText = username;

// 3. Xử lý logout
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "index.html";
});
