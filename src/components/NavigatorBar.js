import React from 'react';

const NavigatorBar = ({ cartCount }) => {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="container mx-auto flex items-center justify-between px-4 py-3">
                    <a className="text-white" href="/">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/imagen-barkery.jpg`}
                            alt="Logo Barkery"
                            className="w-24"
                        />
                    </a>
                    <div className="flex lg:hidden">
                        <button
                            className="text-white focus:outline-none"
                            type="button"
                        >
                           
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex space-x-4">
                        <a className="text-white hover:text-gray-300" href="/">Inicio</a>
                        <a className="text-white hover:text-gray-300" href="#perros">Perros</a>
                        <a className="text-white hover:text-gray-300" href="#gatos">Gatos</a>
                        <a className="text-white hover:text-gray-300" href="#peces">Peces</a>
                        <a className="text-white hover:text-gray-300" href="#aves">Aves</a>
                        <a className="text-white hover:text-gray-300" href="#contacto">Contacto</a>
                        <a className="text-white hover:text-gray-300" href="#acerca-de-nosotros">Acerca de Nosotros</a>
                        <a className="relative text-white hover:text-gray-300" href="#carrito">
                            <i className="bi bi-cart4 text-xl">{cartCount}</i>
                           
                        </a>
                    </div>
                </div>
            </nav>
            <div className="mt-5"></div>
        </>
    );
};

export default NavigatorBar;







































































