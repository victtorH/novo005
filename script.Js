
window.addEventListener("scroll", function(){
let header = document.querySelector('#inicio')
header.classList.toggle('rolagem',window.scrollY > 500)
})

window.sr = ScrollReveal({ reset: true});
sr.reveal('.conteiner2', {duration : 2000})

sr.reveal('.info_obj-1', {duration : 5000})

sr.reveal('.info_obj-2', {duration : 2000})
