import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.scss';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('app'));
