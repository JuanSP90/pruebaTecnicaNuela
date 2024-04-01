import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";

interface Staff {
    staffName: string;
    email: string;
    phone: string;
}

const MainContainer: React.FC = () => {
    const [staff, setStaff] = useState<Staff | null>(null);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await axios.get<Staff>('http://localhost:3003/staff/6609d1627f7b4a724dd3da3b');
                setStaff(response.data);
            } catch (error) {
                console.error('Error al obtener al profesor', error);
            }
        };

        fetchStaff();
    }, []);

    if (!staff) {
        return <div>Cargando datos del profesor...</div>;
    }

    return (
        <div className="w-full  bg-lightgrey">
            <div className="w-full p-4 mb-4">
                <h1 className="font-Onest text-2xl font-medium leading-8 text-left">Profesores</h1>
                <p>Crea y gestiona los profesores</p></div>
            <div className="p-4 border-t border-b border-gray-200">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center">
                            <span className="font-medium leading-none text-white text-3xl">MM</span>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-medium text-gray-900 truncate">{staff.staffName}</h2>
                        <p className="text-sm text-gray-500 truncate">{staff.email}</p>
                        <p className="text-sm text-gray-500 truncate">+{staff.phone}</p>
                    </div>
                    <div>
                        <a href="#edit" className="text-blue">Editar</a>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 mb-4 flex justify-center ">
                <div className="flex flex-row bg-gray-200">
                    <div className="mr-2 p-4 bg-white">Semanal</div>
                    <div className="p-4">Anual</div>
                </div>
            </div>
            <div className="w-full p-4 mb-4 flex flex-row border-b border-gray-200 ">
                <div>
                    <p>Horas totales</p>
                    <h1>18 horas</h1>
                </div>
                <div>
                    <p>Horas lectivas</p>
                    <h1>18 horas</h1>
                </div>
                <div>
                    <p>Horas complementarias</p>
                    <h1>18 horas</h1>
                </div>


            </div>
            <div className="w-full p-4 mb-4 ">

                <div className="flex flex-row">
                    <div>Horas lectivas</div>
                    <div>Horas complementarias</div>
                </div>
                <div className="text-end">+ Añadir Asignatura</div>
                <div>Aqui va el compònente de la tabla con sus props</div>
            </div>

        </div>
    );
};

export default MainContainer;
