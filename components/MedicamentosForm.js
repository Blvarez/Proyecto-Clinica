import axios from 'axios';
import { useState } from 'react';

export function MedicamentosForm() {


    const [medicamento, setMedicamento] = useState({
        cod_medicamento: 0,
        formato: "",
        descripcion: "",
        stock: 0
    })



    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log("Creating default");
        const res = await axios.post('/api/medicamentos', {medicamento})
        console.log(res);
    };

    const handleChange = ({target : { name, value }})=> {
        console.log(name, value)
        setMedicamento({...medicamento, [name]: value});
    }


 
    return (
        <div className="registrarMedi">

            <form onSubmit={handleSubmit}>

                <div className="form-group formM">
                    <input type="number" className="col-6" name="cod_medicamento" id="cod_medicamento" placeholder="Ingrese Codigo de Medicamento" onChange={handleChange} />
                </div>
                
                <div className="form-group formM">
                    <input type="text" className="col-6" name="formato" placeholder="Ingrese Formato" onChange={handleChange} />
                </div>

                <div className="form-group formM">
                    <textarea className="col-6" name="descripcion" placeholder="Ingrese Descripcion" onChange={handleChange} />
                </div>

                <div className="form-group formM">
                    <input type="number" className="col-6" id="stock" name="stock"  placeholder="Ingrese Stock" onChange={handleChange} />
                </div>

                <button className="botonMr">Guardar Medicamento</button>

            </form>

        </div>
    )
}