import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import Home from './pages/Home';

const basename = process.env.PUBLIC_URL || "/";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
