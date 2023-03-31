import { Plantel } from "./Plantel.js";
export class Equipo extends Plantel{
    static idEquipo = 0;
    constructor(nombre,fecha,ubicacion,logo,fotoUniformeLocal,fotoUniformeVisitante,descripcion){
        super(nombre,fecha,ubicacion);
        this._id = ++Equipo.idEquipo;
        this._logo = logo;
        this._uniformeLocal = fotoUniformeLocal;
        this._uniformeVisitante = fotoUniformeVisitante;
        this._descripcion = descripcion;
    }
    get  id(){
        return this._id;
    }
    set id(v_id){
        this._id = v_id;
    }
    get logo(){
        return this._logo;
    }
    set logo(v_logo){
        this._logo = v_logo;
    }
    get uniformeLocal(){
        return this._uniformeLocal;
    }
    set uniformeLocal(v_uniformeLocal){
        this._uniformeLocal = v_uniformeLocal;
    }
    get uniformeVisitante(){
        return this._uniformeVisitante;
    }
    set uniformeVisitante(v_uniformeVisitante){
        this._uniformeVisitante = v_uniformeVisitante;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(v_descripcion){
        this._descripcion = v_descripcion;
    }
}