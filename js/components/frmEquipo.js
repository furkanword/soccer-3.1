import { Departamentos } from "../app/bd/departamentos.js";
import { Departamento } from "../app/Departamento.js";
import { Equipo } from "../app/Equipo.js";

let deps = [];
let equipos = [];

class FrmEquipo extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.procesarDep();
        this.agregarEventClick();
        this.saveData();
        //this.verEquipoEventClick();
        this.viewTeams();
        this.registroTeams();
        //localStorage.removeItem("equipos");
        if (localStorage.getItem("equipos") != undefined){
            equipos =JSON.parse(localStorage.getItem("equipos"));
            this.cargarEquipos();
        }
    }
    render(){
        this.innerHTML = /* html */ `
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" data-verocultar='["#equipos",["#lstEquipos"]]' href="#" id="regEquipo">Registro de Equipos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" data-verocultar='["#lstEquipos",["#equipos"]]' id="verEquipo">Listado de equipos</a>
            </li>
        </ul>
        <div class="container mt-2" id="equipos" style="display: none;">
            <div class="card">
            <div class="card-header">
                Registro de equipos de futbol 
            </div>
            <div class="card-body">
                <form id="frmEquipo">
                    <div class="row g-3">
                        <div class="col-6">
                            <label for="nombre" class="form-label lst">Nombre del equipo</label>
                            <input type = "text" class ="form-control" id="nombre" required>
                        </div>
                        <div class="col-6">
                            <label for="fecha" class="form-label lst">Fecha de fundacion</label>
                            <input type = "date" class ="form-control" id="fecha">
                        </div>
                    </div>
                    <div class="row g-3">
                        <div class="col-4">
                            <label for="logo" class="form-label lst">Logo</label>
                            <input type = "file" class ="form-control" id="logo">
                        </div>
                        <div class="col-4">
                            <label for="uniformeLocal" class="form-label lst">Uniforme Local</label>
                            <input type = "file" class ="form-control" id="uniformeLocal">
                        </div>
                        <div class="col-4">
                            <label for="uniformeVisitante" class="form-label lst">Uniforme visitante</label>
                            <input type = "file" class ="form-control" id="uniformeVisitante">
                        </div>
                    </div>
                    <div class="row g-3">
                        <div class="col-6">
                        <label for="presidente" class="form-label lst">Departamento</label>
                        <select class="form-select" id="dep">
                            <option selected>Seleccione un departamento</option>
                        </select>
                        </div>
                        <div class="col-6">
                        <label for="presidente" class="form-label">Ciudades</label>
                        <select class="form-select lst" id="ciudad" >
                        </select>
                        </div>
                    </div>
                    <div class="row g-3">
                        <label for="descripcion" class="form-label">Descripcion del Equipo</label>
                        <textarea class="form-control" id="descripcion" rows="3"></textarea>
                    </div>
                </form>              
                    <a href="#" class="btn btn-primary mt-3" id="guardarEquipo">Guardar</a>
                    <div class="alert alert-success mt-2" style="display:none;" role="alert">
                        Datos guardados correctamente
                    </div>
                    <div class="alert alert-danger mt-2" style="display:none;" role="alert">
                        Error al momento de guardar los datos
                    </div>
                </div>
            </div>

        </div>
        <div class="container text-center" id="lstEquipos" style="display:none">
            <h1>Listado de equipos inscritos en la liga</h1>
            <div class="container text-center">
                <div class="row" id="listaEquipos">
                
                </div>
            </div>
        </div>
        `
    }
    viewTeams = () => {
        document.querySelector('#verEquipo').addEventListener('click',(e) => {
            let data = JSON.parse(e.target.dataset.verocultar);
            let cardVer = document.querySelector(data[0]);
            //cardVer.setAttribute("style", "display:block;");
            cardVer.style.display = "block";
            data[1].forEach(card => {
                let cardActual = document.querySelector(card);
                //cardActual.setAttribute("style", "display:none;");
                cardActual.style.display = "none";
                //console.log(cardActual);
            });
            e.stopImmediatePropagation();
            e.preventDefault();
            this.cargarEquipos();
        })    
    }
    registroTeams = () => {
        document.querySelector('#regEquipo').addEventListener('click',(e) => {
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
    }
    procesarDep(){
        Departamentos.forEach(dep =>{
            deps.push(new Departamento(dep.id,dep.departamento));
        })
        this.fillConferenceSelect('#dep',deps);
    }
    fillConferenceSelect(v_selectId,data){
        this.clearSelect(v_selectId);
        const selectData = document.querySelector(v_selectId) ;
        const itemStart = document.createElement('option');
        itemStart.innerHTML = 'Seleccione un item';
        itemStart.selected;
        selectData.appendChild(itemStart);
        
        data.forEach(itemDep =>{
            const item = document.createElement('option');
            item.value = itemDep.id;
            item.innerHTML = itemDep.departamento;
            selectData.appendChild(item);
        })
    }
    clearSelect(v_element){
        const selectData = document.querySelector(v_element) ;
        const options = selectData.querySelectorAll('option');
        options.forEach(element =>{
            selectData.removeChild(element);
        })
    }
    agregarEventClick = () =>{
        document.querySelector('#dep').addEventListener('change',(e) => {
            this.clearSelect('#ciudad');
            const selectChild = document.querySelector('#ciudad');
            let departamento = Departamentos.filter(Dep => Dep.id == e.target.value );
            departamento[0].ciudades.forEach(element =>{
                const itemCiudad = document.createElement('option');
                itemCiudad.value = element;
                itemCiudad.innerHTML = element;
                selectChild.appendChild(itemCiudad);
            })
            e.stopImmediatePropagation();
            e.preventDefault();
        })
    }

    saveData(){
        document.querySelector('#guardarEquipo').addEventListener('click',(e) => {
            const formData = document.forms['frmEquipo'];
            const dataOk = document.querySelector('.alert-success');
            const dataError = document.querySelector('.alert-danger');
            const logo = formData['logo'];
            const uniformeLocal = formData['uniformeLocal'];    
            const uniformeVisitante = formData['uniformeVisitante'];    
            const dep = formData['dep'];    
            const ciudad = formData['ciudad'];    
            const descripcion = formData['descripcion']; 
            const nombre = formData['nombre']; 
            const fecha = formData['fecha'];
            if (nombre.value != ''){
                equipos.push(new Equipo(value,this.dateToJulian(new date()),nombre.value,fecha.value,ciudad,logo.files[0].name,uniformeLocal.files[0].name,uniformeVisitante.files[0].name,descripcion.value));
                localStorage.setItem("equipos",JSON.stringify(equipos));
                //this.cargarEquipos();

                dataOk.style.display = 'block';
                setTimeout(function () {
                    dataOk.style.display = 'none';
                }, 2000);
            }else{
                dataError.style.display = 'block';
                setTimeout(function () {
                    dataError.style.display = 'none';
                }, 2000);       
            }
            e.stopImmediatePropagation();
            e.preventDefault();
        })
    }
    cargarEquipos = ()=>{
        let equiposHTML = '';
        for(let equipo of equipos){
            equiposHTML += this.crearEquipoHTML(equipo);
        }
        document.getElementById('listaEquipos').innerHTML = equiposHTML;
    }
     crearEquipoHTML = (equipo)=>{
                let ingresoHTML =/*html*/ `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <img src="/images/equipos/${equipo._logo}" width=" 40px " class="card-img-top" alt="...">
                <div class="card-body">
                        <p class="card-text">${equipo._nombre}</p>
                        <p class="card.text">${equipo._descripcion} </p>
                </div>
            </div>
        </div>
        `;
        return ingresoHTML;
    }

}
customElements.define("frm-equipo",FrmEquipo);

