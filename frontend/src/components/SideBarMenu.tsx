import React from 'react';

const SideBarMenu: React.FC = () => {
    return (
        <nav className="flex flex-col w-full">
            <a href="#!" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300">
                Palabra1
            </a>
            <a href="#!" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300">
                Palabra2
            </a>
            <a href="#!" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300">
                Palabra3
            </a>
        </nav>
    );
};

export default SideBarMenu;
