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

        if(field.classList.contains('fullname')){
          if(!this.validName(field) || !field.value.trim()){
            isValid = false;
            this.errortext(field);
          }
        }

        if(field.classList.contains('upload')){
          if(!this.validImage(field)){
            isValid = false;
            this.errortext(field);
          }
        }



      }

      return isValid;
    }

    validName(field){
      const name = field.value;
      let indicator = true;
      if(name.length > 30 || name.length <= 2){
        indicator = false;
      }
      if(!name.match(/[^a-zà-ú]/gi)){
            indicator = false;
      }
      return indicator;
    }

    validUser(field){
      const user = field.value;
      let indicator = true;
      if(user.length > 12 || user.length < 3){
        indicator = false;
      }
      if(!user.match(/[a-zA-Z0-9]+$/g)){
            indicator = false;
      }
      return indicator;
    }

    validImage(field){
      const image = field.value;
      let indicator = true;

      if(!image || image.trim() === ''){
        console.log("Imagem invalida");
        indicator = false;
      }
      return indicator;
    }

    errortext(input){

      if(input.classList.contains('upload')){
        input.addEventListener('change', function () {
          const file = input.files[0];

          if (file) {
            console.log('Arquivo selecionado:', file);
            console.log(`Nome: ${file.name}`);
            console.log(`Tamanho: ${(file.size / 1024).toFixed(2)} KB`);
            console.log(`Tipo: ${file.type}`);
          }
        });

        if(!input.files || input.files.length === 0){
          const spanerrorimg = document.querySelector('.spant-info');
          const svgElement = document.querySelector('svg');
          svgElement.classList.add('spant-error');
          spanerrorimg.classList.add('text-error');
          spanerrorimg.innerText = "File too large or there's no file";
        }
      }
      
      if(input.classList.contains('fullname')){
        const inputname = input.value;

      }

      if(input.classList.contains('email')){
        const inputemail = input.value;
      }

      if(input.classList.contains('user')){
        const inputuser = input.value;
      }

    }
}

document.addEventListener('DOMContentLoaded', () => {
  new generateTicket();
});