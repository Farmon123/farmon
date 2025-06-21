const words = [
  { tg: "китоб", en: "book" },
  { tg: "мактоб", en: "letter" },
  { tg: "устод", en: "teacher" },
  { tg: "хона", en: "house" },
  { tg: "мизи дарсӣ", en: "desk" },
  { tg: "дар", en: "door" },
  { tg: "тиреза", en: "window" },
  { tg: "рушноӣ", en: "light" },
  { tg: "донишҷӯ", en: "student" },
  { tg: "мактаб", en: "school" },
  // 👉 40 луғати иловагӣ
  { tg: "дӯст", en: "friend" },
  { tg: "падар", en: "father" },
  { tg: "модар", en: "mother" },
  { tg: "бародар", en: "brother" },
  { tg: "хоҳар", en: "sister" },
  { tg: "шумо", en: "you" },
  { tg: "мо", en: "we" },
  { tg: "онҳо", en: "they" },
  { tg: "ман", en: "I" },
  { tg: "ӯ", en: "he" },
  { tg: "мебинам", en: "see" },
  { tg: "менависам", en: "write" },
  { tg: "меравам", en: "go" },
  { tg: "меоем", en: "come" },
  { tg: "мефаҳмам", en: "understand" },
  { tg: "мехонем", en: "read" },
  { tg: "мешунавем", en: "hear" },
  { tg: "кардам", en: "did" },
  { tg: "рафтам", en: "went" },
  { tg: "омадам", en: "came" },
  { tg: "гаштам", en: "walked" },
  { tg: "давидам", en: "ran" },
  { tg: "шуд", en: "became" },
  { tg: "гуфт", en: "said" },
  { tg: "дид", en: "saw" },
  { tg: "хонд", en: "read" },
  { tg: "навишт", en: "wrote" },
  { tg: "хурд", en: "ate" },
  { tg: "нӯшид", en: "drank" },
  { tg: "фаҳмид", en: "understood" },
  { tg: "хобид", en: "slept" },
  { tg: "бедор шуд", en: "woke up" },
  { tg: "кор кард", en: "worked" },
  { tg: "омӯхт", en: "learned" },
  { tg: "монд", en: "left" },
  { tg: "дошт", en: "had" },
  { tg: "буд", en: "was" },
  { tg: "дорад", en: "has" },
  { tg: "мекунем", en: "do" }
];

let index = 0;
let correct = 0;

const wordElem = document.getElementById("word");
const inputElem = document.getElementById("answer");
const resultElem = document.getElementById("result");
const counterElem = document.getElementById("word-counter");
const finalElem = document.getElementById("final");
const summaryElem = document.getElementById("summary");

function showWord() {
  if (index < words.length) {
    wordElem.innerText = words[index].tg;
    counterElem.innerText = ${index + 1} / ${words.length};
    inputElem.value = "";
    inputElem.focus();
  } else {
    endQuiz();
  }
}

function checkAnswer() {
  const userAnswer = inputElem.value.trim().toLowerCase();
  const correctAnswer = words[index].en.toLowerCase();

  if (userAnswer === correctAnswer) {
    resultElem.innerText = "✅ Дуруст!";
    correct++;
  } else {
    resultElem.innerText = ❌ Нодуруст! Ҷавоби дуруст: ${correctAnswer};
  }

  index++;
  setTimeout(() => {
    resultElem.innerText = "";
    showWord();
  }, 1000);
}

function endQuiz() {
  wordElem.style.display = "none";
  inputElem.style.display = "none";
  document.querySelector("button").style.display = "none";
  counterElem.style.display = "none";
  finalElem.style.display = "block";
  summaryElem.innerText = Шумо ${correct} аз ${words.length} дуруст ҷавоб додед.;
}

showWord();
