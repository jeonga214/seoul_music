
document.addEventListener("DOMContentLoaded", function() {

    const subNav = document.querySelectorAll('.intro_top .sub_nav > ul > li');
    const subCon = document.querySelectorAll('.intro .intro_content');
    
    let num = 0;
    
    subNav.forEach(function(v,k){

        // 처음에 첫번째 active
        subNav[0].classList.add('active');
        subCon[0].classList.add('active');
    
    
        v.onclick = function(){
            
            // StoryIndicator.innerText = v.innerText;
            subNav[num].classList.remove('active');
            this.classList.add('active');
    
            subCon[num].classList.remove('active');
            subCon[k].classList.add('active');
    
            num = k;

            AOS.refresh();
    
    
        }
    
    });
    
});

document.addEventListener("DOMContentLoaded", function() {

    const subNav2 = document.querySelectorAll('.intro_top2 .sub_nav > ul > li');
    const subCon = document.querySelectorAll('.intro .intro_content');
    
    let num = 0;
    
    subNav2.forEach(function(v,k){
        // StoryIndicator.innerText = '인사말';
        subNav2[0].classList.add('active');
        subCon[0].classList.add('active');
    
    
        v.onclick = function(){
            
            // StoryIndicator.innerText = v.innerText;
            subNav2[num].classList.remove('active');
            this.classList.add('active');
    
            subCon[num].classList.remove('active');
            subCon[k].classList.add('active');
    
            num = k;
    
            AOS.refresh();
    
        }
    
    });
    
});
