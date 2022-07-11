import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onLoading }) {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  // Стейт, в котором содержится значение инпута
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText={onLoading ? `Сохранение` : `Сохранить`}
      //параметр из опен равен изначальному состоянию попапа
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <label className="form__field form__fild-first">
        <input name="name" className="form__input" id="name-input" type="text" placeholder="имя" minLength="2"
          maxLength="40" required value={name || ''} onChange={handleChangeName} />
        <span className="form__input-error name-input-error"></span>
      </label>
      <label className="form__field">
        <input name="about" className="form__input" id="about-input" type="text" placeholder="о себе" minLength="2" maxLength="200" required value={description || ''} onChange={handleChangeDescription} />
        <span className="form__input-error about-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
