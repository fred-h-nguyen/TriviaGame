$().ready(function () {

    var intervalId;
    var timeLeft = 120;
    var q1 = {
        question: 'a',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        ans: 'a'
    };
    var q2 = {
        question: 'b',
        a: 'b',
        b: 'c',
        c: 'd',
        d: 'q',
        ans: 'b'
    };
    var q3 = {
        question: 'c',
        a: 'c',
        b: 'c',
        c: 'c',
        d: 'c',
        ans: 'c'
    };
    var q4 = {
        question: 'd',
        a: 'd',
        b: 'd',
        c: 'd',
        d: 'd',
        ans: 'd'
    };
    var q5 = {
        question: 'e',
        a: 'e',
        b: 'e',
        c: 'e',
        d: 'e',
        ans: 'e'
    };
    var q6 = {
        question: 'f',
        a: 'f',
        b: 'f',
        c: 'f',
        d: 'f',
        ans: 'f'
    };
    var q7 = {
        question: 'g',
        a: 'g',
        b: 'g',
        c: 'g',
        d: 'g',
        ans: 'g'
    };
    var q8 = {
        question: 'h',
        a: 'h',
        b: 'h',
        c: 'h',
        d: 'h',
        ans: 'h'
    };
    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8];
    var count = 0;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;

    $('#gamebox').hide();
    $('#gameover').hide();

    function timer() {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
            timeLeft--;
            $('.timerbox').html('<h2>You have ' + timeLeft + ' seconds remaining!</h2>')
            if (timeLeft === 0) {
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
        timeLeft = 5;
        $('#isCorrect').empty();
        $('#corAns').empty();
        $('#imgbox').empty();
        timer();
        questionDOM();
    }

    function play() {
        timeLeft = 120;
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
        stop();
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
        stop();
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
        stop();
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
        stop();
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