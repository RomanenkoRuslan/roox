import { Link } from "react-router-dom";

function Card(props) {
    const user = props.person;
    return (
        <li className="user">
            <div>
                <dl className="user__info-wrap">
                    <dd className="user__info">ФИО:</dd>
                    <dt className="user__description">{user.name}</dt>
                </dl>
                <dl className="user__info-wrap">
                    <dd className="user__info">город:</dd>
                    <dt className="user__description">{user.address.city}</dt>
                </dl>
                <dl className="user__info-wrap">
                    <dd className="user__info">компания:</dd>
                    <dt className="user__description">ООО"{user.company.name}"</dt>
                </dl>
            </div>

            <Link to={`/profile/${user.id}`} className="user__load-more">Подробнее</Link>
        </li>
    );
}
  
export default Card;