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
        }, 500);
      }
    }

    validFields(){
      let isValid = true;
      
      for(let field of this.form.querySelectorAll('input')){
        if(!field.value.trim()){
          isValid = false;
          console.log('vazios')
        }

        if(field.classList.contains('fullname')){
          if(!this.validName(field)){
            console.log('Nome');
            isValid = false;
          }else{
            console.log('Nome certo');
          }
        }

        if(!isValid){
          this.errorText();
        }
      }

      

      return isValid;
    }

    validName(field){
      const user = field.value;
      let indicator = true;
      if(user.length > 30 || user.length < 3){
        this.errorText();
        indicator = false;
      }
      if(!user.match(/[^a-zà-ú]/gi)){
            this.errorText();
            indicator = false;
      }
      return indicator;
    }

    validImage(field){

    }

    validUser(field){
      const user = field.value;
      let indicator = true;
      if(user.length > 12 || user.length < 3){
        this.errorText();
        indicator = false;
      }
      if(!user.match(/[a-zA-Z0-9]+$/g)){
            this.errorText();
            indicator = false;
      }
      return indicator;
    }

    errorText(){
      const container = document.querySelector('.span-and-svg');
      container.classList.add('text-error');
      const spanerror = container.querySelector('.spant-info');
      spanerror.innerText = "File too large or there's no file";

      const svg = container.querySelector('svg');
      const paths = svg.querySelectorAll('path');

      paths.forEach(path => {
        path.style.stroke = 'hsl(7, 71%, 60%)';
        path.setAttribute('stroke', 'hsl(7, 71%, 60%)');
      });
    }

    clearError(){

    }
}

document.addEventListener('DOMContentLoaded', () => {
  new generateTicket();
});