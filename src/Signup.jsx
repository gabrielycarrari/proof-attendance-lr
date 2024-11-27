import FormInput from "./FormInput";
import handleChange from './js/handleChange';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signup } from './js/authService';

const Signup = () => {

    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        
        if (signup(inputs.nome, inputs.cpf, inputs.email, inputs.senha, inputs.confirmarSenha, inputs.perfil)) {
            if (inputs.perfil == 0) navigate('/my-events') 
            navigate('/my-attendances');
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
                    
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <h1 className="mb-4 text-center pt-3">Cadastro</h1>
                        <form onSubmit={handleSubmit}  autoComplete="off" >
                            <FormInput type="text" field="nome" label="Nome Completo" onChange={localHandleChange} error={errors?.nome} value={inputs?.nome} />
                            <FormInput type="text" field="cpf" label="CPF" onChange={localHandleChange} error={errors?.cpf} value={inputs?.cpf} />
                            <FormInput type="email" field="email" label="E-mail" onChange={localHandleChange} error={errors?.email} autofocus={true} value={inputs?.email} />
                            <FormInput type="password" field="senha" label="Senha" onChange={localHandleChange} error={errors?.senha} value={inputs?.senha} />
                            <FormInput type="password" field="confirmarSenha" label="Confirme sua senha" onChange={localHandleChange} error={errors?.confirmarSenha} value={inputs?.confirmarSenha} />

                            <div className="d-flex justify-content-center pb-4">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="perfil" id="participante" value={1} onChange={localHandleChange} required/>
                                    <label className="form-check-label" htmlFor="perfil">Sou Participante</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="perfil" id="organizador" value={0} onChange={localHandleChange} required/>
                                    <label className="form-check-label" htmlFor="perfil">Sou Organizador de Eventos</label>
                                </div>
                            </div>
                            

                            <div className="d-flex align-items-center justify-content-center pb-2">
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

export default Signup;