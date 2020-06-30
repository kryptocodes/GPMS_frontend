import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'
import'bootstrap/dist/js/bootstrap.bundle.min';
import'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Routes />,
  document.getElementById('root')
);

serviceWorker.unregister();
