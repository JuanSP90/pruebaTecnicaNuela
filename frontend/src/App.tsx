import React from 'react';
import SideBarMenu from './components/SideBarMenu.tsx';
import MainContainer from './components/MainContainer.tsx';

const App: React.FC = () => {
  return (
    <div className="flex h-screen justify-center">
      <div style={{ width: '256px' }}>
        <SideBarMenu />
      </div>
      <div style={{ width: '1184px' }}>
        <MainContainer />
      </div>
    </div>
  );
};

export default App;
