class generateTicket{
    constructor(){
        this.form = document.querySelector('form'),
        this.events();
    }

    events(){
      this.form.addEventListener('submit', (e) => {
        this.handleSubmit(e);
      })
    }

    handleSubmit(e){
      e.preventDefault();
      const valid = this.validFields();
    }

    validFields(){
      let indicator = true;

      for(let textError of this.form.querySelector('.text-error')){

      }

      for(let field of this.form.querySelector('input')){
        if(!field.value){
          this.form.errorText(field, "Rapaz");
        }
      }
    }

    errorText(field, message){
      console.log('rapaz');
    }
}


const form = document.querySelector('form');
const divContent = document.querySelector('.content');
const divGeneratedTicket = document.querySelector('.generate-ticket');
const spanFullName = document.querySelector('.spant-text');
const spanEmail = document.querySelector('.spant-email')

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






