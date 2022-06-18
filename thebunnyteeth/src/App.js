import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import AppRouter from './router/router'
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { removeConsoleLog } from 'utility/utility';
import './styles/custom.css';

const App = (props) => {
  const { user } = useSelector(state => state.authReducer);
  const { token } = useSelector(state => state.authReducer);
  const willMount = useRef(true)

  if (willMount.current) {
    if (process.env.REACT_APP_ENV === 'production') {
      console.log("production if");
      removeConsoleLog()
    }
    willMount.current = false
  }

  return (
    <Router>
      <ReactNotification />
      <AppRouter user={user} token={token} />
    </Router>
  );
}

export default App;
