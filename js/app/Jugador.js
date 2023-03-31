import { Plantel } from "./Plantel.js";
export class Jugador extends Plantel{
    static idJugador = 0;
    constructor(nombre,fecha,ubicacion,idEquipo,dorsal,posicion,foto,piernaDominio,rh,edad,estatura,peso){
        super(nombre,fecha,ubicacion);
        this._id = ++Jugador.idJugador;
        this._idEquipo = idEquipo;
        this._dorsal = dorsal;
        this._posicion = posicion;
        this._foto = foto;
        this._piernaDominio = piernaDominio;
        this._rh = rh;
        this._edad = edad;
        this._estatura = estatura;
        this._peso = peso;
    }
    get id(){
        return this._id;
    }
    get idEquipo(){
        return this._idEquipo;
    }
    set idEquipo(v_idEquipo){
        this._idEquipo = v_idEquipo
    }
    get dorsal(){
        return this._dorsal;
    }
    set dorsal(v_dorsal){
        this._dorsal = v_dorsal
    }
    get posicion(){
        return this._posicion;
    }
    set posicion(v_posicion){
        this._posicion = v_posicion
    }
    get foto(){
        return this._foto;
    }
    set foto(v_foto){
        this._foto = v_foto
    }
    get piernaDomino(){
        return this._piernaDomino;
    }
    set piernaDomino(v_piernaDomino){
        this._piernaDomino = v_piernaDomino
    }
    get rh(){
        return this._rh;
    }
    set rh(v_rh){
        this._rh = v_rh
    }
    get edad(){
        return this._edad;
    }
    set edad(v_edad){
        this._edad = v_edad
    }
    get estatura(){
        return this._estatura;
    }
    set estatura(v_estatura){
        this._estatura = v_estatura
    }
    get peso(){
        return this._peso;
    }
    set peso(v_peso){
        this._peso = v_peso
    }
}