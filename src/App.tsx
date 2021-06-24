import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../src/pages/Home';
import { NewRoom } from '../src/pages/NewRoom';
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
          </Switch>
        </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter >
  );
}
export default App;