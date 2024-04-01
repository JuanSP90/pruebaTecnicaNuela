import React from 'react';
import tajamar from '../images/tajamar.png';
import bell from '../images/bell.png';
import inicio from '../images/inicio.png';
import reloj from '../images/reloj.png';
import gorro from '../images/Shape.png';
import familia from '../images/familia.png';
import libro from '../images/book-open.png';
import settings from '../images/Vector.png';
import cube from '../images/cube.png';
import avatar from '../images/avatarJ.png';

const SideBarMenu: React.FC = () => {
    return (
        <nav className="flex flex-col mt-10 ml-5 mr-5 justify-start">
            <div className="flex flex-row items-center justify-between px-4 py-2 mt-2 mb-6">
                <div className="flex flex-row justify-start items-center "><img src={tajamar} alt="logo" className="w-4 h-4 mr-1 border rounded-md" />  <a href="#!" className=" text-sm font-semibold text-gray-900 rounded-lg">
                    Tajamar
                </a>
                </div>
                <img alt="logo" src={avatar} className=" w-5 h-5 mr-1" />
            </div>
            <div className="w-full rounded-lg flex flex-row justify-start items-center px-4 py-2 mt-2 bg-lightgrey"><img alt="logo" src={inicio} className="w-4 h-4 mr-1" />  <a href="#!" className="text-sm font-normal leading-6 text-left text-gray-900 font-onest">
                Inicio
            </a></div>
            <div className="flex flex-row justify-start items-center px-4 py-2 mt-2"><img src={reloj} className="w-4 h-4 mr-1" alt="logo" />  <a href="#!" className="text-sm font-normal leading-6 text-left text-gray-900 font-onest">
                Horarios
            </a></div>
            <div className="flex flex-row justify-start items-center px-4 py-2 mt-2"><img src={gorro} className="w-4 h-4 mr-1" alt="logo" />  <a href="#!" className="text-sm font-normal leading-6 text-left text-gray-900 font-onest">
                Profesores
            </a></div >
            <div className="flex flex-row justify-start items-center px-4 py-2 mt-2"><img src={familia} className="w-4 h-4 mr-1" alt="logo" />  <a href="#!" className="text-sm font-normal leading-6 text-left text-gray-900 font-onest">
                Familias
            </a></div >
            <div className="flex flex-row justify-start items-center px-4 py-2 mt-2"><img src={cube} className="w-4 h-4 mr-1" alt="logo" />  <a href="#!" className="text-sm font-normal leading-6 text-left text-gray-900 font-onest">
                Espacios
            </a></div >
            <div className="flex flex-row justify-start items-center px-4 py-2 mt-2"><img src={libro} className="w-4 h-4 mr-1" alt="logo" />  <a href="#!" className="text-sm font-normal leading-6 text-left text-gray-900 font-onest">
                Asignaturas
            </a></div >
            <div className="flex flex-row justify-start items-center px-4 py-2 mt-2"><img src={bell} className="w-4 h-4 mr-1" alt="logo" />  <a href="#!" className="text-sm font-normal leading-6 text-left text-gray-900 font-onest">
                Notificaciones
            </a></div >
            <div className="flex flex-row justify-start items-center px-4 py-2 mt-2"><img src={settings} className="w-4 h-4 mr-1" alt="logo" />  <a href="#!" className="text-sm font-normal leading-6 text-left text-gray-900 font-onest">
                Settings
            </a></div >
        </nav >
    );
};

export default SideBarMenu;
