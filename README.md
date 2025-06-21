<!DOCTYPE html>
<html lang="tg">
<head>
  <meta charset="UTF-8">
  <title>Санҷиши Луғат</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #add8e6;
      text-align: center;
      padding: 40px;
    }
    input {
      padding: 10px;
      font-size: 16px;
    }
    button {
      padding: 10px 20px;
      margin-top: 10px;
      font-size: 16px;
      cursor: pointer;
    }
    #timer {
      font-size: 24px;
      margin-bottom: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Санҷиши Луғат</h1>
  <div id="timer">09:00</div>
  <div id="quiz-container">
    <p id="word-counter">1 / 50</p>
    <p id="question">Луғат...</p>
    <input type="text" id="answer" placeholder="Ҷавоби англисӣ">
    <button onclick="submitAnswer()">Ҷавоб</button>
  </div>

  <div id="result-buttons" style="display: none;">
    <button onclick="location.reload()">Аз нав супоридан</button>
    <button onclick="showResults()">Натиҷаро дидан</button>
  </div>

  <div id="results" style="display: none;"></div>

  <script>
    const words = [
      { tj: "китоб", en: "book" },
      { tj: "мактаб", en: "school" },
      { tj: "устод", en: "teacher" },
      { tj: "хонаи ман", en: "my house" },
      { tj: "дӯст", en: "friend" },
      // ... метавонӣ то 50 пур кунӣ
    ];

    let current = 0;
    let correct = 0;
    let userAnswers = [];

    function startQuiz() {
      showWord();
      startTimer(9 * 60);
    }

    function showWord() {
      if (current < words.length) {
        document.getElementById("question").innerText = Тарҷума кунед: ${words[current].tj};
        document.getElementById("word-counter").innerText = ${current + 1} / ${words.length};
        document.getElementById("answer").value = "";
        document.getElementById("answer").focus();
      } else {
        endQuiz();
      }
    }

    function submitAnswer() {
      const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
      const correctAnswer = words[current].en.toLowerCase();
      userAnswers.push({ word: words[current].tj, your: userAnswer, correct: correctAnswer });

      if (userAnswer === correctAnswer) {
        correct++;
      }

      current++;
      showWord();
    }

    function endQuiz() {
      document.getElementById("quiz-container").style.display = "none";
      document.getElementById("result-buttons").style.display = "block";
    }

    function showResults() {
      document.getElementById("result-buttons").style.display = "none";
      const results = document.getElementById("results");
      results.style.display = "block";
      results.innerHTML = <h2>Натиҷаҳо: ${correct} / ${words.length}</h2>;
      userAnswers.forEach((item, index) => {
        results.innerHTML += <p><strong>${index + 1}. ${item.word}</strong> — Ту гуфтӣ: <span style="color:${item.your === item.correct ? 'green' : 'red'}">${item.your}</span> | Дуруст: ${item.correct}</p>;
      });
    }

    function startTimer(duration) {
      let timer = duration;
      const display = document.getElementById("timer");
      const interval = setInterval(() => {
        const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
        const seconds = String(timer % 60).padStart(2, '0');
        display.textContent = ${minutes}:${seconds};
        if (--timer < 0) {
          clearInterval(interval);
          endQuiz();
        }
      }, 1000);
    }

    window.onload = startQuiz;
  </script>
</body>
</html>
