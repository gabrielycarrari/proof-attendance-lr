const Login = () => {
    return (
        <>
        <section className="pt-5">
            <div className="container py-52 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <h1 className="mb-5 text-center pt-3">Cadastro</h1>
                        <form>
                            <div className="form-floating mb-4">
                                <input type="text" className="form-control" id="nome" placeholder=" " />
                                <label htmlFor="nome">Nome Completo</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                <label htmlFor="password">Senha</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                <label htmlFor="password">Confirme sua senha</label>
                            </div>

                            <div className="d-flex justify-content-center pb-4">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="tipoPessoa" id="participante" value="participante" />
                                    <label className="form-check-label" for="participante">Sou Participante</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="tipoPessoa" id="organizador" value="organizador" />
                                    <label className="form-check-label" htmlFor="organizador">Sou Organizador de Eventos</label>
                                </div>
                            </div>
                            

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-lg btn-block w-50">Cadastrar</button>
                            </div>
                            
                        </form>
                        <hr />
                        <div className="d-flex align-items-center justify-content-center pb-2">
                            <p className="mb-0 me-2">Já possui uma conta?</p>
                            <a href="/login" className="btn btn-outline-success">Faça Login</a>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="src\assets\cadastro.svg" className="img-fluid" alt="Phone image" />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Login;