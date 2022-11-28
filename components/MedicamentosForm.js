import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function MedicamentosForm() {


    const [medicamento, setMedicamento] = useState({
        cod_medicamento: 0,
        formato: "",
        descripcion: "",
        stock: 0
    });


    const router = useRouter();


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (router.query.cod_medicamento) {
            console.log("update")
            const res = await axios.put("/api/medicamentos/" + router.query.cod_medicamento, medicamento)
            console.log(res)
        }
        else {
            const res = await axios.post('/api/medicamentos', { ...medicamento })
            console.log(res);
        }
        router.push("/medicamentos/homeMedicamentos")
    };

    const handleChange = ({ target: { name, value } }) => {
        console.log(name, value);
        setMedicamento({ ...medicamento, [name]: value });
    }


    useEffect(() => {

        const obtenerMedicamento = async () => {
            const { data } = await axios.get("/api/medicamentos/" + router.query.cod_medicamento)
            setMedicamento({
                cod_medicamento: data.cod_medicamento,
                formato: data.formato,
                descripcion: data.descripcion,
                stock: data.stock
            })
        }


        if (router.query.cod_medicamento) {
            obtenerMedicamento(router.query.cod_medicamento)
        }
    }, [])


    return (
        <div className="registrarMedi">

            <form onSubmit={handleSubmit}>

                <div className="form-group formM">
                    <input value={medicamento.cod_medicamento} type="text" className="col-6" name="cod_medicamento" id="cod_medicamento" placeholder="Ingrese Codigo de Medicamento" onChange={handleChange} />
                </div>

                <div className="form-group formM">
                    <input value={medicamento.formato} type="text" className="col-6" name="formato" placeholder="Ingrese Formato" onChange={handleChange} />
                </div>

                <div className="form-group formM">
                    <textarea value={medicamento.descripcion} className="col-6" name="descripcion" placeholder="Ingrese Descripcion" onChange={handleChange} />
                </div>

                <div className="form-group formM">
                    <input value={medicamento.stock} type="text" className="col-6" id="stock" name="stock" placeholder="Ingrese Stock" onChange={handleChange} />
                </div>

                <button className="botonMr">Guardar Medicamento</button>

            </form>

        </div>
    )
}