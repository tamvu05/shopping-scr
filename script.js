//modal store
var open_modal_store = document.querySelector('.open_dialog_store');
var close_modal_store = document.querySelector('.dialog_store');
var modal_store = document.querySelector('.dialog_store');

function openToggleModalStore(e){
    modal_store.classList.toggle('hide')
}

open_modal_store.addEventListener('click', openToggleModalStore);
close_modal_store.addEventListener('click',function(e){
    if (e.target == e.currentTarget) {
        openToggleModalStore()
    }
});


//modal search
var open_modal_search = document.querySelector('.open_dialog_search');
var close_modal_search = document.querySelector('.dialog_search');
var modal_search = document.querySelector('.dialog_search');

function openToggleModalSearch(e){
    modal_search.classList.toggle('hide')
}

open_modal_search.addEventListener('click', openToggleModalSearch);
close_modal_search.addEventListener('click', function(e){
    if (e.target == e.currentTarget) {
        openToggleModalSearch()
    }
});

//backtotop
$('#bttop').click(function(){
    $('html').animate({
        scrollTop: 0
    }, 500);
});

$(window).scroll(function(){
    if ($(this).scrollTop() != 0) {
        $('#bttop').fadeIn();
    }
    else $('#bttop').fadeOut();
});