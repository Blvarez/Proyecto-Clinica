import { pool } from "../../../config/db"

export default async function handler(req, res) {

    switch (req.method) {
        case "GET":
            return await obtenerReceta(req, res)
        case "POST":
            return await guardarReceta(req, res)
    }

}


const obtenerReceta = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM receta")
    return res.status(200).json(result)
}

const guardarReceta = async (req, res) => {
    const { cod_receta, cantidad, rut_paciente, cod_medi, fecha } = req.body

    const [result] = await pool.query("INSERT INTO receta SET ? ", {
        cod_receta,
        cantidad,
        rut_paciente,
        cod_medi,
        fecha
    })


    console.log(result);
    return res.status(200).json({ cod_receta, cantidad, rut_paciente, cod_medi, fecha});
}