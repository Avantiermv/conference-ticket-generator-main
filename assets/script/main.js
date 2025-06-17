class generateTicket{
    constructor(){
        this.form = document.querySelector('form');
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
      const divGeneratedTicket = document.querySelector('.generate-ticket');
      const divContent = document.querySelector('.content')
      const spanFullName = document.querySelector('.spant-text');

      if(valid){
        divContent.classList.add('hidden');
        divGeneratedTicket.classList.remove('hidden');
        divGeneratedTicket.classList.add('visible');
        spanFullName.innerText = 'Marcos Vinicius silva colares';
        

        setTimeout(() => {
          divContent.style.display = 'none';
          divGeneratedTicket.style.display = 'flex';
        }, 500)
      }
    }

    validFields(){
      let isValid = true;

      const inputs = document.querySelectorAll('input');
        inputs.forEach(input =>{
          if(!input.value){
            this.errorText();
            console.log("Rapaz");
            isValid = false;
          }
        })

      return isValid;
    }

    errorText(){
      const spaninfo = document.querySelector('.spant-info');
      spaninfo.classList.add('text-error');
    }
}

document.addEventListener('DOMContentLoaded', () => {
  new generateTicket();
});



// const form = document.querySelector('form');
// const divContent = document.querySelector('.content');
// const divGeneratedTicket = document.querySelector('.generate-ticket');
// const spanFullName = document.querySelector('.spant-text');
// const spanEmail = document.querySelector('.spant-email')

// form.addEventListener('submit', (e) => {
//     e.preventDefault(); 
//     divContent.classList.add('hidden');
//     divGeneratedTicket.classList.remove('hidden');
//     divGeneratedTicket.classList.add('visible');
//     spanFullName.innerText = 'Marcos Vinicius silva colares';
    

//     setTimeout(() => {
//       divContent.style.display = 'none';
//       divGeneratedTicket.style.display = 'flex';
//     }, 500)
// });






