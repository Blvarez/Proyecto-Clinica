import {pool} from "../../../config/db"

export default async function handler(req, res) {

    switch (req.method) {
        case "GET":
            return res.status(200).json("Getting Medicine")
        case "POST":

            const {rut, nombre, edad, fono, diagnostico} = req.body

            const [result] = await pool.query("INSERT INTO paciente SET ?", {
                rut,
                nombre,
                edad,
                fono,
                diagnostico
            })

            console.log(result);
            return res.status(200).json({rut, nombre, edad, fono, diagnostico, id: result.insertId});
    }

}