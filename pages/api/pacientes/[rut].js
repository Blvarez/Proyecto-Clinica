import { pool } from "../../../config/db";

export default async function handler(req, res) {
    const { rut } = req.query

    const [result] = await pool.query("SELECT * FROM paciente where rut = ?", [rut])

    return res.status(200).json(result[0])
}