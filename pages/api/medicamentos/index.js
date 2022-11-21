import { pool } from "../../../config/db"

export default async function handler(req, res) {

    switch (req.method) {

        case "GET":
            return await obtenerMedicamento(req, res)
        case "POST":
            return await guardarMedicamento(req,res)
    }
}

const obtenerMedicamento = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM medicamento")
    return res.status(200).json(result)
}



const guardarMedicamento = async (req, res) => {
    const { cod_medicamento, formato, descripcion, stock } = req.body

    const [result] = await pool.query("INSERT INTO medicamento SET ?", {
        cod_medicamento,
        formato,
        descripcion,
        stock
    })

    console.log(result);
    return res.status(200).json({ cod_medicamento, formato, descripcion, stock, id: result.insertId });
}

