const username = document.getElementById('navUser');
const userLogo = document.getElementById('navLogoUser');
const navBtnRegister = document.getElementById('btnReg');
// CLICK REGISTER BUTTON
// navBtnRegister.addEventListener('click', () =>{
//     username.style.display = 'flex';
//     userLogo.style.display = 'flex';
//     navBtnRegister.style.display = 'none';
// })

//HIDE REGISTER BUTTON IF FROM SUBMIT CLICKED
document.addEventListener('DOMContentLoaded', function(){
    const data = sessionStorage.getItem('username');
    if(data){
        username.innerHTML = data
        username.style.display = 'flex';
        userLogo.style.display = 'flex';
        navBtnRegister.style.display = 'none';
    }
})

// const sliderbtn1 = document.getElementById('button-img1')
// const slider1 = document.getElementById('slider1')
// sliderbtn1.addEventListener('click', function(e) {
//     slider1.style.transform = 'translateY(80%)';
// })
