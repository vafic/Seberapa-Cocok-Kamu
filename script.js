document.getElementById("checkButton").addEventListener("click", checkLove);

function checkLove() {
  const yourName = document.getElementById("yourName").value.trim();
  const partnerName = document.getElementById("partnerName").value.trim();
  const resultDiv = document.getElementById("result");

  if (yourName === "" || partnerName === "") {
    resultDiv.innerHTML = "<span class='error'>Nama tidak boleh kosong ya!</span>";
    return;
  }

  const loveScore = Math.floor(Math.random() * 51) + 50;
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + Math.floor(Math.random() * 30 + 1));
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  let formattedDate;
  try {
    formattedDate = futureDate.toLocaleDateString('id-ID', options);
  } catch (e) {
    formattedDate = futureDate.toLocaleDateString('en-US', options);  // Fallback to English if locale fails
  }

  let message = "Luar biasa!";
  if (loveScore < 60) message = "Mungkin masih perlu waktu.";
  else if (loveScore < 80) message = "Ada potensi besar!";
  
  resultDiv.innerHTML = `
    💖 Kecocokan ${yourName} & ${partnerName}: <strong>${loveScore}%</strong><br>
    📅 Tanggal jadian terbaik: <strong>${formattedDate}</strong><br>
    <em>${message}</em>
  `;
}
