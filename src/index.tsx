import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/styles/index.css';
import reportWebVitals from './reportWebVitals';

// create react node
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// render react components
root.render(<App />);

// report web vitals
reportWebVitals();
