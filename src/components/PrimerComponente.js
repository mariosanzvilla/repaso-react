import React, {useState} from 'react'

export const PrimerComponente = () => {

    //let nombre = "Mario";
    let web = "www.youtube.com";

    const [nombre, setNombre] = useState("Mario");

    let cursos = [
        "curso 1",
        "curso 2"
    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

    return (
        <div>
            <h1>Mi Primer Componente</h1>
            <p> Mi nombre es: {nombre}</p>

            <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder></input>
            <button onClick={e => cambiarNombre("Mariete")}>NuevoNombre</button>
            <h2>Cursos:</h2>
            <ul>
                {
                    cursos.map( (curso, indice) => {
                        return (
                            <li key={indice}>
                                {curso}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
