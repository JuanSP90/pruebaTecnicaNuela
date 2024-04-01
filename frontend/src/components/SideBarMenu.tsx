import React from 'react';

const SideBarMenu: React.FC = () => {
    return (
        <nav className="flex flex-col w-1/3 mt-10 ml-5">
            <a href="#!" className="px-4 py-2 mt-2 mb-6 text-sm font-semibold text-gray-900  rounded-lg">
                Tajamar
            </a>
            <a href="#!" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg hover:bg-gray-300">
                Inicio
            </a>
            <a href="#!" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg hover:bg-gray-300">
                Horarios
            </a>
            <a href="#!" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg hover:bg-gray-300">
                Profesores
            </a>
            <a href="#!" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg hover:bg-gray-300">
                Familias
            </a>
            <a href="#!" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg hover:bg-gray-300">
                Espacios
            </a>
            <a href="#!" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg hover:bg-gray-300">
                Asignaturas
            </a>
            <a href="#!" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg hover:bg-gray-300">
                Notificaciones
            </a>
            <a href="#!" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg hover:bg-gray-300">
                Settings
            </a>
        </nav>
    );
};

export default SideBarMenu;
