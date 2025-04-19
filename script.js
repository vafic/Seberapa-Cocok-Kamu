function checkLove() {
  const yourName = document.getElementById("yourName").value.trim();
  const partnerName = document.getElementById("partnerName").value.trim();
  const resultDiv = document.getElementById("result");

  if (yourName === "" || partnerName === "") {
    resultDiv.innerHTML = "Nama tidak boleh kosong ya!";
    return;
  }

  const loveScore = Math.floor(Math.random() * 51) + 50;
  const today = new Date();
  const futureDate = new Date(today.setDate(today.getDate() + Math.floor(Math.random() * 30 + 1)));
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  resultDiv.innerHTML = `
    💖 Kecocokan ${yourName} & ${partnerName}: <strong>${loveScore}%</strong><br>
    📅 Tanggal jadian terbaik: <strong>${futureDate.toLocaleDateString('id-ID', options)}</strong>
  `;
}
