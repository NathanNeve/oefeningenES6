// Accordion (basic) [jQuery]
const hoofding = $('h3');

hoofding.each(function (index, hoofd) {
    $(hoofd).click(function () {
        $(hoofd.nextElementSibling).slideToggle();
    });
});
