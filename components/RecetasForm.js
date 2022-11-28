import axios from 'axios';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';

export function RecetasForm() {

    const [receta, setReceta] = useState({
        cod_receta: 0,
        cantidad: 0,
        rut_paciente: 0,
        cod_medi: 0,
        fecha: ""
    })

    const router = useRouter();

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (router.query.cod_receta) {
            console.log("update")
            const res = await axios.put("/api/recetas/" + router.query.cod_receta, receta)
            console.log(res)
        }
        else {
            const res = await axios.post('/api/recetas', { ...receta })
            console.log(res);
        }
        router.push("/recetas/homeRecetas")
    };

    const handleChange = ({ target: { name, value } }) => {
        console.log(name, value);
        setReceta({ ...receta, [name]: value });
    }

    useEffect(() => {

        const obtenerReceta = async () => {
            const { data } = await axios.get("/api/recetas/" + router.query.cod_receta)
            setReceta({
                cod_receta: data.cod_receta,
                cantidad: data.cantidad,
                rut_paciente: data.rut_paciente,
                cod_medi: data.cod_medi,
                fecha: data.fecha
            })
        }


        if (router.query.cod_receta) {
            obtenerReceta(router.query.cod_receta)
        }
    }, [])


    return (
        <div className="registrarPaci">

            <form onSubmit={handleSubmit}>

                <div className="form-group formP">
                    <input value={receta.cod_receta} type="text" className="col-6" name="cod_receta" id="cod_receta" placeholder="Ingrese Codigo Receta" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <input value={receta.cantidad} type="text" className="col-6" name="cantidad" id="cantidad" placeholder="Ingrese Cantidad" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <input value={receta.rut_paciente} type="text" className="col-6" id="rut_paciente" name="rut_paciente" placeholder="Ingrese Rut Paciente" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <input value={receta.cod_medi} type="text" className="col-6" id="cod_medi" name="cod_medi" placeholder="Ingrese Cod Medicamento" onChange={handleChange} />
                </div>

                <div className="form-group formP">
                    <input value={receta.fecha} type="text" className="col-7" name="fecha" placeholder="Ingrese Fecha (formato:DD/MM/AAAA)" onChange={handleChange} />
                </div>

                <button className="botonPr">Guardar Receta</button>

            </form>

        </div>
    )
}