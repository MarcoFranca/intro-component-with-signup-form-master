// Receba uma mensagem de erro quando o formulário for enviado se:
// Qualquer campo de entrada está vazio. A mensagem para este erro deve
// dizer "[Nome do campo] não pode estar vazio"
// O endereço de e-mail não está formatado corretamente (ou seja, um endereço
// de e-mail correto deve ter esta estrutura: nome@host.tld). A mensagem para
// este erro deve dizer "Parece que isso não é um e-mail"


function inputEmpty(valueId, textFild) {
    let content = document.getElementById(`${valueId}`)
    if (content.value === ""){
        document.getElementById(`${valueId}1`).innerHTML = `${textFild} cannot be empty`
    }else {
        document.getElementById(`${valueId}1`).innerHTML = ""
    }
}


function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    user = field.value.substring(0,field.value.length)
    btn = document.querySelector("#submit");

    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        console.log("valid email address");
    }
    else if (user == ""){
        event.preventDefault();
        document.getElementById("email1").innerHTML="Oops! Please add your email";
        console.log("please add your email address");
    }
    else
    {
        document.getElementById("email1").innerHTML="Oops! Please check your email";
        console.log("Invalid email address");
    }
}

function send() {
    inputEmpty("firstName", "First Name")
    inputEmpty("lastName", "Last Name")
    validacaoEmail(form1.email)
    inputEmpty("passwd", "password")
}