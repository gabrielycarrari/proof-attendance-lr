import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { getUsername, getUserProfile, logout } from './js/authService';

const Header = () => {
    const username = getUsername();
    const userProfile = getUserProfile();
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark p-4">
            <div className="container-fluid">
                <div className="nav navbar-nav">
                    <NavLink className="nav-item nav-link mt-1" to="/">
                        <img src="src\assets\icon2.png" alt="" width="40" height="40" className="d-inline-block align-center me-3" />
                        CertifyMe
                    </NavLink>

                    <div className="nav navbar-nav d-flex align-items-center">
                        {/* Exibe "Meus Eventos" apenas para usuários com perfil 0 */}
                        {userProfile === 0 && (
                            <NavLink className="nav-item nav-link" to="/my-events">
                                Meus Eventos
                            </NavLink>
                        )}

                        {/* Exibe "Minhas Presenças" apenas para usuários com perfil 1 */}
                        {userProfile === 1 && (
                            <NavLink className="nav-item nav-link" to="/my-attendances">
                                Minhas Presenças
                            </NavLink>
                        )}
                    </div>
                </div>
                <div className="ml-auto"> 
                {username ? (
                        // Caso o usuário esteja logado
                        <div className="dropdown">
                            <button 
                                className="btn btn-outline-light dropdown-toggle px-4" 
                                type="button" 
                                id="userMenu" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                <i className="bi bi-person-fill pe-2"></i>
                                Olá, {username}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                                <li>
                                    <button 
                                        className="dropdown-item" 
                                        onClick={() => {
                                            logout(); // Faz logout
                                            navigate('/');
                                            window.location.reload();
                                        }}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        // Caso o usuário não esteja logado
                        <NavLink className="nav-item nav-link" to="/login">
                            <button className="btn btn-outline-light px-4" type="submit">
                                <i className="bi bi-person-fill pe-2"></i>
                                Login
                            </button>
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>

    )
}

export default Header;