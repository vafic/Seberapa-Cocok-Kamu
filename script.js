function checkCompatibility() {
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;
  
  if (name1 && name2) {
    const score = calculateCompatibility(name1, name2);
    const date = getLuckyDate();
    document.getElementById('result').innerHTML = `
      <p>Kecocokan Cinta: ${score}%</p>
      <p>Hari yang cocok untuk jadian: ${date}</p>
    `;
  } else {
    alert("Masukkan nama lengkap terlebih dahulu!");
  }
}

function calculateCompatibility(name1, name2) {
  const combined = (name1 + name2).toLowerCase();
  let score = 0;
  
  for (let i = 0; i < combined.length; i++) {
    score += combined.charCodeAt(i);
  }
  
  return (score % 101); // hasil antara 0 - 100
}

function getLuckyDate() {
  const today = new Date();
  const offset = Math.floor(Math.random() * 30) + 1; // max 30 hari ke depan
  const luckyDate = new Date(today.getTime() + offset * 24 * 60 * 60 * 1000);
  return luckyDate.toDateString(); // misal: "Sunday, April 27, 2025"
}
