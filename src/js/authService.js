import api from "./axiosApi";
// import * as jwt from "jwt-decode";

export const login = async (email, senha) => {
    let loggedIn = false;
    await api
        .post("/entrar", { "email": email, "senha": senha })
        .then((response) => {
            if (response.status === 200) {
                if (response.data) {
                    const jsonString = JSON.stringify(response.data);
                    localStorage.setItem("usuario", jsonString);
                    loggedIn = isOrganizer();
                }
            } else {
                console.log("Login error: " + response);
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
    return loggedIn;
};


export const signup = async (nome, cpf, email, senha, confirmarSenha, perfil) => {
    let loggedIn = false;
    await api
        .post("/cadastrar_usuario", { 
            "nome": nome,
            "cpf": cpf,
            "email": email, 
            "senha": senha,
            "confirmacao_senha": confirmarSenha,
            "perfil": perfil
        })
        .then((response) => {
            if (response.status === 200) {
                if (response.data) {
                    const jsonString = JSON.stringify(response.data);
                    localStorage.setItem("usuario", jsonString);
                    loggedIn = isOrganizer();
                }
            } else {
                console.log("Signup error: " + response);
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
    return loggedIn;
};

export const logout = () => {
    localStorage.removeItem("usuario");
};

export const getUsuario = () => {
    return JSON.parse(localStorage.getItem("usuario"));
};

export const isOrganizer = () => {
    const usuario = getUsuario();
    if (usuario) {
        return (usuario.perfil === 0);
    } else {
        return false;
    }
};


export const isAdmin = () => {
    const token = getToken();
    if (token) {
        const decoded = jwt(token);
        return (decoded.perfil === 0);
    } else {
        return false;
    }
};

export const authHeader = () => {
    const token = getToken();
    if (token) {
        return { "x-access-token": token };
    } else {
        return {};
    }
};