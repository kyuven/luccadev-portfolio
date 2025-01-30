function sendEmail() {
    let parms = {
        nome : document.getElementById("name").value,
        email : document.getElementById("email").value,
        assunto : document.getElementById("subject").value,
        mensagem : document.getElementById("message").value,
    }

    emailjs.send("service_euo8xn8", "template_2um5e9e", parms).then(alert("E-Mail enviado com sucesso"))
}