import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="not-found">
            <h1 className="not-found-code">404</h1>
            <h2 className="not-found-title">Page Not Found</h2>
            <p className="not-found-desc">The page you're looking for doesn't exist or has been moved.</p>
            <button className="not-found-btn" onClick={() => navigate('/home')}>
                Go Back Home
            </button>
        </div>
    );
};

export default NotFound;
