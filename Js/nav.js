$clubmbtn = $('#clubmbtn');

$studiobtn = $('#studiobtn');
$navbarTogglerDemo01 = $('#navbarTogglerDemo01');


if ($(window).width() < 991.5) {
    //$clubmbtn.insertBefore($navbarTogglerDemo01);


    $clubmbtn.after($navbarTogglerDemo01)
    console.log('done1')
}
else {

    $clubmbtn.before($navbarTogglerDemo01)
    console.log('done2')
}

$(window).resize(function () {
    if ($(window).width() < 991.5) {

        $clubmbtn.after($navbarTogglerDemo01)
        //$clubmbtn.insertBefore($navbarTogglerDemo01);


        console.log('done0')
    }
    else {
        //$navbarTogglerDemo01.insertBefore($clubmbtn);
        $clubmbtn.before($navbarTogglerDemo01)
        console.log('done3')
    }
});
