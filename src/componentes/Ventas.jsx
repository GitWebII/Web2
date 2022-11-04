//Permite definir los estados (variables) del componente
import { paste } from '@testing-library/user-event/dist/paste';
import { useState } from 'react';
export default function Ventas(){

//Definir los estados de este componente
const [ident, setIdent] = useState('');
const [lastname, setLastname] = useState('');
const [zone, setZone] = useState('');
const [saledate, setSaledate] = useState('');
const [qualify2, setQualify2] = useState('');
const [qualify3, setQualify3] = useState('');
const [final, setFinal] = useState('');
const [observation, setObservation] = useState('');
//Definir los métodos
const handleSubmit = (event) => {
    event.preventDefault(); //No hace postback (va al servidor y cuando regrese del servicdor borra la información en el formulario)
    //validar que todos los datos se hayan diligenciado
    if (ident != "" && lastname != "" && zone != "" && qualify1 != "" && qualify2 != "" && qualify3 != "") {
        // if (qualify1 > 0 && qualify1 <= 5 || qualify2 > 0 && qualify2 <= 5 || qualify3 > 0 && qualify3 <= 5) {
            setFinal((parseFloat(qualify1)+parseFloat(qualify2)+parseFloat(qualify3))/3);
            let definitiva = (parseFloat(qualify1) + parseFloat(qualify2) + parseFloat(qualify3)) / 3
            setFinal(definitiva.toFixed(1));
            let obs;
            if (definitiva >= 3) {
                obs = "Gana";
            }
            else if (definitiva < 2) {
                obs = "Pierde"
            }
            else {
                obs = "Habilita"

                if (obs == "Habilita" && zone == "ma") {
                    obs = "esta asignatura No se puede habilitar"
                }
            }
            setObservation(obs)
        }
        // else{
        //     alert("Ingrese datos válidos entre 0 y 5**")
        // }
    // }
        else {
            alert("Debe ingresar todos los datos...")
        }
    

}

function onClean(e){
    e.preventDefault();
    //Borrar el contenido de los estados
    setIdent("")
    setLastname("");
    setZone("");
    setSaledate("");
    setQualify2("");
    setQualify3("");
    setFinal("");
    setObservation("");
}

return (
    <div className="container">
        <h2>Ventas</h2>
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
                    <label htmlFor="qualify3">Nombre</label>
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
                        <option value="mv1">Norte</option>
                        <option value="w1">Sur</option>
                        <option value="ma">Oriente</option>
                    </select>
                   
                </div>
                <div className="col">
                    <label htmlFor="saledate">Fecha Venta</label>
                    <input
                        type="text"
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
                <div className="col">
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
                <div className="col">
                    <label htmlFor="bonus">Bonificación</label>
                    <input
                        type="text"
                        placeholder='Nota 3'
                        id='bonus'
                        name='bonus'
                        className='form-control'
                        onChange={e => setBonus(e.target.value)}
                        value={bonus}
                    />
                </div>
                
                 <div className="col">
                    <label htmlFor="qualify3">Nota 3</label>
                    <input
                        type="text"
                        placeholder='Nota 3'
                        id='qualify3'
                        name='qualify3'
                        className='form-control'
                        onChange={e => setQualify3(e.target.value)}
                        value={qualify3}
                    />
                </div>
            </div>
            {/* <div className="row mt-3 ">
                <div className="col">
                    <label htmlFor="final">Definitiva</label>
                    <input
                        type="text"
                        id="final"
                        name="final"
                        className='form-control'
                        value={final}
                    />
                </div>
                <div className="col">
                    <label htmlFor="obervation">Observación</label>
                    <input
                        type="text"
                        id='obervation'
                        name='obervation'
                        className='form-control'
                        value={observation}
                    />
                </div>
            </div> */}
            <div className="row mt-3">
                <div className="col">
                    <button
                        type='Submit'
                        className='btn btn-success' >
                        Calcular
                    </button>
                </div>
            </div>

        </form>
        <form onSubmit={onClean}>
            <button
            className='btn btn-dark'>limpiar</button>                
            </form>            
    </div>
);
}