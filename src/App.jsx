import React, { useState } from 'react';
import './App.css';

function App() {
  const [heroData, setHeroData] = useState({ name: '', experience: '' });
  const [heroList, setHeroList] = useState([]);
  const [wasSent, setWasSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Name:', heroData.name);
    console.log('Experience:', heroData.experience);

    setWasSent(true);

    let level = '';
    const xp = parseInt(heroData.experience);

    switch (true) {
      case xp < 1000:
        level = 'Ferro';
        break;
      case xp >= 1001 && xp <= 2000:
        level = 'Bronze';
        break;
      case xp >= 2001 && xp <= 5000:
        level = 'Prata';
        break;
      case xp >= 5001 && xp <= 7000:
        level = 'Ouro';
        break;
      case xp >= 7001 && xp <= 8000:
        level = 'Platina';
        break;
      case xp >= 8001 && xp <= 9000:
        level = 'Ascendente';
        break;
      case xp >= 9001 && xp <= 10000:
        level = 'Imortal';
        break;
      case xp >= 10001:
        level = 'Radiante';
        break;
      default:
        level = '';
    }

    setHeroList([{ ...heroData, level }, ...heroList]); 
    setHeroData({ name: '', experience: '' });
  };

  return (
    <>
      <h1>Classificador de Nível de Herói</h1>

      <form className="input-group" onSubmit={handleSubmit}>
        <span className="input-group-text">Nome e Experiência do seu herói</span>

        <input
          type="text"
          aria-label="Name"
          className="form-control"
          value={heroData.name}
          onChange={(event) => setHeroData({ ...heroData, name: event.target.value })}
        />
        <input
          type="number"
          aria-label="Experience"
          className="form-control"
          value={heroData.experience}
          onChange={(event) => setHeroData({ ...heroData, experience: event.target.value })}
        />
        <button className="btn btn-outline-success" type="submit">Enviar</button>
      </form>

      {wasSent && (
        <div className="result">
          <h2>Heróis registrados:</h2>
          {heroList.map((hero, i) => (
            <div className="list" key={i}>
              <p>O Herói de nome {hero.name} está no nível de {hero.level}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
