import React from 'react';

interface AddSubjectFormProps {
    staffId: string;
    onClose: () => void;
}

const AddSubjectForm: React.FC<AddSubjectFormProps> = ({ staffId, onClose }) => {

    return (
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
                <label htmlFor="subject" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                    Selecciona la asignatura
                </label>

                <select id="subject" name="subject" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue">
                    <option>Matemáticas</option>
                    <option>Física</option>
                    <option>Química</option>
                    <option>Ed.Fisica</option>
                    <option>Informatica</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="type" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                    Tipo
                </label>
                <select id="type" name="type" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue">
                    <option>Obligatoria</option>
                    <option>Optativa</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="course" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                    Curso
                </label>
                <select id="course" name="course" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue">
                    <option>1º de Bachillerato</option>
                    <option>2º de Bachillerato</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="group" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                    Grupo
                </label>
                <select id="group" name="group" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="hour" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                    Horas
                </label>
                <select id="hour" name="hour" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue">
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="classroom" className="block mb-2 text-sm leading-5 text-gray-700 font-onest font-medium">
                    Espacio
                </label>
                <select id="classroom" name="classroom" className="block w-full p-2 mt-1 bg-white border border-customGray rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue">
                    <option>1º Bach - Grupo A</option>
                    <option>Gimnasio</option>
                    <option>Auditorio</option>
                </select>
            </div>
            <div className="flex justify-end">
                <button className="text-xs leading-5 text-white bg-customBlue font-onest px-4 py-2 rounded-lg" > Añadir Asignatura</button>
            </div>
        </div>
    );
};

export default AddSubjectForm;
