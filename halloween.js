// icon-menu
const x = document.getElementById('icon-menu')
const y = document.getElementById('sub-menu')
x.addEventListener("click", function(){
    if (y.style.display == 'none') {
        y.style.display = 'block'
    } else {
        y.style.display = 'none'
    }
})
// icon-login
const a = document.getElementById('icon-login')
const bg = document.getElementById('background')
const b = document.getElementById('login')

a.addEventListener('click', function(){
    if(b.style.display == "none") {
        b.style.display = "flex"
        bg.style.display = 'block'
    } else {
        b.style.display = "none"
        bg.style.display = 'none'
    }
})
bg.addEventListener('click', function(){
    bg.style.display = 'none'
    b.style.display = 'none'
})
// btn-login
const login = document.getElementById('tai-khoan')
const pass = document.getElementById('mat-khau')
const btn = document.getElementById('btn-login')

btn.addEventListener('click', function(){
    if(login.value == ''){
        alert('Chưa nhập tài khoản')
    } else if(pass.value == ''){
        alert('Chưa nhập mật khẩu')
    }
})

// btn-scroll
const sc = document.getElementById("scroll-btn")
sc.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: `smooth`
      })
})