import { pool } from "../../../config/db"

export default async function handler(req, res) {

    switch (req.method) {
        case "GET":
            return await obtenerPaciente(req, res)
        case "POST":
            return await guardarPaciente(req, res)
    }

}


const obtenerPaciente = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM PACIENTE")
    return res.status(200).json(result)
}

const guardarPaciente = async (req, res) => {
    const { rut, nombre, fono, edad, diagnostico } = req.body

    const [result] = await pool.query("INSERT INTO PACIENTE SET ? ", {
        rut,
        nombre,
        fono,
        edad,
        diagnostico
    })


    console.log(result);
    return res.status(200).json({ rut, nombre, fono, edad, diagnostico});
}