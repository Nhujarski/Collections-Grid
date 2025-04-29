import data from '../../data/collections.json';
import './card.css';
const Card = ({ cardImg, cardName, cardDescription }) => {
  console.log(data[0]);
  return (
    <div className='card-container'>
      <img className='card-img' src='...' alt='...' />
      <p className='card-name'></p>
      <p className='card-description'></p>
    </div>
  );
};

export default Card;
