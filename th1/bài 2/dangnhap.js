function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Kiểm tra nếu tài khoản và mật khẩu là admin
    if (username === "admin" && password === "admin") {
      // Chuyển hướng sang trang quản trị
      window.location.href = "trangquantrisv.html";
      return false; // Ngăn form submit
    } else {
      // Hiển thị thông báo lỗi
      document.getElementById("error-message").innerHTML = "Tài khoản hoặc mật khẩu không chính xác";
      return false; // Ngăn form submit
    }
}