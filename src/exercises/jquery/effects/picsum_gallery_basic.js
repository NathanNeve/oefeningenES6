// Picsum gallery (basic) [jQuery]
const slider = $('input#picsumId');
slider.change(function () {
    $('#polaroid').css('backgroundcolor', 'black');
    const value = $('output').html();
    afbeelding = $('#polaroid img');
    afbeelding.attr('src', `https://picsum.photos/id/${value}/600/600`).hide();
    slider.attr('disabled', true);
    afbeelding.fadeIn(4000);
    setTimeout(() => {
        slider.attr('disabled', false);
    }, 4000);
});
