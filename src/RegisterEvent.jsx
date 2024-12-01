import FormInput from "./FormInput";
import handleChange from './js/handleChange';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsuario } from './js/authService';
import FormTextarea from "./FormTextArea";
import api from "./js/axiosApi";



const RegisterEvent = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        let user = getUsuario();

        if (user === null) {
            navigate("/login");
            return;
        }
        if (user.perfil !== 0) {
            //TODO: disparar erro
            navigate("/");
            return;
        }

        await api.post("/cadastrar_evento", { 
            "nome": inputs.nome,
            "descricao": inputs.descricao,
            "carga_horaria": inputs.cargaHoraria,
            "data_inicio": inputs.data,
            "hora_inicio": inputs.hora,
            "id_organizador": user.id
        })
        .then((response) => {
            if (response.status === 200) {
                if (response.data) {
                    // TODO: Adicionar feedback de sucesso
                    console.log("Evento cadastrado com sucesso");
                    navigate("/my-events");
                }
            } else {
                //TODO: Adicionar feedback de erro
                console.log("Signup error: " + response);
            }
        })
        .catch((error) => {
            console.log(error.message);
        });

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