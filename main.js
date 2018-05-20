function menu() {
    var el1 = document.getElementById("menu");
    var el2 = document.getElementById("header_menu");
    el1.classList.toggle("close");
    el2.classList.toggle("header_menu_close");
}

function range() {
    var val = $('.rating_range').val();
    $('.rating_range').css({ 'background': '-webkit-linear-gradient(left ,#FCA99E 0%,#FCA99E ' + val + '%,#fff ' + val + '%, #fff 100%)' });

    var rtv = document.getElementById('rtv');

    rtv.innerHTML = val;

    var val1 = $('.time_range').val();
    $('.time_range').css({ 'background': '-webkit-linear-gradient(left ,#BFE695 0%,#BFE695 ' + (val1/60)*100 + '%,#fff ' + (val1/60)*100 + '%, #fff 100%)' });

    var rttv = document.getElementById('rttv');

    rttv.innerHTML = val1;
}

