if (userAnswer === correctAnswer) {
        correctCount++;
      }
      nextQuestion();
    });

    restartBtn.addEventListener('click', () => {
      currentIndex = 0;
      correctCount = 0;
      timeLeft = 9 * 60;
      submitBtn.disabled = false;
      answerInput.disabled = false;
      restartBtn.style.display = 'none';
      showResultsBtn.style.display = 'none';
      resultEl.textContent = '';
      updateProgress();
      updateQuestion();
      displayTime();
      startTimer();
    });

    showResultsBtn.addEventListener('click', () => {
      resultEl.textContent = Ҷавобҳои дуруст: ${correctCount} аз ${totalQuestions};
    });

    function startTimer() {
      clearInterval(window.quizTimer);
      window.quizTimer = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(window.quizTimer);
          endQuiz();
        } else {
          timeLeft--;
          displayTime();
        }
      }, 1000);
    }

    // Аввалин бор оғоз мекунем
    updateProgress();
    updateQuestion();
    displayTime();
    startTimer();

    // Барои ворид кардани Enter дар input, барои submit кардан
    answerInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        submitBtn.click();
      }
    });
  </script>
</body>
</html>
