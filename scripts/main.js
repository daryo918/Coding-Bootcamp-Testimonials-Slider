const arrowLeft= document.querySelector('.left-arrow')
const arrowRight= document.querySelector('.right-arrow')


arrowLeft.addEventListener('click',changeProfile );
arrowRight.addEventListener('click',changeProfile );


function changeProfile(e){
        const userPic= document.getElementsByClassName('user-pic'); 
         for(var i=0; i<userPic.length; i++) {
             userPic[i].classList.toggle('inactive');
         }
         const textUser= document.getElementsByClassName('testimonial-text-user');
         for(var i=0; i<textUser.length; i++) {
             textUser[i].classList.toggle('inactive');
         }
     
}