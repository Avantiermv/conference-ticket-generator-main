class generateTicket{
    constructor(name, email, githubnName){
        
    }
}


const form = document.querySelector('form');
const divContent = document.querySelector('.content');
const divGeneratedTicket = document.querySelector('.generate-ticket');
const spanFullName = document.querySelector('span');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    divContent.classList.add('hidden');
    divGeneratedTicket.classList.remove('hidden');
    divGeneratedTicket.classList.add('visible');
    spanFullName.innerText = 'Marcos Vinicius silva colares';

    setTimeout(() => {
      divContent.style.display = 'none';
      divGeneratedTicket.style.display = 'flex';
    }, 500)
});






