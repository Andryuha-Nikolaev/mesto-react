import React from 'react';

function Card(card) {
  function handleCardClick() {
    card.onCardClick(card);
  }
  return (
    <li className="elements__list-item">
      <img className="elements__image" alt={card.name} src={card.link} onClick={handleCardClick} />
      <button type="button" className="elements__delete-button" aria-label="удалить карточку"></button>
      <div className="elements__container">
        <h2 className="elements__text">{card.name}</h2>
        <div className="elements__like-container">
          <button type="button" className="elements__like-button" aria-label="поставить лайк"></button>
          <span className="elements__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}
export default Card;
