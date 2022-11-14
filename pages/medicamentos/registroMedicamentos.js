import Layout from "/components/Layout";
const registroMedicamentos = () => (

    <>
        <Layout />
        <div className="regPac">
                <div className="registroo regis">

                    <div cassName="columna11">

                        <h2 className="tcl1">Registro de Medicamentos</h2>
                        <span className="tcl2">registrate para poder aniadir medicamentos</span>

                        <form id="form" classNAme="flex flex-col">
                            <input type="text" placeholder="Cod de Medicamento" />
                            <input type="text" palceholder="Descripcion" />
                            <input type="text" palceholder="Formato" />
                            <input type="text" placeholder="Stock" />

                            <button className="btn">REGISTRAR</button>
                        </form>
                    </div>

                    <img className="columna22" src="https://fondosmil.com/fondo/92816.jpg" />


                </div>
        </div>
    </>
)


export default registroMedicamentos;