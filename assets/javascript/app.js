$().ready(function () {

    var intervalId;
    var timeLeft = 30;
    var q1 = {
        question: 'What year did the original PlayStation release in North America',
        a: '1993',
        b: '1994',
        c: '1995',
        d: '1996',
        ans: '1994'
    };
    var q2 = {
        question: 'Who is the main character in the Metal Gear series?',
        a: 'Simon Belmont',
        b: 'Solid Snake',
        c: 'James Bond',
        d: 'Big Boss',
        ans: 'Solid Snake'
    };
    var q3 = {
        question: "What is the name of the fruit collected by Crash Bandicoot?",
        a: 'Apple Fruit',
        b: 'Guava Fruit',
        c: 'Mango Fruit',
        d: 'Wumpa Fruit',
        ans: 'Wumpa Fruit'
    };
    var q4 = {
        question: 'What game is Chris Redfield the main character in?',
        a: 'Silent Hill',
        b: 'Resident Evil',
        c: 'Ape Escape',
        d: 'Tomb Raider',
        ans: 'Resident Evil'
    };
    var q5 = {
        question: 'In the very first Uncharted game, Nathan Drake is looking for which treasure?',
        a: 'Ark of the Covenant',
        b: 'Shambala',
        c: 'El Dorado',
        d: 'Holy Grail',
        ans: 'El Dorado'
    };
    var q6 = {
        question: "What is the name of the hero in God of War",
        a: 'Kratos',
        b: 'Mars',
        c: 'Hermes',
        d: 'Ares',
        ans: 'Kratos'
    };
    var q7 = {
        question: 'What provides the characters in Final Fantasy VII magic?',
        a: 'Materia',
        b: 'Meteor',
        c: 'Gods',
        d: 'Guardians',
        ans: 'Materia'
    };
    var q8 = {
        question: "What is the cause of the destruction in Racoon City of Resident Evil",
        a: 'Nuclear Bomb',
        b: 'Earthquake',
        c: 'Vampires',
        d: 'T-Virus',
        ans: 'T-Virus'
    };
    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8];
    var count = 0;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var clickDisabled = false;

    $('#gamebox').hide();
    $('#gameover').hide();

    function timer() {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
            timeLeft--;
            $('.timerbox').html('<h2>You have ' + timeLeft + ' seconds remaining!</h2>')
            if (timeLeft === 0) {
                $('#answerbox').hide();
                $('#isCorrect').html('<h2>You ran out of time</h2>');
                $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
                unanswered++;
                stop();
                timeout();
            }
        }, 1000)
    }

    function questionDOM() {
        $('#question').html('<h2>' + questionArray[count].question + '</h2>');
        $('#a').html('<h2>' + questionArray[count].a + '</h2>');
        $('#b').html('<h2>' + questionArray[count].b + '</h2>');
        $('#c').html('<h2>' + questionArray[count].c + '</h2>');
        $('#d').html('<h2>' + questionArray[count].d + '</h2>');
    }

    function timeout() {
        setTimeout(function () {
            count++;
            nextQuestion();
            clickDisabled = false;
            console.log(clickDisabled);
        }, 3000)
    }
    function stop() {
        clearInterval(intervalId);
    }

    function nextQuestion() {
        if (count === questionArray.length) {
            $('#gamebox').hide();
            $('#gameover').show();
            $('#numCorrect').text(correct);
            $('#numWrong').text(wrong);
            $('#numUnanswered').text(unanswered);
            return;
        }
        timeLeft = 30;
        $('#isCorrect').empty();
        $('#corAns').empty();
        $('#imgbox').empty();
        $('#answerbox').show();
        timer();
        questionDOM();
    }

    function play() {
        timeLeft = 30;
        count = 0;
        correct = 0;
        wrong = 0;
        unanswered = 0;
        $('.start').hide();
        $('#gamebox').show();
        $('#gameover').hide();
        clearInterval(intervalId)
        nextQuestion();
    }

    $('.start').click(play)

    $('#a').click(function () {
        if (clickDisabled) { return; }
        clickDisabled = true;
        stop();
        $('#answerbox').hide();
        if (questionArray[count].a === questionArray[count].ans) {
            $('#isCorrect').html('<h2>You are correct</h2>');
            correct++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            timeout();
        } else {
            $('#isCorrect').html('<h2>You are wrong</h2>')
            wrong++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            timeout();
        }
    })

    $('#b').click(function () {
        if (clickDisabled) { return; }
        clickDisabled = true;
        stop();
        $('#answerbox').hide();
        if (questionArray[count].b === questionArray[count].ans) {
            $('#isCorrect').html('<h2>You are correct</h2>');
            correct++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            timeout();
        } else {
            $('#isCorrect').html('<h2>You are wrong</h2>')
            wrong++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            timeout();
        }
    })

    $('#c').click(function () {
        if (clickDisabled) { return; }
        clickDisabled = true;
        stop();
        $('#answerbox').hide();
        if (questionArray[count].c === questionArray[count].ans) {
            stop();
            $('#isCorrect').html('<h2>You are correct</h2>');
            correct++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            timeout();
        } else {
            $('#isCorrect').html('<h2>You are wrong</h2>')
            wrong++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            timeout();
        }
    })

    $('#d').click(function () {
        if (clickDisabled) { return; }
        clickDisabled = true;
        stop();
        $('#answerbox').hide();
        if (questionArray[count].d === questionArray[count].ans) {
            $('#isCorrect').html('<h2>You are correct</h2>');
            correct++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            timeout();
        } else {
            $('#isCorrect').html('<h2>You are wrong</h2>')
            wrong++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            timeout();
        }
    })

    $('.restart').click(play)





    //make a start button on'click event which starts timer

    //make a timer that counts down from 120seconds using set interval
    //apply the interval to DOM timerbox
    //show a question and possible answers from array of objects.

    // on click of answer reveal if correct wait 3 seconds then next question in array.
    //or if timer hits 0

    // if answer correct++ if answer wrong++ if unanswered ++

    // if correct + wrong + unanswered = array length stop and reveal scorebox,
    //restart button






})