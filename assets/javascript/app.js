$().ready(function () {

    var intervalId;
    var timeLeft = 30;
    var q1 = {
        question: 'Who played Wonder Woman?',
        a: 'Megan Fox',
        b: 'Elena Anaya',
        c: 'Gal Gadot',
        d: 'Angelina Jolie',
        ans: 'Gal Gadot'
    };
    var q2 = {
        question: 'What is the name of the street Harry Potter lived on?',
        a: 'Muggle Alley',
        b: 'Privet Drive',
        c: 'Private Drive',
        d: 'Diagon Alley',
        ans: 'Privet Drive'
    };
    var q3 = {
        question: "What is Nemo's Dad named?",
        a: 'Marlin',
        b: 'Marvin',
        c: 'Rick',
        d: 'Merlin',
        ans: 'Marlin'
    };
    var q4 = {
        question: 'What game does Bond play in Casino Royale?',
        a: 'Craps',
        b: 'Roulette',
        c: 'Blackjack',
        d: 'Poker',
        ans: 'Poker'
    };
    var q5 = {
        question: 'What animation company made Shrek?',
        a: 'Disney',
        b: 'Pixar',
        c: 'Studio Ghibli',
        d: 'Dreamworks',
        ans: 'Dreamworks'
    };
    var q6 = {
        question: "What is the name of Jack Sparrow's Ship?",
        a: 'The Black Flag',
        b: 'The Black Pearl',
        c: 'The Hispaniola',
        d: 'The Interceptor',
        ans: 'The Black Pearl'
    };
    var q7 = {
        question: 'What precious resource do the humans want to get in Avatar?',
        a: 'Unobtanium',
        b: 'Adamantium',
        c: 'Diamond',
        d: 'Dark Matter',
        ans: 'Unobtanium'
    };
    var q8 = {
        question: "Why is Lightning McQueen's number 95?",
        a: 'It was the year his car was manufactured.',
        b: 'It was the year Cars was released.',
        c: 'It was the year Toy Story was released.',
        d: 'It is the fastest speed to take a turn during a drift.',
        ans: 'It was the year Toy Story was released.'
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