import PlayingCard from "./PlayingCard";
import useAxios from './hooks/useAxios';
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, clearAll] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(null)}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
      <button onClick={clearAll}>start over</button>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
