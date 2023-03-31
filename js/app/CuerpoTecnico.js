import { Plantel } from "./Plantel.js";
export class CuerpoTecnico extends Plantel{
    static idCt = 0;
    constructor(nombre,fecha,ubicacion,idEquipo,cargo,yearExp,email,estadoCivil,telContacto,profesion){
        super(nombre,fecha,ubicacion);
        this._id = ++CuerpoTecnico.idCt;
        this._idEquipo = idEquipo;
        this._cargo = cargo;
        this._yearExp = yearExp;
        this._email = email;
        this._estadoCivil = estadoCivil;
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
    get cargo(){
        return this._cargo;
    }
    set cargo(v_cargo){
        this._cargo = v_cargo;
    }
    get yearExp(){
        return this._yearExp;
    }
    set yearExp(v_yearExp){
        this._yearExp = v_yearExp;
    }
    get email(){
        return this._email;
    }
    set email(v_email){
        this._email = v_email;
    }
    get estadoCivil(){
        return this._estadoCivil;
    }
    set estadoCivil(v_estadoCivil){
        this._estadoCivil = v_estadoCivil;
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