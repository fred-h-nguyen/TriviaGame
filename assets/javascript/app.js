$().ready(function () {

    var intervalID;
    var timeLeft = 120;
    var q1 = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    };
    var q2 = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    };
    var q3 = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    };
    var q4 = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    };
    var q5 = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    };
    var q6 = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    };
    var q7 = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    };
    var q8 = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    };
    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8];
    var count = 0;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;

    function questionDOM() {
        $('#question').html('<h2>' + questionArray[count].question + '</h2>')
    }
    function gameStart() {
        count = 0;
        correct = 0;
        wrong = 0;
        unanswered = 0;
        timeLeft=120;
        clearInterval(intervalID);
    }

    $('#gamebox').hide();
    $('#gameover').hide();

    $('.start').click(function () {
        $('#gamebox').show();
        $('.start').hide();
        gameStart();
    })




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