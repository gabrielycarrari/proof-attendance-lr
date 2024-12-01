import api from "./axiosApi";
// import * as jwt from "jwt-decode";

export const login = async (email, senha) => {
    let perfil = 3;
    await api
        .post("/entrar", { "email": email, "senha": senha })
        .then((response) => {
            if (response.status === 200) {
                if (response.data) {
                    if (getUsuario() !== null) {
                        logout();
                    }
                    const jsonString = JSON.stringify(response.data);
                    localStorage.setItem("usuario", jsonString);
                    perfil = response.data.perfil;
                }
            } else {
                console.log("Login error: " + response);
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
    return perfil;
};


export const signup = async (nome, cpf, email, senha, confirmarSenha, perfil) => {
    let perfilLogged = 3;
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
                    perfilLogged = response.data.perfil;
                }
            } else {
                console.log("Signup error: " + response);
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
    return perfilLogged;
};

export const logout = () => {
    localStorage.removeItem("usuario");
};

export const getUsuario = () => {
    return JSON.parse(localStorage.getItem("usuario"));
};

export const getUsername = () => {
    const usuario = getUsuario();
    return usuario ? usuario.nome : null;
};

export const getUserProfile = () => {
    const usuario = getUsuario();
    return usuario ? usuario.perfil : null;
};

export const getUserId = () => {
    const usuario = getUsuario();
    return usuario ? usuario.id : null;
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

export const isLoggedIn = () => {
    return getUsuario() !== null;
};


export const authHeader = () => {
    const token = getToken();
    if (token) {
        return { "x-access-token": token };
    } else {
        return {};
    }
};