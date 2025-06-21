body {
    background-color: #add8e6; /* Кабуди равшан */
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background: white;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 450px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    text-align: center;
}

#status, #timer {
    font-weight: bold;
    margin-bottom: 15px;
    font-size: 18px;
}

#question {
    font-size: 22px;
    margin-bottom: 15px;
}

#answer {
    width: 80%;
    padding: 8px;
    font-size: 18px;
    margin-bottom: 15px;
}

#submitBtn, #restartBtn {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #0077cc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#submitBtn:hover, #restartBtn:hover {
    background-color: #005fa3;
}

.hidden {
    display: none;
}

#result {
    margin-top: 15px;
    font-weight: bold;
}
