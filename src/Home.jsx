const Home = () => {
    return (
        <>
        <div className="py-5">
            <h1>Conferência de Certificado Digital</h1>
            <p className="my-4">Valide a autenticidade de um certificado de presença digital utilizando a blockchain. Insira o endereço da carteira para visualizar os detalhes do evento e a prova de presença.</p>
            
            <div className="d-flex justify-content-center mt-5">
                <form action="" className="w-75">
                    <div className="input-group mb-3" style={{ height: '55px' }}>
                        <input type="text" className="form-control" placeholder="Indentificador do Certificado"  />
                        <button className="btn btn-outline-primary" type="button" id="idCarteira">
                            <i className="bi bi-search pe-2"></i>
                            Buscar Certificado
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Home;