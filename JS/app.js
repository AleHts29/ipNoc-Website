let dataForm = document.forms['myForm']

dataForm.onsubmit = (event) => {
    event.preventDefault()
    let nameRouter = dataForm.equipo.value;
    let namePuerto = dataForm.puerto.value;
    console.log(nameRouter)
    console.log(namePuerto)
    alert(`Datos ingresados: ${nameRouter} - ${namePuerto}`)
}

