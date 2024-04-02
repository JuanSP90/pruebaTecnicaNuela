import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { Subject } from './MainContainer'

interface AddSubjectFormProps {
    staffId: string;
    onClose: () => void;
    onAddSubject: (newSubject: Subject) => void;
}

const AddSubjectForm: React.FC<AddSubjectFormProps> = ({ staffId, onClose, onAddSubject }) => {

    const [formData, setFormData] = useState({
        subjectName: "",
        type: "",
        course: "",
        group: "",
        hour: "",
        classroom: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:3003/subject/${staffId}`, formData)
                .then(response => {
                    onAddSubject(response.data.subject);
                    alert("Asignatura añadida con éxito");
                    onClose();
                })
        } catch (error) {
            console.error("Error al añadir la asignatura", error);
            alert("Debe seleccionar manualmente las propiedades de la asignatura");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className="flex mt-4 justify-between">
                    <h2 className="font-medium text-base leading-6 mb-4 font-onest">Añadir asignatura</h2>

                    <button className="flex mb-4"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
                <div className="mb-4">
                    <label htmlFor="subjectName" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                        Selecciona la asignatura
                    </label>

                    <select id="subjectName" name="subjectName" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue" onChange={handleChange} value={formData.subjectName}>
                        <option value="Matemáticas">Matemáticas</option>
                        <option value="Física">Física</option>
                        <option value="Química">Química</option>
                        <option value="Ed.Fisica">Ed.Fisica</option>
                        <option value="Informatica">Informatica</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="type" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                        Tipo
                    </label>
                    <select id="type" name="type" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue" onChange={handleChange} value={formData.type}>
                        <option value="Obligatoria">Obligatoria</option>
                        <option value="Optativa">Optativa</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="course" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                        Curso
                    </label>
                    <select id="course" name="course" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue" onChange={handleChange} value={formData.course}>
                        <option value="1º de Bachillerato">1º de Bachillerato</option>
                        <option value="2º de Bachillerato">2º de Bachillerato</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="group" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                        Grupo
                    </label>
                    <select id="group" name="group" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue" onChange={handleChange} value={formData.group}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="hour" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                        Horas
                    </label>
                    <select id="hour" name="hour" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue" onChange={handleChange} value={formData.hour}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="classroom" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                        Espacio
                    </label>
                    <select id="classroom" name="classroom" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue" onChange={handleChange} value={formData.classroom}>
                        <option value="1º Bach - Grupo A">1º Bach - Grupo A</option>
                        <option value="Gimnasio">Gimnasio</option>
                        <option value="Auditorio">Auditorio</option>
                    </select>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="text-xs leading-5 text-white bg-customBlue font-onest px-4 py-2 rounded-lg" > Añadir Asignatura</button>
                </div>
            </div>
        </form>
    );
};

export default AddSubjectForm;
