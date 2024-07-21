const username = document.getElementById('nav-user');
const userLogo = document.getElementById('nav-logouser');
const userInfo = document.getElementById('nav-user-info');
const navBtnRegister = document.getElementById('btn-reg-container');
const btnLogOut = document.getElementById('btnLogout');
const btnLogoutContainer = document.getElementById('btn-logout-container');

//HIDE REGISTER BUTTON IF FROM REGISTER PAGE (REGISTERED)
document.addEventListener('DOMContentLoaded', function(){
    const data = sessionStorage.getItem('username');
    if(data){
        console.log('true')
        username.innerHTML = data;
        userInfo.style.display = 'flex';
        username.style.display = 'flex';
        userLogo.style.display = 'flex';
        btnLogoutContainer.style.display = 'flex';
        navBtnRegister.style.display = 'none';
    }
})

btnLogOut.addEventListener('click', ()=>{
    userInfo.style.display = 'none';
    username.style.display = 'none';
    userLogo.style.display = 'none';
    btnLogoutContainer.style.display = 'none';
    navBtnRegister.style.display = 'flex';
    sessionStorage.setItem('username', "");
})

const btnBarMenu = document.getElementById('btn-bar-menu');
const btnCloseMenu = document.getElementById('btn-close-menu');
const navTexts = document.querySelector('.navTexts');

btnBarMenu.addEventListener('click', ()=>{
    navTexts.style.right = '0';
    btnBarMenu.style.transition = '0.5s';
    btnBarMenu.style.opacity = '0';
})
btnCloseMenu.addEventListener('click', ()=>{
    navTexts.style.right = '-200px';
    btnBarMenu.style.transition = '0.5s';
    btnBarMenu.style.opacity = '1';
    btnBarMenu.style.display = 'block';
})
window.addEventListener('resize', ()=>{
    if(window.innerWidth > 820){
        btnBarMenu.style.transition = '0.5s';
        btnBarMenu.style.opacity = '0';
        btnBarMenu.style.display = 'none';
    } else {
        btnBarMenu.style.transition = '0.5s';
        btnBarMenu.style.opacity = '1';
        btnBarMenu.style.display = 'block';
    }
})