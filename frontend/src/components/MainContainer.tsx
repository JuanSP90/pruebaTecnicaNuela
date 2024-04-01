import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import AddSubjectForm from './AddSubjectForm.tsx'

interface Subject {
    _id: string;
    subjectName: string;
    type: string;
    course: string;
    group: string;
    hour: number;
    classroom: string;
}

interface Staff {
    _id: string;
    staffName: string;
    email: string;
    phone: string;
    subjectId: Subject[];
}

const MainContainer: React.FC = () => {
    const [staff, setStaff] = useState<Staff | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

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

    const totalHours = staff ? staff.subjectId.reduce((acc, subject) => acc + subject.hour, 0) : 0;

    if (!staff) {
        return (
            <div className="fixed inset-0 bg-gray-100 flex justify-center items-center">
                <div className="text-lg font-semibold text-gray-800">
                    Cargando datos del profesor...
                </div>
            </div>)
    }

    return (
        <div className="w-full pt-12 pr-8 pb-8 pl-12 bg-lightgrey">
            <div className="w-full p-4 mb-4">
                <h1 className="font-Onest text-2xl font-medium leading-8 text-left">Profesores</h1>
                <p className="text-sm font-normal leading-5 text-left font-onest">
                    Crea y gestiona los profesores
                </p>
            </div>
            <div className="pt-4 pb-4 border-t border-b border-border">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <div className=" w-20 h-20 gap-0 rounded-lg bg-custom-gradient flex items-center justify-center">
                            <h1 className="font-medium leading-none text-moradoFuerte text-3xl">MM</h1>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-medium text-gray-900 truncate">{staff.staffName}</h2>
                        <p className="text-sm text-gray-500 truncate">{staff.email}</p>
                        <p className="text-sm text-gray-500 truncate">+{staff.phone}</p>
                    </div>
                    <div className="pr-6">
                        <a href="#edit" className="text-customBlue text-sm font-medium leading-5 text-left">Editar</a>
                    </div>

                </div>
            </div>
            <div className="w-full p-4  flex justify-center ">
                <div className="flex flex-row bg-customGray rounded-lg pr-4 pl-4 m-2 items-center">
                    <div className="pt-2 pb-2 pr-5 pl-5 mr-4 rounded-lg bg-white font-semibold">Semanal</div>
                    <div className="pt-3 pb-3 pr-5 pl-5">Anual</div>
                </div>
            </div>
            <div className="w-full pb-4 mb-4 flex flex-row border-b border-border space-x-4">
                <div className="flex-1 bg-white rounded-2xl p-4">
                    <p className="text-left font-satoshi text-xs pb-2">Horas totales</p>
                    <h1 className="text-3xl font-bold text-left leading-[40.5px] font-satoshi mt-2">{totalHours} horas</h1>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-4">
                    <p className="text-left font-satoshi text-xs pb-2">Horas lectivas</p>
                    <h1 className="text-3xl font-bold text-left leading-[40.5px] font-satoshi mt-2">{totalHours} horas</h1>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-4">
                    <p className="text-left font-satoshi text-xs pb-2">Horas complementarias</p>
                    <h1 className="text-3xl font-bold text-left leading-[40.5px] font-satoshi mt-2">0 horas</h1>
                </div>
            </div>

            <div className="w-full mb-4 ">
                <div className="flex flex-row">
                    <div className="text-sm font-semibold leading-6 text-left font-onest text-customBlue border-b mr-6 p-2">Horas lectivas</div>

                    <div className="text-sm font-semibold leading-6 text-left font-onest p-2">Horas complementarias</div>
                </div>
                <div className="flex justify-end">
                    <button className="text-sm leading-5 text-white bg-customBlue font-onest px-4 py-2 rounded-lg" onClick={toggleModal}>+ Añadir Asignatura</button>
                </div>
                <div>Aqui va el compònente de la tabla con sus props</div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-customBlue bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <AddSubjectForm staffId={staff._id} onClose={toggleModal} />
                    </div>
                </div>
            )}



        </div >
    );
};

export default MainContainer;
