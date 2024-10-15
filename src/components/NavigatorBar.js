import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigatorBar = () => {
    return (
    
    
               <nav>
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
                        </ul>
                    </div>
                
            </nav>
      
        
    );
};

export default NavigatorBar;









