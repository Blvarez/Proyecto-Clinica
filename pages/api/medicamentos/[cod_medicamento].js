import { pool } from "../../../config/db";

export default async function handler(req, res) {

    switch (req.method)
    {
        case 'GET':
            return await obtenerMedicamento(req, res)

        case 'DELETE':
            return await eliminarMedicamento(req, res)

        case 'PUT':
            return await actualizarMedicamento(req,res)

    }


    
}

const obtenerMedicamento = async (req, res) => {
    const { cod_medicamento } = req.query

    const [result] = await pool.query("SELECT * FROM medicamento where cod_medicamento = ?", [cod_medicamento])

    return res.status(200).json(result[0])
}

const eliminarMedicamento = async (req, res) => {

    const { cod_medicamento} = req.query
    
    const result = await pool.query("DELETE FROM medicamento where cod_medicamento = ?", [cod_medicamento])

    return res.status(204).json()
}

const actualizarMedicamento = async (req, res) => {
    const {cod_medicamento} = req.query

    await pool.query("UPDATE medicamento SET ? WHERE cod_medicamento = ?", [req.body, cod_medicamento])

    return res.status(204).json()
}