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

        for(let texterror of this.form.querySelectorAll('.hidden')){
          texterror.classList.remove();
        }

        inputs.forEach(input =>{
          if(!input.value){
            this.errorText();
            isValid = false;
          }
        })

      return isValid;
    }

    errorText(){
      const spaninfo = document.querySelector('.spant-info');
      spaninfo.classList.add('text-error');
      spaninfo.textContent = `File too large or there's no file. Please upload a photo under 500KB`;
      
      const spanemailerror = document.querySelectorAll('.email-span-error');
      spanemailerror.forEach(span =>{
        span.classList.remove('hidden');
      })
      
      const paths = document.querySelectorAll('.span-and-svg path');
      paths.forEach(path =>{
        path.setAttribute('stroke', 'hsl(7, 71%, 60%)');
      });
    }
}

document.addEventListener('DOMContentLoaded', () => {
  new generateTicket();
});