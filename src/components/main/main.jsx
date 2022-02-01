import UserList from '../user-list/user-list.jsx'
import Sort from '../sort/sort.jsx';
import Loader from '../loader/loader.jsx'
import { getIsDataLoaded, getUsers } from '../../store/selectors.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeSortType } from '../../store/action.js';

function Main() {
    const users = useSelector(getUsers)
    const isLoadedData = useSelector(getIsDataLoaded);
    const dispatch = useDispatch();

    const onChangeSort = (sortType) => dispatch(changeSortType(sortType));
    return (
        <>  
            <Sort onChangeSort={onChangeSort}/>
            <div className="main">
                {!isLoadedData ? <Loader /> : ''}
                {isLoadedData ? <UserList data={users}/> : ''}
            </div>
        </>
    );
}
  
export default Main;