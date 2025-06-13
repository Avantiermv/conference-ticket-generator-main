class generateTicket{
    constructor(name, email, githubnName){
        
    }
}


const form = document.querySelector('form');
const divContent = document.querySelector('.content');
const divLoading = document.querySelector('.loading');
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    divContent.classList.add('hidden');
    setTimeout(() => {
      divContent.style.display = 'none';
    }, 500)
});

document.addEventListener('DOMContentLoaded', () =>{
    lottie.loadAnimation({
        container: document.getElementById("animation-container"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "assets/script/loadinganimation3.json"
    });
})





