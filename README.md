<!DOCTYPE html>
<html lang="tg">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Луғат</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Луғати тоҷикӣ → англисӣ</h1>
    <div id="timer">09:00</div>
    <div id="counter">1 / 50</div>
    <div id="question">Калимаи №1: "об"</div>
    <input type="text" id="answer" placeholder="Навис...">
    <button onclick="checkAnswer()">Санҷ</button>

    <div id="end-buttons" style="display: none;">
      <button onclick="restart()">Аз нав</button>
      <button onclick="showResults()">Натиҷаҳо</button>
    </div>

    <div id="results" style="display: none;">
      <h2>Натиҷаҳо:</h2>
      <ul id="result-list"></ul>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
