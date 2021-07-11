import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {Alert, Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const ForgotPassword = () => {
    const { forgotPassword, currentUser } = useAuth();
    const emailRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
    const handleKey = (e) => {
        if(e.which == 13){
            resetPassword(e);
        }
    }

    async function resetPassword(e) {
        e.preventDefault();
        try{
            setError('');
            setLoading(true);
            await forgotPassword(emailRef.current.value);
            history.push("/login");
        }
        catch(error){
            setError(error.message);
        }
        setLoading(false);
    }

    return(
        <section className="login">
            <div className="login-container">
                <h2>Password Recovery</h2>
                <label>Email Id</label>
                <input type="text" onKeyUp={handleKey} autoFocus required ref={emailRef}/> <br />
                <Button className="w-100 primary" type="submit" onClick={resetPassword} disabled={loading}>Reset Password</Button>
                <p>Do you recall you password ? <Link to="/login">Log In</Link></p>
                { error && <Alert variant="danger">{error}</Alert> }
            </div>
        </section>
    )
}

export default ForgotPassword;