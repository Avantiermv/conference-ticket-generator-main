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

    this.fullName = document.querySelector('.fullname');
    this.spanFullName = document.querySelector('.spant-text');
    this.fullEmail = document.querySelector('.email');
    this.spanFullEmail = document.querySelector('.spant-email');
    this.username = document.querySelector('.user');
    this.imageAvatar = document.querySelector('.image-avatar');
    
    this.setUpPreviewImage();
    this.randomNumber();
    this.formatDate();
    this.getCoords();
    this.reverseGeocode();
    this.getDateAndLocationString();
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
      const divContent = document.querySelector('.content');
      const ticketfullname = document.querySelector('.name');
      const ticketusername = document.querySelector('.identifierp');
      const indentifiernum = document.querySelector('.rando-num');
      const dateandlocal = document.querySelector('.date-and-local');

      if(valid){
        divContent.classList.add('hidden');
        divGeneratedTicket.classList.remove('hidden');
        divGeneratedTicket.classList.add('visible');
        this.spanFullName.innerText = this.fullName;
        this.spanFullEmail.innerText = this.fullEmail;
        this.imageAvatar.src = this.avatarImage.src;
        ticketfullname.innerText = this.fullName;
        ticketusername.innerText = `@${this.username}`;
        indentifiernum.innerText = `#${this.randomNumber()}`;
        this.getDateAndLocationString().then(info => {
          dateandlocal.innerText = info;
        })
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
      this.fullName = field.value;
      let indicator = true;
      if(this.fullName.length <= 2){
        indicator = false;
      }
      if(!this.fullName.match(/^[A-Za-zÀ-ÿ\s]+$/)){
        indicator = false;
      }
      return indicator;
    }

    validEmail(field){
      this.fullEmail = field.value;
      let indicator = true;

      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if(!regex.test(this.fullEmail)){
        indicator = false;
      }
      return indicator;
    }

    validUser(field){
      this.username = field.value;
      let indicator = true;
      if(this.username.length < 3){
        indicator = false;
      }
      if(!this.username.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)){
        indicator = false;
      }
      return indicator;
    }

    randomNumber(){
      return Math.floor(Math.random() * 90000) + 10000;
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

    formatDate(){
      const now = new Date();
      const opts = { month: 'short', day: '2-digit', year: 'numeric' };
      const formated = new Intl.DateTimeFormat('en-us', opts).format(now);
      return formated;
    }

    getCoords(){
      return new Promise((resolve, reject) => {
        if(!navigator.geolocation){
          return reject(new Error('Geolocation not supported'));
        }
        navigator.geolocation.getCurrentPosition(
          pos => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
          err => reject(err)
        );
      });
    }

    async reverseGeocode(lat, lon){
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
      const res = await fetch(url, {headers: {'User-agent': 'meu-app/1.0'}});
      const data = await res.json();

      const city  = data.address.city       || data.address.town    || data.address.village;
      const state = data.address.state      || data.address.county;
      return { city, state };
    }

    async getDateAndLocationString(){
      try{
        const dateStr = this.formatDate();
        const {lat, lon} = await this.getCoords();
        const {city, state} = await this.reverseGeocode(lat, lon); 
        return `${dateStr}/${city}, ${state}`;
      }catch(e){
        console.error(e);
        return this.formatDate() + '/location unavailable';
      }
    }
}

document.addEventListener('DOMContentLoaded', () => {
  new generateTicket();
});