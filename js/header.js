
// 화면에서 스크롤높이>1일때 header에 .off
const header = document.getElementById('header');

function scroll(){
    let y = scrollY;
    // console.log(y);
    if(y > 1){
        header.classList.add('off');
    }else{
        header.classList.remove('off');
    }
}

window.addEventListener('scroll',scroll);

// 토글버튼 누르면 메뉴등장

document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.querySelector('.menu-toggle-btn');
    const menu = document.querySelector('#toggle_full');
  
    toggleMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });


     // 창 크기를 감지하여 화면 폭이 820px 이하일 때 active 클래스 제거
    const mediaQuery = window.matchMedia('(max-width: 820px)');
    function handleMediaQueryChange(mediaQuery) {
        if (!mediaQuery.matches && menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggleMenu.classList.toggle('active');
        }
    }

    handleMediaQueryChange(mediaQuery); // 페이지 로드 시 한 번 호출
    mediaQuery.addEventListener('change', handleMediaQueryChange); // 창 크기 변경 감지

  });


// ---------------------------------------------------------
// 메뉴바내려오게 나중에 시간되면 만들던가
$('#header').mouseenter(function(){
    $('.menu_bar').stop().slideDown(114);
})
$('#header').mouseleave(function(){
    $('.menu_bar').stop().slideUp(114);
})