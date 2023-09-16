import { useState } from "react"

const Contador = () => {

    let [contador, setContador] = useState(0);
    return (
        <>
            <h1>{contador}</h1>
            <button onClick={() => { setContador(++contador) }}>incrementar</button>
            <button onClick={() => { setContador(--contador) }}>Decrementar</button>
        </>)


}

export default Contador;
