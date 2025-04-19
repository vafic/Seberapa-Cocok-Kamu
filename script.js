let lastYourName = "";
let lastPartnerName = "";

document.getElementById("checkButton").addEventListener("click", checkLove);

function checkLove() {
  const yourName = document.getElementById("yourName").value.trim();
  const partnerName = document.getElementById("partnerName").value.trim();
  const resultDiv = document.getElementById("result");
  const checkButton = document.getElementById("checkButton");

  // Cek apakah nama pasangan berbeda dari yang sebelumnya
  if (yourName === lastYourName && partnerName === lastPartnerName) {
    resultDiv.innerHTML = "<span class='error'>Nama pasangan belum berubah! Silakan masukkan nama yang berbeda.</span>";
    return;
  }

  // Menyimpan nama yang terakhir dimasukkan
  lastYourName = yourName;
  lastPartnerName = partnerName;

  // Menonaktifkan tombol setelah diklik
  checkButton.disabled = true;
  checkButton.innerHTML = "Sedang Menghitung...";

  // Validasi input
  if (yourName === "" || partnerName === "") {
    resultDiv.innerHTML = "<span class='error'>Nama tidak boleh kosong ya!</span>";
    checkButton.disabled = false;  // Mengaktifkan kembali tombol jika ada input kosong
    checkButton.innerHTML = "Cek Kecocokan";
    return;
  }

  // Menghitung kecocokan secara acak
  const loveScore = Math.floor(Math.random() * 51) + 50;
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + Math.floor(Math.random() * 30 + 1));
  
  // Format tanggal
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let formattedDate;
  try {
    formattedDate = futureDate.toLocaleDateString('id-ID', options);
  } catch (e) {
    formattedDate = futureDate.toLocaleDateString('en-US', options);  // Fallback ke format English
  }

  // Pesan kecocokan
  let message = "Luar biasa!";
  if (loveScore < 60) message = "Mungkin masih perlu waktu.";
  else if (loveScore < 80) message = "Ada potensi besar!";
  
  // Menampilkan hasil
  resultDiv.innerHTML = `
    💖 Kecocokan ${yourName} & ${partnerName}: <strong>${loveScore}%</strong><br>
    📅 Tanggal jadian terbaik: <strong>${formattedDate}</strong><br>
    <em>${message}</em>
  `;

  // Mengaktifkan kembali tombol setelah hasil ditampilkan
  setTimeout(() => {
    checkButton.disabled = false;
    checkButton.innerHTML = "Cek Kecocokan";
  }, 2000);  // Mengaktifkan kembali tombol setelah 2 detik
}
