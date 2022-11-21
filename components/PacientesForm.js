import axios from 'axios';

export function PacientesForm() {

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log("Creating default");
        const ress = await axios.post('/api/pacientes', {
            rut: '197573562',
            nombre: 'ivannia',
            fono: '122',
            edad: '25',
            diagnostico: 'Cronico'
        })
        console.log(ress);
    };
 
    return (
        <div className="registrarPaci">

            <form onSubmit={handleSubmit}>

                <div className="form-group formP">
                    <input type="text" className="col-6" name="rut" id="rut" placeholder="Ingrese Rut"/>
                </div>
                
                <div className="form-group formP">
                    <input type="text" className="col-6" name="nombre" placeholder="Ingrese Nombre"/>
                </div>

                <div className="form-group formP">
                    <input type="text" className="col-6" id="fono" name="fono"  placeholder="Ingrese Fono"/>
                </div>

                <div className="form-group formP">
                    <input type="text" className="col-6" id="edad" name="edad"  placeholder="Ingrese Edad"/>
                </div>

                <div className="form-group formP">
                    <textarea className="col-6" name="Diagnostico" placeholder="Ingrese Diagnostico"/>
                </div>

                <button className="botonPr">Guardar Paciente</button>

            </form>

        </div>
    )
}