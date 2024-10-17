
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <section 
            
             id="perros" className="container my-5">
                <img src='seccion perros' width="40%" height="60%"></img>
                <h2>Sección de Perros</h2>
                <p>Encuentra todo lo que necesitas para tus perros, desde comida hasta accesorios.</p>
            </section>

            <section id="gatos" className="container my-5">

                <img src='seccion aves' width="40%" height="60%"></img>
                <h2>Sección de Gatos</h2>
                <p>Explora nuestra variedad de productos para gatos, incluyendo juguetes y camas.</p>
            </section>

            <section id="peces" className="container my-5">
                <img src='seccion peces' width="40%" height="60%"></img>
                <h2>Sección de Peces</h2>
                <p>Ofrecemos acuarios, alimentos y otros artículos esenciales para peces.</p>
            </section>

            <section id="aves" className="container my-5">
                <img src='seccion aves' width="40%" height="60%"></img>
                <h2>Sección de Aves</h2>
                <p>Encuentra jaulas, alimentos y otros productos para aves en nuestra tienda.</p>
            </section>

            <section id="contacto" className="container my-5">
                <h2>Contacto</h2>
                <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
            </section>

            <section id="acerca-de-nosotros" className="container my-5">
                <h2>Acerca de Nosotros</h2>
                <p>Te contamos un poco de nuestra empresa</p>
            </section>
        </div>
    );
}

export default HomePage;







