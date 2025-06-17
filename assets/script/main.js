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
      const spanFullName = document.querySelector('.spant-text');
      const spanEmail = document.querySelector('.spant-email')

      if(valid){
        divContent.classList.add('hidden');
        divGeneratedTicket.classList.add('visible');
        spanFullName.innerText = 'Marcos Vinicius silva colares';
        

        setTimeout(() => {
          divContent.style.display = 'none';
          divGeneratedTicket.style.display = 'flex';
        }, 500)
      }
    }

    validFields(){
      const spanInfo = this.form.querySelector('.spant-info');
      if (spanInfo) {
        spanInfo.classList.remove('text-error');
      }

      let isValid = true;

      const inputs = this.form.querySelectorAll('input:not([type="submit"])');

      inputs.forEach(field => {
        if(!field.value.trim()){
          isValid = false;
        }
      })

      if(!isValid){
        this.errorText();
      }

      return isValid;
    }

    errorText(){
      const spanInfo = document.querySelector('.spant-info');
      if(spanInfo){
        spanInfo.classList.add('text-error');
      }
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






