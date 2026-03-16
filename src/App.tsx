import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Chat from './pages/Chat';
import Categories from './pages/Categories';
import Tags from './pages/Tags';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/library" component={Library} />
        <Route path="/chat" component={Chat} />
        <Route path="/categories" component={Categories} />
        <Route path="/tags" component={Tags} />
        <Route path="/settings" component={Settings} />
        <Route path="/" component={Dashboard} /> {/* Default route */}
      </Switch>
    </Router>
  );
};

export default App;
