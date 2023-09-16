import { useEffect, useState } from "react"


const CicloDeVida = () => {

    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log('Componente montado.');

        return () => {
            console.log('Desmontando componente.');
        };
    });

    useEffect(() => {
        console.log('Componente Actulizado');


    }, [count]);



    return (
        <>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </>

    )

}

export default CicloDeVida;