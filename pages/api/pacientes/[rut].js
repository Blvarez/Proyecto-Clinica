import { pool } from "../../../config/db";

export default async function handler(req, res) {

    switch (req.method)
    {
        case 'GET':
            return await obtenerPaciente(req, res)

        case 'DELETE':
            return await eliminarPaciente(req, res)

        case 'PUT':
            return await actualizarPaciente(req,res)

    }

}

const obtenerPaciente = async (req, res) => {
    
    const { rut } = req.query

    const [result] = await pool.query("SELECT * FROM paciente where rut = ?", [rut])

    return res.status(200).json(result[0])
}


const eliminarPaciente = async (req, res) => {

    const { rut} = req.query
    
    const result = await pool.query("DELETE FROM paciente where rut = ?", [rut])

    return res.status(204).json()
}

const actualizarPaciente = async (req, res) => {
    const {rut} = req.query

    await pool.query("UPDATE paciente SET ? WHERE rut = ?", [req.body, rut])

    return res.status(204).json()
}