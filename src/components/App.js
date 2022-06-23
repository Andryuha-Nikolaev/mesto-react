import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);//задаем изначальное состояние false
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  //с вызовом этой функции состояние всех попапов переводится в закрытое
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}//параметр изменяет изначальное состояние
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={setSelectedCard}
        />
        <Footer />
        <PopupWithForm
          name="ava"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <label className="form__field form__fild-first">
            <input name="avatar" className="form__input" id="avatar-input" type="url" placeholder="Ссылка на аватар" required />
            <span className="form__input-error avatar-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          //параметр из опен равен изначальному состоянию попапа
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <label className="form__field form__fild-first">
            <input name="name" className="form__input" id="name-input" type="text" placeholder="имя" minLength="2"
            maxLength="40" required />
            <span className="form__input-error name-input-error"></span>
          </label>
          <label className="form__field">
            <input name="about" className="form__input" id="about-input" type="text" placeholder="о себе" minLength="2" maxLength="200" required />
            <span className="form__input-error about-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="photo"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <label className="form__field form__fild-first">
            <input name="name" className="form__input" id="photo-input" type="text" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="form__input-error photo-input-error"></span>
          </label>
          <label className="form__field">
            <input name="link" className="form__input" id="link-input" type="url" placeholder="Ссылка на картинку" required />
            <span className="form__input-error link-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да">
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;
