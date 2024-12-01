import PropTypes from 'prop-types';
import { isLoggedIn, getUserProfile } from './js/authService';
import { Navigate } from 'react-router-dom';

const Authorization = ({ children, allowedProfile }) => {
    if (!isLoggedIn() && allowedProfile !== null) {
        return <Navigate to="/login" />;
    }
    if (getUserProfile() !== allowedProfile) {
        return <Navigate to="/" />;
    }

    return children;
};

Authorization.propTypes = {    
    children: PropTypes.node.isRequired    
};

export default Authorization;