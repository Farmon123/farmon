<!DOCTYPE html>
<html lang="tg">
<head>
  <meta charset="UTF-8">
  <title>Санҷиши Луғат</title>
  <link rel="stylesheet" href="style.css">
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

  <script src="script.js"></script>
</body>
</html>
