import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import Loader from './components/loader/Loader';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<Loader />}
        persistor={persistor}
        onBeforeLift={() => {
          console.log('Rehydrated state:', store.getState());
        }}
      >
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
