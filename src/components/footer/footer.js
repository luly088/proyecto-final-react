import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center text-lg p-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/imagen-barkery.jpg`} alt="Logo Fatiga" className="w-32 mx-auto" />
                        <h5 className="text-xl font-semibold mt-4">Sobre Nosotros</h5>
                        <p className="mt-2">En Barkery, nos dedicamos a ofrecer los mejores productos para tus mascotas.</p>
                    </div>
                    <div className="mb-4">
                        <h5 className="text-xl font-semibold">Categorías</h5>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#perros" className="text-blue-400 hover:underline">Perros</a></li>
                            <li><a href="#gatos" className="text-blue-400 hover:underline">Gatos</a></li>
                            <li><a href="#peces" className="text-blue-400 hover:underline">Peces</a></li>
                            <li><a href="#aves" className="text-blue-400 hover:underline">Aves</a></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h5 className="text-xl font-semibold">Contacto</h5>
                        <p className="mt-2">Email: fatiga_2024@fatiga.com</p>
                        <p>Teléfono: +123 456 7890</p>
                    </div>
                    <div className="mb-4">
                        <h5 className="text-xl font-semibold">Redes Sociales</h5>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#facebook" className="text-blue-400 hover:underline">Facebook</a></li>
                            <li><a href="#instagram" className="text-blue-400 hover:underline">Instagram</a></li>
                            <li><a href="#twitter" className="text-blue-400 hover:underline">Twitter</a></li>
                            <li><a href="#linkedin" className="text-blue-400 hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>&copy; {new Date().getFullYear()} Fatiga. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;










