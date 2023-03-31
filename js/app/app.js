import "../components/mainMenu.js";
import "../components/frmEquipo.js";
import "../components/frmJugadores.js";
import "../components/frmCuerpoTecnico.js";
import "../components/frmCuerpoMedico.js";
import { Jugador } from "./Jugador.js";
// import { Departamentos } from "./bd/departamentos.js";
// import { Equipo } from "./Equipo.js";
import { CuerpoTecnico } from "./CuerpoTecnico.js";
import { CuerpoMedico } from "./CuerpoMedico.js";
// import { Departamento } from "./Departamento.js";

// let equipos = [];


/*let obj = new Jugador("xxx","xxx","xxx","xxx","xxx","xxx","xxx","xxx","xxx","xxx","xxx","xxx");
console.log(obj.fecha);
let departamento = Departamentos.filter(Dep => Dep.id == 0 );
console.log(departamento);
*/
// let deps = [];
// const depCol = document.querySelector('#dep');
// procesarDep();
// function procesarDep(){
//     Departamentos.forEach(dep =>{
//         deps.push(new Departamento(dep.id,dep.departamento));
//     })
//     fillConferenceSelect('#dep',deps);
// }
// function fillConferenceSelect(v_selectId,data){
//     clearSelect(v_selectId);
//     const selectData = document.querySelector(v_selectId) ;
//     const itemStart = document.createElement('option');
//     itemStart.innerHTML = 'Seleccione un item';
//     itemStart.selected;
//     selectData.appendChild(itemStart);
    
//     data.forEach(itemDep =>{
//         const item = document.createElement('option');
//         item.value = itemDep.id;
//         item.innerHTML = itemDep.departamento;
//         selectData.appendChild(item);
//     })
// }
// function clearSelect(v_element){
//     const selectData = document.querySelector(v_element) ;
//     const options = selectData.querySelectorAll('option');
//     options.forEach(element =>{
//         selectData.removeChild(element);
//     })
// }
document.querySelectorAll(".clickMenu").forEach((val, id) => {
    val.addEventListener("click", (e)=>{
        let data = JSON.parse(e.target.dataset.verocultar);
        let cardVer = document.querySelector(data[0]);
        cardVer.style.display = 'block';
        data[1].forEach(card => {
            let cardActual = document.querySelector(card);
            cardActual.style.display = 'none';
        });
        e.stopImmediatePropagation();
        e.preventDefault();
    })
});
// document.querySelector('#dep').addEventListener('change',(e) => {
//     clearSelect('#ciudad');
//     const selectChild = document.querySelector('#ciudad');
//     let departamento = Departamentos.filter(Dep => Dep.id == e.target.value );
//     departamento[0].ciudades.forEach(element =>{
//         const itemCiudad = document.createElement('option');
//         itemCiudad.value = element;
//         itemCiudad.innerHTML = element;
//         selectChild.appendChild(itemCiudad);
//     })
//     e.stopImmediatePropagation();
//     e.preventDefault();
// })

// document.querySelector('#guardarEquipo').addEventListener('click',(e) => {
//     const formData = document.forms['frmEquipo'];
//     const dataOk = document.querySelector('.alert-success');
//     const dataError = document.querySelector('.alert-danger');
//     const logo = formData['logo'];
//     const uniformeLocal = formData['uniformeLocal'];    
//     const uniformeVisitante = formData['uniformeVisitante'];    
//     const dep = formData['dep'];    
//     const ciudad = formData['ciudad'];    
//     const descripcion = formData['descripcion']; 
//     const nombre = formData['nombre']; 
//     const fecha = formData['fecha'];
//     if (nombre.value != ''){
//         equipos.push(new Equipo(nombre.value,fecha.value,ciudad.value,logo.files[0].name,uniformeLocal.files[0].name,uniformeVisitante.files[0].name,descripcion.value));
//         dataOk.style.display = 'block';
//         setTimeout(function () {
//             dataOk.style.display = 'none';
//         }, 2000);
//     }else{
//         dataError.style.display = 'block';
//         setTimeout(function () {
//             dataError.style.display = 'none';
//         }, 2000);       
//     }
//     e.stopImmediatePropagation();
//     e.preventDefault();
// })