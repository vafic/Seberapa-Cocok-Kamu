let lastYourName = "";
let lastPartnerName = "";

function checkLove() {
  const yourNameInput = document.getElementById("yourName");
  const partnerNameInput = document.getElementById("partnerName");
  const resultDiv = document.getElementById("result");
  const checkButton = document.getElementById("checkButton");

  const yourName = yourNameInput.value.trim();
  const partnerName = partnerNameInput.value.trim();

  if (yourName === "" || partnerName === "") {
    resultDiv.innerHTML = "Nama tidak boleh kosong ya!";
    return;
  }

  if (
    yourName.toLowerCase() === lastYourName.toLowerCase() &&
    partnerName.toLowerCase() === lastPartnerName.toLowerCase()
  ) {
    resultDiv.innerHTML = "Nama sudah dicek, coba pasangan nama lain!";
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

  // Simpan nama terakhir
  lastYourName = yourName;
  lastPartnerName = partnerName;
}
