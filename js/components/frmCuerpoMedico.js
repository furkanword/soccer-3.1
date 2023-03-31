class FrmCuerpoMedico extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */ `
            <div class="card">
                <div class="card-header">
                Registro de Cuerpo medico
                </div>
                <div class="card-body">
                    <form id="frmCuerpoMedico">
                        <div class="mb-3">
                            <label for="nombreMd" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="nombreMd">
                        </div>
                    </form>
                    <a href="#" class="btn btn-primary" id="guardarMd">Go somewhere</a>
                </div>
            </div>        
        `
    }
}

customElements.define('frm-cuerpo-medico', FrmCuerpoMedico);