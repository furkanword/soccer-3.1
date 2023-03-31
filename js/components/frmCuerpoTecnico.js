class FrmCuerpoTecnico extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */ `
        <div class="card">
            <div class="card-header">
              Registro de Cuerpo tecnico
            </div>
            <div class="card-body">
              <form id="frmCuerpoTecnico">
                <div class="mb-3">
                  <label for="nombreCt" class="form-label">Nombre profesional</label>
                  <input type="email" class="form-control" id="nombreCt">
                <div class="mb-3">
                  <label for="fechaCt" class="form-label">Password</label>
                  <input type="date" class="form-control" id="fechaCt">
                </div>
              </form>
              <a href="#" class="btn btn-primary" id="guardarCt">Guardar</a>
            </div>
          </div>        
        `
    }
}

customElements.define('frm-cuerpo-tecnico',FrmCuerpoTecnico);