import FormInput from "./FormInput";
import handleChange from './js/handleChange';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsuario } from './js/authService';
import FormTextarea from "./FormTextArea";
import api from "./js/axiosApi";


const EditEvent = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const eventId = useParams().id;

    useEffect(() => {
        if (eventId) {
            // setLoading(true);
            const eventDetailsEndpoint = `obter_evento/${eventId}`;
            api.get(eventDetailsEndpoint)
                .then(response => {
                    if (response.status === 200) {
                        setInputs(response.data);
                    } else {
                        navigate("/my-events")
                    }
                })
                .catch(error => {
                    console.error('Erro ao carregar evento:', error);
                    navigate("/my-events")
                    setErrors({ "evento": "Evento não encontrado"});
                })
                .finally(() => {
                    // setLoading(false);
                });
        }
    }, [eventId, navigate]);

    async function handleSubmit(event) {
        event.preventDefault();
        // setLoading(true);

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

        console.log(inputs)

        await api.post("/alterar_evento", { 
            "id": inputs.id,
            "nome": inputs.nome,
            "descricao": inputs.descricao,
            "carga_horaria": inputs.carga_horaria,
            "data_inicio": inputs.data_inicio,
            "hora_inicio": inputs.hora_inicio,
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

        // setLoading(false);
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
                        <h1 className="mb-5 text-center pt-3">Editar Evento</h1>
                        <form onSubmit={handleSubmit}>
                            <FormInput type="text" field="nome" label="Nome Evento" onChange={localHandleChange} error={errors?.nome} value={inputs?.nome} />
                            
                            <FormTextarea field="descricao" label="Descrição" value={inputs?.descricao} onChange={localHandleChange} error={errors?.descricao} />  
                            
                            <FormInput type="number" field="cargaHoraria" label="Carga Horária (Em horas)" onChange={localHandleChange} error={errors?.cargaHoraria} value={inputs?.carga_horaria} />

                            <div className="row mb-4">
                                <div className="col">
                                    <FormInput type="date" field="data" label="Data" onChange={localHandleChange} error={errors?.data} value={inputs?.data_inicio} />
                                </div>
                                <div className="col">
                                    <FormInput type="time" field="hora" label="Hora de Início" onChange={localHandleChange} error={errors?.hora} value={inputs?.hora_inicio} />
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-center pt-5 pb-4">
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-lg btn-block w-50">Alterar</button>
                            </div>
                            
                        </form>
                        
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    );
}

export default EditEvent;