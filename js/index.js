let selected = [...document.getElementsByClassName('rating')];
let wrapper = document.querySelector(".wrapper");
let ratingsContent = document.querySelector('.ratings-content');
let tyContent=document.querySelector('.ty-state');
let msg = document.querySelector('.ty-state .msg');
let starWrapper = document.querySelector('.stars');
let button=document.querySelector(".btn");
let num = selected.length;
let clickedIndex=null;


selected.forEach((star, clickedIndex) => {
    star.addEventListener('click',()=>{
        starWrapper.classList.add("disabled");
        console.log('star of index '+ clickedIndex +' was clicked');
        selected[clickedIndex].classList.add("active");
        clickedIndex++;

        button.addEventListener("click",function(){
            ratingsContent.style.visibility="hidden";
            wrapper.removeChild(ratingsContent);
            console.log(msg);
            msg.innerHTML="You selected " + clickedIndex + " out of 5";
            tyContent.style.opacity="1";
            
        });

    });
});
