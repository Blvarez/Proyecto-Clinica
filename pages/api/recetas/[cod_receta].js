import { pool } from "../../../config/db";

export default async function handler(req, res) {
    const { cod_receta } = req.query

    const [result] = await pool.query("SELECT * FROM receta where cod_receta = ?", [cod_receta])

    return res.status(200).json(result[0])
}