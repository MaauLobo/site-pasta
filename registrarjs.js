let bancoDeCadastro =[]

function concluido(usuario, email, senha){
    let novoUsuario = {
        usuario: usuario,
        email:  email,
        senha: senha,
        
    }

    if (bancoDeCadastro.length ==0){
    bancoDeCadastro.push(novoUsuario)
    return alert("Usuario cadastrado com Sucesso")
    } else{
        for (let i in bancoDeCadastro){
            if(bancoDeCadastro[i].usuario != usuario && bancoDeCadastro[i].email != email){
            }else{
                return alert("Usuario ou email já existem")
            }
        }
    }


   


}

function cadastrar (){
    let usuario = document.getElementById("usuario").value
    let email = document.getElementById("email").value
    let senha =document.getElementById("senha").value
    location.href="login.html"
    

    concluido(usuario, email, senha)

    document.getElementById("usuario").value = ""
    document.getElementById("email").value = ""
    document.getElementById("senha").value = ""
    
}

function logar (){
    let usuariologin=document.getElementById('usuariologin').value
    let senhalogin=document.getElementById('senhalogin').value
    if(usuariologin=='mau' && senhalogin=='123'){
        alert('Sucesso');
    }else{
        alert('Usuario ou Senha Invalido')
    }
}

console.log(bancoDeCadastro)