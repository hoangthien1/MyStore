var btn = document.querySelector('.header__bottom-search-icon');
var inputSearch = document.querySelector('.header__bottom-search-input');
btn.onclick = function(){
    inputSearch.classList.toggle('header__bottom-search-input-active');
}