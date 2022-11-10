//Permite definir los estados (variables) del componente
import { paste } from '@testing-library/user-event/dist/paste';
import { useState } from 'react';
export default function Ventas() {

    //Definir los estados de este componente
    const [ident, setIdent] = useState('');
    const [lastname, setLastname] = useState('');
    const [zone, setZone] = useState('');
    const [saledate, setSaledate] = useState('');
    const [name, setName] = useState('');
    const [salevalue, setSalevalue] = useState('');
    const [commissionvalue, setCommissionvalue] = useState('');
    const [bonus, setBonus] = useState('');
    //Definir los métodos
    const handleSubmit = (event) => {
        event.preventDefault(); //No hace postback (va al servidor y cuando regrese del servicdor borra la información en el formulario)
        //validar que todos los datos se hayan diligenciado
        if (ident != "" && lastname != "" && zone != "" && name != "" && saledate != "" && salevalue != "") {
            if (salevalue >= 1000000 && salevalue <= 100000000) {
                let com;
                if (zone == "north") {
                    com = (parseFloat(salevalue) * 0.02);
                }
                else if (zone == "south") {
                    com = (parseFloat(salevalue) * 0.025)
                }
                else {
                    com = (parseFloat(salevalue) * 0.03)
                }
                setCommissionvalue(com)

                let bon;
                if (salevalue >= 80000000) {
                    bon = 50000
                }
                else {
                    bon = 0
                }
                setBonus(bon)
            }
            else {
                alert("Ingrese un valor que se encuentre entre $1.000.000 y $100.000.000")
            }
        }
        else {
            alert("Debe ingresar todos los datos...")
        }
    }

    function onClean(e) {
        e.preventDefault();
        //Borrar el contenido de los estados
        setIdent("");
        setLastname("");
        setName("");
        setZone("");
        setSaledate("");
        setSalevalue("");
        setCommissionvalue("");
        setBonus("");
    }

    return (
        <div className="container">
            <center><h2> Sistema de Ventas</h2></center>
            <form onSubmit={handleSubmit}>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="Ident">Identificación</label>
                        <input
                            type="text"
                            placeholder="Identificacion"
                            id="ident"
                            name="ident"
                            className='form-control'
                            onChange={event => setIdent(event.target.value)}
                            value={ident}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="lastname">Apellido</label>

                        <input
                            type="text"
                            placeholder='Apellido'
                            id='lastname'
                            name='lastname'
                            className='form-control'
                            onChange={e => setLastname(e.target.value)}
                            value={lastname}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            placeholder='Nombre'
                            id='name'
                            name='name'
                            className='form-control'
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="zone">Zona</label>
                        <select
                            name="zone"
                            id="zone"
                            className='form-control'
                            value={zone}
                            onChange={e => setZone(e.target.value)}>
                            <option value="" disabled>Seleccione una zona</option>
                            <option value="north">Norte</option>
                            <option value="south">Sur</option>
                            <option value="east">Oriente</option>
                        </select>

                    </div>
                    <div className="col">
                        <label htmlFor="saledate">Fecha Venta</label>
                        <input
                            type="date"
                            placeholder='Fecha venta'
                            id='saledate'
                            name='saledate'
                            className='form-control'
                            onChange={e => setSaledate(e.target.value)}
                            value={saledate}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="salevalue">Valor Venta</label>
                        <input
                            type="text"
                            placeholder='Valor Venta'
                            id='salevalue'
                            name='salevalue'
                            className='form-control'
                            onChange={e => setSalevalue(e.target.value)}
                            value={salevalue}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <label htmlFor="commissionvalue">Valor Comision</label>
                        <input
                            type="text"
                            placeholder="Valor Comision"
                            id="commissionvalue"
                            name="commissionvalue"
                            className='form-control'
                            onChange={event => setCommissionvalue(event.target.value)}
                            value={commissionvalue}
                        />
                    </div>
                    <div className="col-4">
                        <label htmlFor="bonus">Bonificación</label>
                        <input
                            type="text"
                            placeholder='Bonificación'
                            id='bonus'
                            name='bonus'
                            className='form-control'
                            onChange={e => setBonus(e.target.value)}
                            value={bonus}
                        />
                    </div>


                </div>

                <div className="row mt-3 ">
                    <div className="col-4">
                        <button
                            type='Submit'
                            className='btn btn-primary'
                            >
                            Calcular
                        </button>
                    </div>
                    <div className="col-4">
                        <form onSubmit={onClean}>
                            <button
                                className='btn btn-dark'
                                >Limpiar</button>
                        </form>
                    </div>
                </div>
            </form>
        </div>
    );
}
