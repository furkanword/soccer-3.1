import { Plantel } from "./Plantel.js";
export class CuerpoMedico extends Plantel{
    static idCmd = 0;
    constructor(nombre,fecha,ubicacion,idEquipo,especialidad,fechaTitulo,email,tituloActual,telContacto,profesion){
        super(nombre,fecha,ubicacion);
        this._id = ++CuerpoMedico.idCmd;
        this._idEquipo = idEquipo;
        this._especialidad = especialidad;
        this._fechaTitulo = fechaTitulo;
        this._email = email;
        this._tituloActual = tituloActual;
        this._telContacto = telContacto;
        this._profesion = profesion;
    }
    get id(){
        return this._id;
    }
    get idEquipo(){
        return this._idEquipo;
    }
    set idEquipo(v_idEquipo){
        this._idEquipo = v_idEquipo;
    }
    get especialidad(){
        return this._especialidad;
    }
    set especialidad(v_especialidad){
        this._especialidad = v_especialidad;
    }
    get fechaTitulo(){
        return this._fechaTitulo;
    }
    set fechaTitulo(v_fechaTitulo){
        this._fechaTitulo = v_fechaTitulo;
    }
    get email(){
        return this._email;
    }
    set email(v_email){
        this._email = v_email;
    }
    get tituloActual(){
        return this._tituloActual;
    }
    set tituloActual(v_tituloActual){
        this._tituloActual = v_tituloActual;
    }
    get telContacto(){
        return this._telContacto;
    }
    set telContacto(v_telContacto){
        this._telContacto = v_telContacto;
    }
    get profesion(){
        return this._profesion;
    }
    set profesion(v_profesion){
        this._profesion = v_profesion;
    }
}