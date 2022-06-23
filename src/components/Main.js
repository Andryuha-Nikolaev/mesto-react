import React, { useEffect, useState } from 'react';
import api from "../utils/Api"
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((profileInfo) => {
      setUserName(profileInfo.name)
      setUserDescription(profileInfo.about)
      setUserAvatar(profileInfo.avatar)
    })
    api.getCards().then((cardsData) => {
      setCards(cardsData.map((data) => ({
        cardId: data._id,// айди карточки
        name: data.name,
        link: data.link,
        likes: data.likes
      })))
    })
  }, []);

  return (
    //при клике на кнопку открытия попапа изначальное состояние меняется на true
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
          <button type="button" className="profile__avatar-button" id="avatar-button" aria-label="изменить аватар" onClick={() => { onEditAvatar(true) }}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__caption">{userDescription}</p>
          <button type="button" className="profile__edit-button" id="edit-button" aria-label="редактировать профиль" onClick={() => { onEditProfile(true) }}></button>
        </div>
        <button type="button" className="profile__add-button" id="add-button" aria-label="добавить фотографии" onClick={() => { onAddPlace(true) }}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card.cardId}
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
