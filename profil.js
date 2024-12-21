


// Dummy data untuk validasi
const validCredentials = {
  email: "malfathiratir@gmail.com",
  password: "123456"

};


// Ambil elemen form
const loginForm = document.getElementById('loginform');

// Tambahkan event listener untuk menangani form submit
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah refresh halaman

  // Ambil nilai input email dan password
  const emailInput = document.getElementById('emailinput').value;
  const passwordInput = document.getElementById('passwordinput').value;

  // Cek apakah email dan password cocok
  if (emailInput === validCredentials.email && passwordInput === validCredentials.password) {
      alert("Login berhasil!");
      // Redirect ke halaman lain (opsional)
      window.location.href = "file:///C:/Users/Lenovo/Desktop/codingan%20pipas/dalam/pipas.html";
  } else {
      alert("Email atau password salah!");
  }
});
