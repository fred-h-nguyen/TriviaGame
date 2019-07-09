$().ready(function () {

    var intervalId;
    var timeLeft = 10;
    var q1 = {
        question: 'a',
        a: 'a',
        b: 'a',
        c: 'a',
        d: 'a',
        ans: 'a'
    };
    var q2 = {
        question: 'b',
        a: 'b',
        b: 'b',
        c: 'b',
        d: 'b',
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
    
    function reset (){
        timeLeft = 10;
        count = 0;
        correct = 0;
        wrong = 0;
        unanswered = 0;
    }





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