import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { DriftPage } from './components/DriftPage';
import { ForzaPage } from './components/ForzaPage';
import { HomePage } from './components/HomePage';
import { Menu } from './components/Menu';
import { TimeAttackPage } from './components/TimeAttackPage';

const App: FC = () => {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;