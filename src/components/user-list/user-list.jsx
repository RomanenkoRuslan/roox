import Card from "../card/card.jsx";

function UserList(props) {
    const users = props.data;
    
    return (
        <div className="users">
            <h1 className="users__title">Список пользователей</h1>
            <ul className="users__list">
                {users.map((element) => <Card key={element.id} person={element}/>)}
            </ul>
        </div>
    );
}
  
export default UserList;