import React from 'react';


const Login = (data) => {
    const { email, setEmail, emailError, setEmailError, password, setPassword, passwordError, setPasswordError, hasAccount, setHasAccount, user, setUser, handleLogin, handleSignUp} = data.props;
    return(
        <section className="login">
            <div className="login-container">
            <label>Username</label>
                <input type="text" autoFocus required value={email}  onChange={e => setEmail(e.target.value)} />
                <p>{emailError}</p>
                <label>Password</label>
                <input type="text" required value={password} onChange={e => setPassword(e.target.value)}/>
                <p>{passwordError}</p>
                {
                    hasAccount ? 
                        <><button onClick={handleLogin}>Signin</button>
                        <p>Don't have an account ? <a href="javascript:void(0)" onClick={()=> setHasAccount(!hasAccount)}>Sign Up here</a></p></>
                    :
                        <><button onClick={handleSignUp}>Signup</button>
                        <p>Already have an account ? <a href="javascript:void(0)" onClick={()=> setHasAccount(!hasAccount)}>Sign in</a></p></>
                }
            </div>
        </section>
    )
}

export default Login;