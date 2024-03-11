import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use createRoot to render your app
const root = document.getElementById('root');
const rootContainer = createRoot(root);
rootContainer.render(
  <Router basename="/project-klooft">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import 'leaflet/dist/leaflet.css';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <Router>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Router>,
//   document.getElementById('root')
// );

// reportWebVitals();



