function enviarFormulario(event) {
         event.preventDefault();
         var formData = new FormData(document.querySelector('form'));
         fetch('salvar_email.php', {
             method: 'POST',
             body: formData
         })
         .then(response => response.text())
         .then(data => {
             document.getElementById('mensagem').innerHTML = data;
         })
         .catch(error => console.error('Erro:', error));
         }
      
	 document.addEventListener('contextmenu', event => event.preventDefault());
