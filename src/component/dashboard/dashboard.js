import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Dashboard() {
    const history = useHistory();
    const {handleLogout} = useAuth();
    const {currentUser} = useAuth();

    const logout = (e) => {
        e.preventDefault();
        handleLogout();
        history.push("/login");
    }

    return(
        <h1>
            <section>
                <nav className="dashboard">
                    <h5>Dashboard</h5>
                    {currentUser ? <h6 className="mr20">Email: {currentUser.email}</h6> : ''}
                    <h6 className="log-out" onClick={logout}>Logout</h6>
                </nav>
                <body>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Card 1</h2>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Card 2</h2>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Card 3</h2>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Card 4</h2>
                        </Card.Body>
                    </Card>
                </body>
            </section>
        </h1>
    );
}