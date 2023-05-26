// Basic DOM manipulation [jQuery]
$('ol li:first-child').on('click', function (e) {
    $('h1').html($('li:first-child').html());
});

const second = $('ol li:nth-child(2)');
second.mouseenter(function () {
    $('h1').addClass('orange');
});

second.mouseleave(function () {
    $('h1').removeClass('orange');
});

const third = $('ol li:nth-child(3)');

third.dblclick(function () {
    $('h1').addClass('green');
});

$('button.primary').click(function () {
    $('h1').css('transform', 'rotate(180deg)');
});

$('button.primary').dblclick(function () {
    $('h1').css('transform', 'rotate(0deg)');
});
