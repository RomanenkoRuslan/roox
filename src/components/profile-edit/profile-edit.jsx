import Sort from "../sort/sort.jsx";
import { useSelector } from "react-redux";
import { getUsers } from "../../store/selectors.js";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ProfileEdit() {
    const {id} = useParams();

    const filterById = (element) => {
        return element.id === Number(id);
    }

    const usersList = useSelector(getUsers);
    const user = usersList.filter(filterById)[0];

    const [isDisabled, setIsDisabled] = useState(true);

    const [formData, setFormData] = useState(user);

    const updateFormData = (key, value) => {
        setFormData({...formData, [key]: value });
    }
  
    const updateAddressData = (key, value) => {
        setFormData({...formData, address: {...formData.address, [key]: value}})
    }

    const enable = () => {
        setIsDisabled(false);
    }

    const sendForm = (evt) => {
        evt.preventDefault();
        console.log(JSON.stringify(formData));
    }

    return (
    <>
        <Sort />
        <div className="main">
            <div className="form">
                <div className="form__title-wrap">
                    <h1 className="form__title">Профиль пользоваетля</h1>
                    <button type="button" className="form__button-edit" 
                        onClick={enable}
                    >Редактировать</button>
                </div>

                <form className="form__wrap form__wrap--disabled" action="#" method="POST" onSubmit={sendForm}>
                    <fieldset className="form__information" disabled={isDisabled}>
                        <label className="form__label">
                            <h3 className="form__description">Name</h3>
                            <input className="form__input" type="text" value={formData.name} onChange={(evt) => updateFormData('name', evt.target.value)} required></input>
                        </label>
                        <label className="form__label">
                            <h3 className="form__description">User name</h3>
                            <input className="form__input" type="text" value={formData.username} onChange={(evt) => updateFormData('username', evt.target.value)} required></input>
                        </label>
                        <label className="form__label">
                            <h3 className="form__description">E-mail</h3>
                            <input className="form__input" type="email" value={formData.email} onChange={(evt) => updateFormData('email', evt.target.value)} required></input>
                        </label>
                        <label className="form__label">
                            <h3 className="form__description">Street</h3>
                            <input className="form__input" type="text" value={formData.address.street} onChange={(evt) => updateAddressData('street', evt.target.value)} required></input>
                        </label>
                        <label className="form__label">
                            <h3 className="form__description">City</h3>
                            <input className="form__input" type="text" value={formData.address.city} onChange={(evt) => updateAddressData('city', evt.target.value)} required></input>
                        </label>
                        <label className="form__label">
                            <h3 className="form__description">Zip code</h3>
                            <input className="form__input" type="text" value={formData.address.zipcode} onChange={(evt) => updateAddressData('zipcode', evt.target.value)} required></input>
                        </label>
                        <label className="form__label">
                            <h3 className="form__description">Phone</h3>
                            <input className="form__input" type="text" value={formData.phone} onChange={(evt) => updateFormData('phone', evt.target.value)} required></input>
                        </label>
                        <label className="form__label">
                            <h3 className="form__description">Website</h3>
                            <input className="form__input" type="text" value={formData.website} onChange={(evt) => updateFormData('website', evt.target.value)} required></input>
                        </label>
                        <label className="form__label">
                            <h3 className="form__description">Comment</h3>
                            <textarea className="form__textarea" type="text"  onChange={(evt) => updateFormData('comment', evt.target.value)}></textarea>
                        </label>
                    </fieldset>
                    <button type="submit" className="form__submit" disabled={isDisabled}>Отправить</button>
                </form>
            </div>
        </div>
    </>
);
}
  
export default ProfileEdit;