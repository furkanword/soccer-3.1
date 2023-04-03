import { Departamentos } from "../app/bd/departamentos.js";
import { Departamento } from "../app/Departamento.js";
import { Equipo } from "../app/Equipo.js";
import { Jugador } from "../app/Jugador.js";
let deps = [];
let jugadores = [];
class FrmJugadores extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.viewJugadores();
    }

    render(){
        this.innerHTML = /* html */ `
        <div class = "container">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" data-verocultar='["#jugadores",["#lstJugadores"]]' href="#" id="regJugadores">Registro de Jugadores</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-verocultar='["#lstJugadores",["jugadores"]]' Id="verJugadores">Listado de Jugadores</a>      
                </li>
            </ul>        
        </div>
        <div class="container mt-2" id="jugadores" style="display: none;">
            <div class="card">
            <div class="card-header">
                Registro de jugadores
            </div>
            <div class="card-body">
                <form id="frmJugadores">
                    <div class="row g-3">
                        <div class="col-6">
                            <label for="nombre" class="form-label lst">Nombre</label>
                            <input type = "text" class ="form-control" id="nombre" required>
                        </div>
                        <div class="col-6">
                            <label for="fecha" class="form-label lst">Fecha de contrato</label>
                            <input type = "date" class ="form-control" id="fecha">
                        </div>
                    </div>
                    <div class="row g-3">
                        <div class="col-3">
                            <label for="foto" class="form-label lst">Foto</label>
                            <input type = "file" class ="form-control" id="foto">
                        </div>
                        <div class="col-3">
                            <label for="edad" class="form-label lst">Edad</label>
                            <input type = "text" class ="form-control" id="edad" required>
                        </div>
                        <div class="col-3">
                        <label for="peso" class="form-label lst">Peso en kl</label>
                            <input type = "text" class ="form-control" id="peso">
                        </div>
                        <div class="col-3">
                            <label for="id-equipo" class="form-label lst">Id del quipo</label>
                            <input type = "text" class ="form-control" id="id-equipo">
                        </div>
                    </div>
                    
                    <div class="row g-3">
                        <div class ="col-6">
                            <select class="form-select" aria-label="Disabled select example" id="piernaD" disabled>
                                <option selected>Pierna de dominio</option>
                                <option value="1">Izquierda</option>
                                <option value="2">Derecha</option>
                            </select> 
                        </div>
                        <div class ="col-6">
                            <select class="form-select" aria-label="Disabled select example" id='posicion' disabled>
                                <option selected>Posicion</option>
                                <option value="1">DFC</option>
                                <option value="2">LI</option>
                                <option value="3">LD</option>
                                <option value="4">MC</option>
                                <option value="5">ED</option>
                                <option value="6">EI</option>
                                <option value="4">DC</option>
                            </select> 
                        </div>
                    </div>
                    <div class="row g-3">
                        <div class ="col-6">
                            <select class="form-select" aria-label="Disabled select example" id="piernaD" disabled>
                                <option selected>Pierna de dominio</option>
                                <option value="1">Izquierda</option>
                                <option value="2">Derecha</option>
                            </select> 
                        </div>
                        <div class ="col-6">
                            <select class="form-select" aria-label="Disabled select example" id='posicion' disabled>
                                <option selected>Posicion</option>
                                <option value="1">DFC</option>
                                <option value="2">LI</option>
                                <option value="3">LD</option>
                                <option value="4">MC</option>
                                <option value="5">ED</option>
                                <option value="6">EI</option>
                               
                            </select> 
                        </div>
                    </div>
                    <div >
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
                        <label for="descripcion" class="form-label">Descripcion del jugador</label>
                        <textarea class="form-control" id="descripcion" rows="3"></textarea>
                    </div>  
                    <div>            
                        <a href="#" class="btn btn-primary mt-3" id="guardarJugador">Guardar</a>
                        <div class="alert alert-success mt-2" style="display:none;" role="alert">
                            Datos guardados correctamente
                        </div>
                    </div>
                    <div class="alert alert-danger mt-2" style="display:none;" role="alert">
                        Error al momento de guardar los datos
                    </div>
                </form>
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
    viewJugadores = () =>{
        document.querySelector('#verJugadores').addEventListener('click',(m) =>{
            let data = JSON.parse(m.target.dataset.verocultar);
            let cardVer = document.querySelector(data[0]);
            cardVer.style.display = "block";
            data[1].forEach(card => {
                let cardActual = document.querySelector(card);
                cardActual.style.display = "none";
                
            });
            m.stopImmediatePropagation();
            m.preventDefaul();
        })

    }
    registroJugadores = () => {
        document.querySelector('#regJugadores').addEventListener('click',(m) =>{
            let data = JSON.parse(m.target.dataset.verocultar);
            let cardVer = document.querySelector(data[0]);
            cardVer.style.display = "block";
            data[1].forEach(card => {
                let  cardActual = document.querySelector(card)
                cardActual.style.display = "none";
            })
            m.stopImmediatePropagation();
            m.preventDefault();
        })
    }
    saveData(){
        document.querySelector('#guardarJugador').addEventListener('click',(e)=> {
            const formData =document.forms['frmJugadores'];
            const dataOk = document.querySelector('.alert-seccess');
            const dataError = document.querySelector('.alert-danger');
            const nombre = document.querySelector['nombre'];
            const fecha = document.querySelector['fecha'];
            const foto = document.querySelector['foto'];
            const edad = document.querySelector['edad'];
            const peso = document.querySelector['peso'];
            const idEquipo= document.querySelector['id-equipo'];
            const piernaD = document.querySelector['piernaD'];
            const posicion = document.querySelector['posicion'];
            const dep = document.querySelector['dep'];
            const ciudad = document.querySelector['ciudad'];




        })
    }

}
customElements.define("frm-jugador",FrmJugadores);