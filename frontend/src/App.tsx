import React from 'react';
import SideBarMenu from './components/SideBarMenu.tsx';
import MainContainer from './components/MainContainer.tsx';

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4">
        <SideBarMenu />
      </div>
      <div className="w-3/4">
        <MainContainer />
      </div>
    </div>
  );
};

export default App;
