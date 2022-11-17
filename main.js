let btn = document.getElementById("btn")
let text = document.getElementById("text")
let Username = document.getElementById("username")
let password = document.getElementById("password")
let form = document.querySelector("form")
let clr = document.querySelector(".clr")

function cambiar_color(color){

  btn.style.background = color;   
  text.style.color = color;   
  Username.style.borderColor = color;   
  password.style.borderColor = color;   
  form.style.borderColor = color;   
  clr.style.borderColor = color; 
}

let bienvenida = document.getElementById("bienvenida")
let mov = Array.from(document.getElementsByClassName("mov"))
let saldo = document.getElementById("saldo")
let contenedor = document.getElementById("contenedor")
let terminal = document.getElementById("terminal")
let usuario = document.getElementById("usuario")
let clr1 = document.getElementById("clr1")
let clr2 = Array.from(document.getElementsByClassName("boton"))

function cambiar_color2(color){
    bienvenida.style.color = color;
    mov.forEach( element => {
        element.style.background = color;  
  })   
    saldo.style.color = color;   
    contenedor.style.borderColor = color;   
    terminal.style.borderColor = color; 
    clr2.forEach( element => {
        element.style.backgroundColor = color;  
  }) 
    usuario.style.color = color;  
    clr1.style.borderColor = color;  
}

var username = window.localStorage.getItem('username')
      document.getElementById("usuario").innerHTML = username;


function save_username() {
    var username = document.getElementById('username').value
    window.localStorage.setItem("username", username)
    window.location = "index.html"
}

var fondo = 0.0;

function depositar() {
  var deposito = document.getElementById("cantidad").value;
  var deposito_float = parseFloat(deposito) 
  
  if(deposito === ""){
    alert("Por favor ingrese una cantidad a depositar")
  }else{
    fondo += deposito_float
    
    var saldo = document.getElementById("saldo");
    saldo.innerHTML = "Actualmente tu saldo es: $" + fondo + " MNX"
  }
}

function retirar() {
  var retiro = document.getElementById("cantidad").value;
  var retiro_float = parseFloat(retiro); 

  if (retiro > fondo){
    alert("No tienes fondos suficientes");
  }else if(retiro === ""){
    alert("Por favor ingrese una cantidad a retirar")
  }else{
    fondo -= retiro_float
    
    var saldo = document.getElementById("saldo");
    saldo.innerHTML = "Actualmente tu saldo es: $" + fondo + " MNX"
  }
}

let boton = Array.from(document.getElementsByClassName("boton"));
var cantidad = document.getElementById("cantidad");

console.log(boton);

boton.forEach( element => {
    element.addEventListener("click", (e) => {
      switch(e.target.innerText){
        case "✔":
            console.log("aqui");
            break
        case "↤":
            cantidad.value = cantidad.value.slice(0,-1);
            console.log("aca");
            break
        case "limpiar":
            cantidad.value = "";
            break;
        default:
            cantidad.value += e.target.innerText;
            console.log(cantidad.value);
      }
    })
  })










  
  


   
