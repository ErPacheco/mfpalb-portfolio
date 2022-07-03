import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home.jsx';
import './styles/reset.css';
import './styles/global.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Home />);

