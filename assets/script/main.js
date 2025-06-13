class generateTicket{
    constructor(name, email, githubnName){
        
    }
}


const form = document.querySelector('form');
const divContent = document.querySelector('.content');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    divContent.classList.add('hidden');

    setTimeout(() => {
      divContent.style.display = 'none';
    }, 500)
});






