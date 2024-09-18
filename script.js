const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.btn').addEventListener('click', function (event) {
        event.preventDefault(); 
        kiemTraMatKhau();
    });

    document.getElementById('password').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            kiemTraMatKhau();
        }
    });

    function kiemTraMatKhau() {
        var matKhau = document.getElementById('password').value;
        if (matKhau === '19092005') {
            window.location.href = 'login.html';
        } 
        else {
            alert('Sai mật khẩu. Vui lòng thử lại.');
        } 
    }
});
