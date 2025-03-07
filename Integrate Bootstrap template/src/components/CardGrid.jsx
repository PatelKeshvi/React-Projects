import React from 'react';

const CardGrid = () => {
  const cards = [
    { title: "Card 1", text: "This is a simple card.", img: "https://avatars.mds.yandex.net/i?id=70f20e97c3a7803e15ae255b19cbaa32db4434ab-8556780-images-thumbs&n=13" },
    { title: "Card 2", text: "Another example card.", img: "https://avatars.mds.yandex.net/i?id=403cd5a77ba6f0fc524474e7c354c28ae56731a1-5234690-images-thumbs&n=13" },
    { title: "Card 3", text: "Cards use Bootstrap grid.", img: "https://avatars.mds.yandex.net/i?id=23f3e665ab12a879d05b757eaed40fd088e7d151-5295804-images-thumbs&n=13" },
  ];

  return (
    <div className="row">
      {cards.map((card, index) => (
        <div key={index} className="col-md-4">
          <div className="card mb-4">
            <img src={card.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
