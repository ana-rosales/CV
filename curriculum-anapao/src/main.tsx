import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.js';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
