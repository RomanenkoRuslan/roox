import Main from '../main/main.jsx'
import ProfileEdit from '../profile-edit/profile-edit.jsx';
import {Switch, Route} from 'react-router-dom';
import { AppRoute } from '../../const.js';
import ErrorScreen from '../error-screen/error-screen.jsx';

function App() {
  return (
      <div className='container'>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <Main />
          </Route>
          <Route path={AppRoute.PROFILE}>
            <ProfileEdit />
          </Route>
          <Route>
            <ErrorScreen />
          </Route>
        </Switch>
      </div>
  );
}

export default App;