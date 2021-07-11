import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {Alert, Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    const [hasAccount, setHasAccount] = useState(true);
    const { handleSignUp, handleSignIn, currentUser } = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
    const handleKey = (e) => {
        if(e.which == 13){
            hasAccount ? signIn(e) : signUp(e);
        }
    }

    async function signUp(e) {
        e.preventDefault();
        try{
            setError('');
            setLoading(true);
            await handleSignUp(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        }
        catch(error){
            setError(error.message);
        }
        setLoading(false);
    }

    async function signIn(e) {
        e.preventDefault();
        try{
            setError('');
            setLoading(true);
            await handleSignIn(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        }
        catch(error){
            setError(error.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(currentUser && currentUser.emailId){
            setHasAccount(true)
        }
    }, []);

    return(
        <section className="login">
            <div className="login-container">
                <h2>{hasAccount ? "Login" : "Sign up"}</h2>
                <label>Username</label>
                <input type="text" onKeyUp={handleKey} autoFocus required ref={emailRef}/> <br />
                <label>Password</label>
                <input type="text" onKeyUp={handleKey} required ref={passwordRef}/> <br />
                {
                    hasAccount ? 
                        <>
                            <Button className="w-100" type="submit" onClick={signIn} disabled={loading}>Log in</Button>
                            <div>
                                <span><a href="" onClick={(e)=> {e.preventDefault(); setHasAccount(!hasAccount)}}>Sign Up here</a>|</span>
                                <span><Link to="/forgot-password">Reset password here</Link></span>
                            </div>
                        </>
                    :
                        <><Button className="w-100" type="submit" onClick={signUp} disabled={loading}>Signup</Button>
                        <p>Already have an account ? <a href="" onClick={(e)=> {e.preventDefault(); setHasAccount(!hasAccount)}}>Sign in</a></p></>
                }
                { error && <Alert variant="danger">{error}</Alert> }
            </div>
        </section>
    )
}

export default Login;