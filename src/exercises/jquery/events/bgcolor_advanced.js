// Change background color (advanced) [jQuery]
const div = $('div:first button:nth-child(3)');
$("<button type='button' class='tertiary'>darkgreen</button>").insertAfter(div);
$("<button type='button' class='tertiary'>red</button>").insertAfter(div);
const buttons = $('div button');

buttons.each(function (index, button) {
    $(button).click(function () {
        const kleur = $(button).html();
        console.log();
        $('div.border-gray').css('backgroundColor', kleur);
        if (kleur === 'reset') {
            $('div.border-gray').css('backgroundColor', '');
        }
    });
});
