import FormInput from "./FormInput";
import handleChange from './js/handleChange';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from './js/authService';

const Login = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        let perfil = await login(inputs.email, inputs.senha);
        
        if (perfil == 0) {
            
            navigate('/my-events');
            window.location.reload();
        }else if (perfil == 1) {
            navigate('/my-attendances');
            window.location.reload();
        } else {
            //TODO: Tratar erro de cadastro
            setErrors({ email: "E-mail ou senha inválidos" });
        }
       
        setLoading(false);
    }

    function localHandleChange(event) {
        handleChange(event, inputs, setInputs);
    }

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
                        <form onSubmit={handleSubmit}>
                            <FormInput type="email" field="email" label="E-mail" onChange={localHandleChange} error={errors?.email} autofocus={true} value={inputs?.email} />
                            <FormInput type="password" field="senha" label="Senha" onChange={localHandleChange} error={errors?.senha} value={inputs?.senha} />

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