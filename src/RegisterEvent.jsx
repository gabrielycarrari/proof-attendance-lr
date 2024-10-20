const RegisterEvent = () => {
    return (
        <>
        <section className="pt-5">
            <div className="container py-52 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    
                    <div className="col-md-7 col-lg-7 col-xl-7">
                        <h1 className="mb-5 text-center pt-3">Cadastre um Novo Evento</h1>
                        <form>
                            <div className="form-floating mb-4 ">
                                <input type="text" className="form-control" id="nome" placeholder=" " />
                                <label htmlFor="nome">Nome Evento</label>
                            </div>

                            <div class="form-floating mb-4">
                                <textarea class="form-control" placeholder="Descrição" id="descricao" style={{ height: '100px' }}></textarea>
                                <label htmlFor="descricao">Descrição</label>
                            </div>

                            <div className="form-floating mb-4 ">
                                <input type="number" className="form-control" id="nome" placeholder=" " />
                                <label htmlFor="nome">Carga Horária (Em horas)</label>
                            </div>

                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-floating">
                                        <input type="date" className="form-control" id="data" placeholder=" " />
                                        <label htmlFor="data">Data</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating">
                                        <input type="time" className="form-control" id="hora" placeholder=" " />
                                        <label htmlFor="hora">Hora de Início</label>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-center pt-5 pb-4">
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-lg btn-block w-50">Cadastrar</button>
                            </div>
                            
                        </form>
                        
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    );
}

export default RegisterEvent;