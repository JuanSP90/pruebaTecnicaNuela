import React from 'react';
import { Subject } from './MainContainer'

interface SubjectListProps {
    staffSubjects: Subject[];
}

const SubjectList: React.FC<SubjectListProps> = ({ staffSubjects }) => {
    return (
        <table className="min-w-full border-collapse border rounded-lg border-border shadow overflow-hidden">
            <thead>
                <tr className="text-left text-gray-700 bg-lightgrey border-border border-b">
                    <th className="px-5 py-2 text-gray text-left text-xs font-normal leading-5 font-onest">Nombre</th>
                    <th className="px-5 py-2 text-gray text-left text-xs font-normal leading-5 font-onest ">Tipo</th>
                    <th className="px-5 py-2 text-gray text-left text-xs font-normal leading-5 font-onest ">Curso</th>
                    <th className="px-5 py-2 text-gray text-left text-xs font-normal leading-5 font-onest ">Grupo</th>
                    <th className="px-5 py-2 text-gray text-left text-xs font-normal leading-5 font-onest ">Horas semana</th>
                    <th className="px-5 py-2 text-gray text-left text-xs font-normal leading-5 font-onest ">Espacio Regular</th>
                    <th className="px-5 py-2 text-gray text-left text-xs font-normal leading-5 font-onest ">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {staffSubjects.map((subject) => (
                    <tr key={subject._id} className="bg-white border-border">
                        <td className="px-5 py-2 text-xs border-b border-border w-1/12">{subject.subjectName}</td>
                        <td className="px-5 py-2 text-xs border-b border-border w-1/12">{subject.type}</td>
                        <td className="px-5 py-2 text-xs border-b border-border w-2/12">{subject.course}</td>
                        <td className="px-5 py-2 text-xs border-b border-border w-1/12">{subject.group}</td>
                        <td className="px-5 py-2 text-xs border-b border-border w-2/12">{subject.hour} h</td>
                        <td className="px-5 py-2 text-xs border-b border-border w-2/12">{subject.classroom}</td>
                        <td className="px-5 py-2 text-xs border-b border-border w-2/12">
                            <span className="text-customBlue text-sm font-medium leading-5 text-left mr-3">Ver</span>
                            <span className="text-customBlue text-sm font-medium leading-5 text-left mr-3">Editar</span>
                            <span className="text-red text-sm font-medium leading-5 text-left">Eliminar</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SubjectList;
