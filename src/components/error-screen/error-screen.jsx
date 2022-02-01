import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

function ErrorScreen() {
  return (
    <div className='error'>
      <h1 className='error__title'>404 Not Found</h1>
      <Link className='error__link' to={AppRoute.MAIN}>Go back to the main page</Link>
    </div>
  );
}

export default ErrorScreen;
