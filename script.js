let lastInput = "";

document.getElementById("checkButton").addEventListener("click", function () {
  const yourName = document.getElementById("yourName").value.trim();
  const partnerName = document.getElementById("partnerName").value.trim();
  const resultDiv = document.getElementById("result");
  const button = document.getElementById("checkButton");

  // Validasi input kosong
  if (yourName === "" || partnerName === "") {
    resultDiv.innerHTML = "<span class='error'>Nama tidak boleh kosong ya!</span>";
    return;
  }

  // Gabungkan nama sebagai key untuk membandingkan
  const currentInput = yourName.toLowerCase() + "|" + partnerName.toLowerCase();

  // Cek apakah input sama dengan sebelumnya
  if (currentInput === lastInput) {
    resultDiv.innerHTML = "<span class='error'>Nama belum berubah. Masukkan nama yang berbeda.</span>";
    return;
  }

  // Update lastInput
  lastInput = currentInput;

  // Proses kecocokan
  const loveScore = Math.floor(Math.random() * 51) + 50;
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + Math.floor(Math.random() * 30 + 1));
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let message = "💖 Kecocokan " + yourName + " & " + partnerName + ": <strong>" + loveScore + "%</strong><br>" +
                "📅 Tanggal jadian terbaik: <strong>" + futureDate.toLocaleDateString('id-ID', options) + "</strong>";

  resultDiv.innerHTML = message;
});
