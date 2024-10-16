
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavigatorBar = ({ cartCount }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo Fatiga" style={{ width: '100px' }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#perros">Perros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#gatos">Gatos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#peces">Peces</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#aves">Aves</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#acerca-de-nosotros">Acerca de Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#carrito">
                                    <i className="bi bi-cart4" style={{ fontSize: '1.5rem', position: 'relative' }}>
                                        <span 
                                            style={{
                                                position: 'absolute',
                                                top: '-10px',
                                                right: '-10px',
                                                backgroundColor: 'white',
                                                borderRadius: '50%',
                                                padding: '2px 6px',
                                                color: 'black',
                                                fontSize: '0.75rem'
                                            }}
                                        >
                                            {cartCount}
                                        </span>
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mt-5"></div> 
        </>
    );
};

export default NavigatorBar;







































































