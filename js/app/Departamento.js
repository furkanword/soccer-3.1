export class Departamento{
    constructor(id,departamento){
        this._id = id;
        this._departamento = departamento;
    }
    get id(){
        return this._id;
    }
    set id(v_id){
        this._id = v_id;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(v_departamento){
        this._departamento = v_departamento;
    }
}