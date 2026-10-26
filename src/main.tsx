import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { applyTheme } from './config/theme';

applyTheme();

createRoot(document.getElementById('root')!).render(<App />);
