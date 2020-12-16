var backTopBtn = document.getElementById("backtotop");

window.onscroll = function() {
    scroll();
};

function scroll() {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        backTopBtn.style.display = "flex";
    }
    else{
        backTopBtn.style.display = "none";
    }
}

function backTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}