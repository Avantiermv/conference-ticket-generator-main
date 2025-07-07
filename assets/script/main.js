class generateTicket{
    constructor(){
        this.form = document.querySelector('form');
        this.events();
        this.spanerrorimg = document.querySelector('.spant-info');
        this.svgElement = document.querySelector('svg');
        this.imageInput = document.getElementById('input-image');
        this.labelImage = document.querySelector('.image-label');
        this.previewContainer = document.querySelector('.avatar-upload');
        this.avatarImage = document.querySelector('.avatarimage');

        this.changeImageButton = document.querySelector('#label-change-image');
        this.removeImagebutton = document.querySelector('#label-remove-image');
        
        

        this.setUpPreviewImage();
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


        if(field.classList.contains('upload')){
          if(!this.validImage(field)){
            isValid = false;
            this.errortext(field);
          }else{
            this.clearError(field);
          }
        }

        if(field.classList.contains('fullname')){
          if(!this.validName(field) || !field.value.trim()){
            isValid = false;
            this.errortext(field);
          }else{
            this.clearError(field);
          }
        }

        if(field.classList.contains('email')){
          if(!this.validEmail(field)){
            isValid = false;
            this.errortext(field);
          }else{
            this.clearError(field);
          }
        }

        if(field.classList.contains('user')){
          if(!this.validUser(field)){
            isValid = false;
            this.errortext(field);
          }else{
            this.clearError(field);
          }
        }

      }
      return isValid;
    }

    validImage(field){
      const image = field.files[0];
      let indicator = true;

      if(!image || image.size > 500 * 1024){
        console.log("Imagem invalida");
        indicator = false;
      }
      return indicator;
    }

    setUpPreviewImage(){
      this.imageInput.addEventListener('change', (e) =>{
        const file = e.target.files[0];
        
        if(file){
          this.labelImage.classList.add('hidden');
          this.labelImage.style.display = 'none';
          this.changeImageButton.style.display = 'flex';
          this.previewContainer.style.display = 'flex';
          
          const reader = new FileReader();

          reader.onload = (event) =>{
            this.avatarImage.src = event.target.result;
          }
          reader.readAsDataURL(file);
        }
      });
      this.removeImagebutton.addEventListener('click', (e) => {
        this.imageInput.value = "";             
        this.avatarImage.src = "";              
        this.labelImage.classList.remove('hidden');
        this.labelImage.classList.add('visible');
        this.labelImage.style.display = "flex";
        this.changeImageButton.style.display = "none";
        this.previewContainer.style.display = "none";
      });
    }

    validName(field){
      const name = field.value;
      let indicator = true;
      if(name.length <= 2){
        indicator = false;
      }
      if(!name.match(/^[A-Za-zÀ-ÿ\s]+$/)){
        indicator = false;
      }
      return indicator;
    }

    validEmail(field){
      const email = field.value;
      let indicator = true;

      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if(!regex.test(email)){
        indicator = false;
      }
      return indicator;
    }

    validUser(field){
      const user = field.value;
      let indicator = true;
      if(user.length < 3){
        indicator = false;
      }
      if(!user.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)){
        indicator = false;
      }
      return indicator;
    }

    errortext(input){
     if (input.classList.contains('upload')) {
        const file = input.files[0];

        this.svgElement.classList.add('spant-error');
        this.spanerrorimg.classList.add('text-error');

        if (!file) {
          this.spanerrorimg.innerText = "There's no file";
        } else if (file.size > 500 * 1024) {
          this.spanerrorimg.innerText = "File too large";
        }
      }

      if(input.classList.contains('fullname')){
        const validName = document.querySelector('.validName');
        validName.classList.add('text-error');
        validName.classList.remove('hidden');
      }

      if(input.classList.contains('email')){
        const validEmail = document.querySelector('.validEmail');
        validEmail.classList.add('text-error');
        validEmail.classList.remove('hidden');
      }

      if(input.classList.contains('user')){
        const validUser = document.querySelector('.validuser');
        validUser.classList.add('text-error');
        validUser.classList.remove('hidden');
      }
    }

    clearError(input){
      if (input.classList.contains('upload')) {
        this.svgElement.classList.remove('spant-error');
        this.spanerrorimg.classList.remove('text-error');
        this.spanerrorimg.innerText = 'Upload your photo (JPG or PNG, max size: 500KB).';
      }

      if (input.classList.contains('fullname')) {
        const validName = document.querySelector('.validName');
        validName.classList.remove('text-error');
        validName.classList.add('hidden');
      }

      if (input.classList.contains('email')) {
        const validEmail = document.querySelector('.validEmail');
        validEmail.classList.remove('text-error');
        validEmail.classList.add('hidden');
      }

      if (input.classList.contains('user')) {
        const validUser = document.querySelector('.validuser');
        validUser.classList.remove('text-error');
        validUser.classList.add('hidden');
      }
    }
}

document.addEventListener('DOMContentLoaded', () => {
  new generateTicket();
});