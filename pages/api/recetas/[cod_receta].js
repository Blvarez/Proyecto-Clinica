import { pool } from "../../../config/db";

export default async function handler(req, res) {


    switch (req.method)
    {
        case 'GET':
            return await obtenerReceta(req, res)

        case 'DELETE':
            return await eliminarReceta(req, res)

        case 'PUT':
            return await actualizarReceta(req,res)
    }

}

const obtenerReceta = async (req, res) => {
    const { cod_receta } = req.query

    const [result] = await pool.query("SELECT * FROM receta where cod_receta = ?", [cod_receta])

    return res.status(200).json(result[0])
}

const eliminarReceta = async (req, res) => {

    const { cod_receta} = req.query
    
    const result = await pool.query("DELETE FROM receta where cod_receta = ?", [cod_receta])

    return res.status(204).json()
}

const actualizarReceta = async (req, res) => {
    const {cod_receta} = req.query

    await pool.query("UPDATE receta SET ? WHERE cod_receta = ?", [req.body, cod_receta])

    return res.status(204).json()
}