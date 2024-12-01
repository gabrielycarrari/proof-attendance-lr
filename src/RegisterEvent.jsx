import FormInput from "./FormInput";
import handleChange from './js/handleChange';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { signup } from './js/authService';
import FormTextarea from "./FormTextArea";



const RegisterEvent = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        console.log(inputs);
        let evento = await register_event(inputs.nome, inputs.descricao, inputs.cargaHoraria, inputs.data, inputs.hora);
        // let perfil = await signup(inputs.nome, inputs.cpf, inputs.email, inputs.senha, inputs.confirmarSenha, inputs.perfil);
        // if (perfil == 0) {
        //     navigate('/my-events');
        // }else if (perfil == 1) {
        //     navigate('/my-attendances');
        // } else {
        //     //TODO: Tratar erro de cadastro
        //     setErrors({ email: "E-mail ou senha inválidos" });
        // }
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
                    
                    <div className="col-md-7 col-lg-7 col-xl-7">
                        <h1 className="mb-5 text-center pt-3">Cadastre um Novo Evento</h1>
                        <form onSubmit={handleSubmit}>
                            <FormInput type="text" field="nome" label="Nome Evento" onChange={localHandleChange} error={errors?.nome} value={inputs?.nome} />
                            
                            <FormTextarea field="descricao" label="Descrição" value={inputs?.descricao} onChange={localHandleChange} error={errors?.descricao} />  
                            
                            <FormInput type="number" field="cargaHoraria" label="Carga Horária (Em horas)" onChange={localHandleChange} error={errors?.cargaHoraria} value={inputs?.cargaHoraria} />

                            <div className="row mb-4">
                                <div className="col">
                                    <FormInput type="date" field="data" label="Data" onChange={localHandleChange} error={errors?.data} value={inputs?.data} />
                                </div>
                                <div className="col">
                                    <FormInput type="time" field="hora" label="Hora de Início" onChange={localHandleChange} error={errors?.hora} value={inputs?.hora} />
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