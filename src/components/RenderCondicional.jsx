

const CondicionalRender = () => {
    const isLoged = false;

    return (

        <>
            {isLoged ? <h1>Usuário está logado </h1> : <h1>Usuário não logado</h1>}
        </>
    )
}

export default CondicionalRender;