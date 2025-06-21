<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Луғатсупорӣ бо Фармон</title>
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      margin: 50px;
    }
    #word-box {
      font-size: 24px;
      margin: 20px;
    }
    #result {
      margin-top: 20px;
      font-weight: bold;
    }
    input, button {
      font-size: 18px;
      padding: 8px;
    }
  </style>
</head>
<body>
  <h1>Луғатсупорӣ</h1>
  <div id="word-box">...</div>
  <input type="text" id="answer" placeholder="Ҷавоби англисиро навис...">
  <button onclick="checkAnswer()">Санҷидан</button>
  <div id="result"></div>

  <script>
    const words = [
      {tajik: "писандидан", english: "admired"},
      {tajik: "мутавозин", english: "balanced"},
      {tajik: "корҳои мактабӣ", english: "schoolwork"},
      {tajik: "фаъолиятҳои беруназсинфӣ", english: "extracurriculars"},
      {tajik: "ба назар мерасид", english: "seemed"},
      {tajik: "бе заҳмат", english: "effortless"},
      {tajik: "манзараҳо", english: "scenes"},
      {tajik: "роҳатӣ", english: "ease"},
      {tajik: "якҷо анҷом додан", english: "juggled"},
      {tajik: "вазн", english: "weight"},
    ];

    let current = 0;

    function showWord() {
      document.getElementById("word-box").textContent = "Тарҷума: " + words[current].tajik;
      document.getElementById("answer").value = "";
      document.getElementById("result").textContent = "";
    }

    function checkAnswer() {
      const input = document.getElementById("answer").value.trim().toLowerCase();
      const correct = words[current].english.toLowerCase();
      const result = document.getElementById("result");

      if (input === correct) {
        result.textContent = "✅ Дуруст!";
        current++;
        if (current < words.length) {
          setTimeout(showWord, 1000);
        } else {
          result.textContent = "🎉 Тамом шуд! Офарин!";
          document.getElementById("word-box").textContent = "";
        }
      } else {
        result.textContent = "❌ Нодуруст. Аз нав кӯшиш кун!";
      }
    }

    window.onload = showWord;
  </script>
</body>
</html>
