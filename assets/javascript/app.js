$().ready(function () {

    var intervalId;
    var timeLeft = 30;
    var q1 = {
        question: 'What year did the original PlayStation release in North America',
        a: '1993',
        b: '1994',
        c: '1995',
        d: '1996',
        ans: '1994',
        img: 'https://cdn.shopify.com/s/files/1/1603/1263/products/PS1_OG_1024x1024.jpg?v=1550488233'
    };
    var q2 = {
        question: 'Who is the main character in the Metal Gear series?',
        a: 'Simon Belmont',
        b: 'Solid Snake',
        c: 'James Bond',
        d: 'Big Boss',
        ans: 'Solid Snake',
        img: 'https://media.giphy.com/media/lWu85wKECD7lC/giphy.gif'
    };
    var q3 = {
        question: "What is the name of the fruit collected by Crash Bandicoot?",
        a: 'Apple Fruit',
        b: 'Guava Fruit',
        c: 'Mango Fruit',
        d: 'Wumpa Fruit',
        ans: 'Wumpa Fruit',
        img:'https://66.media.tumblr.com/1792378ab02c7bb6822331b213b9b387/tumblr_opi33gDCVn1uizr2go1_500.gif'
    };
    var q4 = {
        question: 'What game is Chris Redfield the main character in?',
        a: 'Silent Hill',
        b: 'Resident Evil',
        c: 'Ape Escape',
        d: 'Tomb Raider',
        ans: 'Resident Evil',
        img: 'https://www.residentevil.net/share/chro/image/dictionary/chris_bh6.jpg'
    };
    var q5 = {
        question: 'In the very first Uncharted game, Nathan Drake is looking for which treasure?',
        a: 'Ark of the Covenant',
        b: 'Shambala',
        c: 'El Dorado',
        d: 'Holy Grail',
        ans: 'El Dorado',
        img:'http://uncharted-france.fr/wp-content/uploads/2011/06/El-Dorado-Item.png'
    };
    var q6 = {
        question: "What is the name of the hero in God of War",
        a: 'Kratos',
        b: 'Mars',
        c: 'Hermes',
        d: 'Ares',
        ans: 'Kratos',
        img:'https://media.giphy.com/media/buQYegqA2bdNC/giphy.gif'
    };
    var q7 = {
        question: 'What provides the characters in Final Fantasy VII magic?',
        a: 'Materia',
        b: 'Meteor',
        c: 'Gods',
        d: 'Guardians',
        ans: 'Materia',
        img:'https://66.media.tumblr.com/41eb94ab530f492f940b659a03f122bc/tumblr_p0sqoefrBO1w7x7wyo1_500.gif'
    };
    var q8 = {
        question: "What is the cause of the destruction in Racoon City of Resident Evil",
        a: 'Nuclear Bomb',
        b: 'Earthquake',
        c: 'Vampires',
        d: 'T-Virus',
        ans: 'T-Virus',
        img:'data:image/jpeg;base64,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'
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
                $('#imgbox').html('<img src= "'+questionArray[count].img+'">')
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
            $('#imgbox').html('<img src= "'+questionArray[count].img+'">')
            timeout();
        } else {
            $('#isCorrect').html('<h2>You are wrong</h2>')
            wrong++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            $('#imgbox').html('<img src= "'+questionArray[count].img+'">')
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
            $('#imgbox').html('<img src= "'+questionArray[count].img+'">')
            timeout();
        } else {
            $('#isCorrect').html('<h2>You are wrong</h2>')
            wrong++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            $('#imgbox').html('<img src= "'+questionArray[count].img+'">')
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
            $('#imgbox').html('<img src= "'+questionArray[count].img+'">')
            timeout();
        } else {
            $('#isCorrect').html('<h2>You are wrong</h2>')
            wrong++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            $('#imgbox').html('<img src= "'+questionArray[count].img+'">')
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
            $('#imgbox').html('<img src= "'+questionArray[count].img+'">')
            timeout();
        } else {
            $('#isCorrect').html('<h2>You are wrong</h2>')
            wrong++;
            $('#corAns').html('<h2> Correct answer is ' + questionArray[count].ans + '</h2>');
            $('#imgbox').html('<img src= "'+questionArray[count].img+'">')
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