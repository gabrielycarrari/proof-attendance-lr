const Login = () => {
    return (
        <>
        <section className="pt-5">
            <div className="container py-52 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="src\assets\login2.svg" className="img-fluid"/>
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <h1 className="mb-5 text-center pt-3">Login</h1>    
                        <form>
                            <div className="form-floating mb-4">
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-floating  mb-2">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                <label htmlFor="password">Senha</label>
                            </div>

                            <div className="d-flex justify-content-around align-items-center mb-5">
                                <a href="#!">Esqueceu a senha?</a>
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-lg btn-block w-50">Fazer Login</button>
                            </div>
                            
                        </form>
                        <hr />
                        <div className="d-flex align-items-center justify-content-center pb-2">
                            <p className="mb-0 me-2">Não possui uma conta?</p>
                            <a href="/signup" className="btn btn-outline-success">Criar uma nova</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Login;