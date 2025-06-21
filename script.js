const words = [
  { tg: "китоб", en: "book" },
  { tg: "мактуб", en: "letter" },
  { tg: "дар", en: "door" },
  { tg: "миз", en: "table" },
  { tg: "курси", en: "chair" },
  { tg: "қалам", en: "pen" },
  { tg: "дафтар", en: "notebook" },
  { tg: "мактаб", en: "school" },
  { tg: "устод", en: "teacher" },
  { tg: "хонанда", en: "student" },
  // ... боз 40 адад — илова мекунем агар хоҳӣ
];

let current = 0;
let correct = 0;
let results = [];

function showWord() {
  if (current < words.length) {
    document.getElementById("word").textContent = words[current].tg;
    document.getElementById("counter").textContent = (current + 1) + " / " + words.length;
    document.getElementById("answerInput").value = "";
    document.getElementById("feedback").textContent = "";
  } else {
    endQuiz();
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
  const correctAnswer = words[current].en.toLowerCase();

  if (userAnswer === correctAnswer) {
    correct++;
    document.getElementById("feedback").textContent = "✅ Дуруст!";
  } else {
    document.getElementById("feedback").textContent = "❌ Нодуруст! Дурусташ: " + correctAnswer;
  }

  results.push({
    word: words[current].tg,
    correct: correctAnswer,
    yourAnswer: userAnswer
  });

  current++;
  setTimeout(showWord, 1000);
}

function endQuiz() {
  document.getElementById("resultSection").style.display = "block";
  document.getElementById("word").textContent = "Анҷом ёфт!";
  document.getElementById("counter").textContent = correct + " аз " + words.length;
  document.getElementById("answerInput").style.display = "none";
}

function restart() {
  current = 0;
  correct = 0;
  results = [];
  document.getElementById("resultSection").style.display = "none";
  document.getElementById("answerInput").style.display = "inline";
  showWord();
}

function showResults() {
  const list = results.map(item =>
    <p><strong>${item.word}</strong> — Ту гуфтӣ: ${item.yourAnswer}, дуруст: ${item.correct}</p>
  ).join("");
  document.getElementById("resultsList").innerHTML = list;
}

showWord();
