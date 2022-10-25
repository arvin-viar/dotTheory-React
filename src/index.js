import React from 'react';
import ReactDOM from "react-dom/client";

import { Provider } from './components/ScoreBoard/Context';
import App from './pages/App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider>
    <App />
  </Provider>
);
