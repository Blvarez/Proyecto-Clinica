import { pool } from "../../../config/db";

export default async function handler(req, res) {
    const { cod_medicamento } = req.query

    const [result] = await pool.query("SELECT * FROM medicamento where cod_medicamento = ?", [cod_medicamento])

    return res.status(200).json(result[0])
}