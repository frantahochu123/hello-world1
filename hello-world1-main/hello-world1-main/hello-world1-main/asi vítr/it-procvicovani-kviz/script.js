const questions = [
    {
        question: "kolik dní má týden",
        optionA: "5",
        optionB: "14",
        optionC: "5",
        optionD: "7",
        correctOption: "optionD"
    },

    {
        question: "kolik hráčů může na fotbalové hřistě ?",
        optionA: "10 ",
        optionB: "11 ",
        optionC: "9 ",
        optionD: "12 ",
        correctOption: "optionB"
    },

    {
        question: "kdo je prezidentem v roce 2024?",
        optionA: "Petr Fiala",
        optionB: "Václav Havel",
        optionC: "Andrej Babiš",
        optionD: "Petr Pavel",
        correctOption: "optionD"
    },

    {
        question: "Jakej měsic má 28 dní ______ ?",
        optionA: "Leden",
        optionB: "Únor",
        optionC: "Všechny",
        optionD: "Červen",
        correctOption: "optionC"
    },

    {
        question: "kolik má den hodin ?",
        optionA: "69 ",
        optionB: "38 ",
        optionC: "48 ",
        optionD: "24 ",
        correctOption: "optionD"
    },

    {
        question: "jaká je nejdelší řeka na světě?",
        optionA: "Řeka Nil",
        optionB: "Vltava",
        optionC: "Morava",
        optionD: "Labe",
        correctOption: "optionA"
    },

    {
        question: "_____ jaký kontinent je nejteplejší ?",
        optionA: "Oceánie",
        optionB: "Antarktika",
        optionC: "Afrika",
        optionD: "Severní Amerika",
        correctOption: "optionC"
    },

    {
        question: "jaká země je největší na zemi?",
        optionA: "Rusko",
        optionB: "Kanada",
        optionC: "Afrika",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: "jaký z těchto čísel je liché ?",
        optionA: "10",
        optionB: "12",
        optionC: "8",
        optionD: "11",
        correctOption: "optionD"
    },

    {
        question:"Jaká Je Nejlepší Hra",
        optionA: "OW2",
        optionB: "CS2",
        optionC: "COD Warzone",
        optionD: "TF2",
        correctOption: "optionD"
    },

    {
        question: "kde je největší budova světa ?",
        optionA: "Afrika",
        optionB: "kalifornie",
        optionC: "Dubai",
        optionD: "Česko",
        correctOption: "optionC"
    },

    {
        question: "Z čeho se vyrábý sklo ?",
        optionA: "Písek",
        optionB: "Štěrk",
        optionC: "Beton",
        optionD: "Kámen",
        correctOption: "optionA"
    },


    {
        question: "kolik má pes permanentních zubů ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "kdo snědl zakázané jablko ?",
        optionA: "Džabahád",
        optionB: "Adam",
        optionC: "Boba Fett",
        optionD: "Eva",
        correctOption: "optionD"
    },

    {
        question: "v jakém městě se narodil Petr Pavel ?",
        optionA: "Plany",
        optionB: "Praha",
        optionC: "Brno",
        optionD: "Zlín",
        correctOption: "optionA"
    },

    {
        question: "kolik má států Nigérie ?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "____ je hlavní město Nigérie ?",
        optionA: "Abuja",
        optionB: "Lagos",
        optionC: "Calabar",
        optionD: "Kano",
        correctOption: "optionA"
    },

    {
        question: "jaké má hlavní město Rusko ?",
        optionA: "Kiev",
        optionB: "Praha",
        optionC: "Moskva",
        optionD: "Berlín",
        correctOption: "optionC"
    },

    {
        question: "jake je hlavní město Německa ?",
        optionA: "Moskva",
        optionB: "Oslo",
        optionC: "Rio De Janiero",
        optionD: "Berlín",
        correctOption: "optionD"
    },

    {
        question: "kolik má stran trojuhelník ?",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        optionD: "2",
        correctOption: "optionA"
    },

    {
        question: "kolik je planet v naší sluneční soustavě ?",
        optionA: "11",
        optionB: "7",
        optionC: "9",
        optionD: "8",
        correctOption: "optionD"
    },

    {
        question: "jaká planeta je nejvíce horká ?",
        optionA: "Jupiter",
        optionB: "Merkur",
        optionC: "Země",
        optionD: "Venuše",
        correctOption: "optionB"
    },

    {
        question: "kde je nejmenší kost v těle ?",
        optionA: "Na noze",
        optionB: "V uchu",
        optionC: "Na prstech",
        optionD: "Na nosech",
        correctOption: "optionB"
    },

    {
        question: "kolik má chobotnice chapadel ?",
        optionA: "1",
        optionB: "2",
        optionC: "8",
        optionD: "4",
        correctOption: "optionC"
    },

    {
        question: "kolik má dospělí člověk zubů ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] 

function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    if (playerScore <= 3) {
        remark = "Špatné odpovědi, procvičuj ještě."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Průměrný známky, to umíš lépe snad ne?"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Nádhera, jen tak dál"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}