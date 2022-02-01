import {sortTypes} from '../../store/reducer.js'

function Sort({onChangeSort}) {
    return (
        <div className="sort">
            <h2 className="sort__title">Сортировка</h2>

            <ul className="sort__list">
                <li className="sort__rule" data-info="town"
                    onClick={() => onChangeSort(sortTypes.TOWN)}
                >по городу</li>
                <li className="sort__rule" data-info="company"
                    onClick={() => onChangeSort(sortTypes.COMPANY)}
                >по компании</li>
            </ul>
        </div>
    );
}
  
export default Sort;